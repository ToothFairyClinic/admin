import axios, { AxiosError } from "axios";
import { CloudinaryUploadDTO } from "@app/common/components/cloudinary-input-ui/cloudinary-upload.dto";

/** Ліміт безкоштовного тарифу Cloudinary на один файл зображення. */
export const CLOUDINARY_IMAGE_LIMIT = 10 * 1024 * 1024;

/** Довша сторона фото після стискання: з запасом для екранів 2x, сайт сам віддає потрібний розмір. */
const MAX_SIDE = 2560;
/** Файли до цього розміру і довшою стороною до MAX_SIDE вантажимо як є. */
const KEEP_AS_IS_BYTES = 3 * 1024 * 1024;

export interface CloudinarySignature {
  apiKey: string;
  cloudName: string;
  publicId: string;
  signature: string;
  timestamp: number;
}

const loadImage = (file: File) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("decode"));
    img.src = url;
  });

const toBlob = (canvas: HTMLCanvasElement, type: string, quality: number) =>
  new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, quality));

/**
 * Готує фото до завантаження: великі фото з камери чи телефона (12-25 МБ, 20+ Мп) зменшує до 2560 px
 * по довшій стороні і стискає в JPEG (PNG з прозорістю - у WebP). Поворот з EXIF браузер застосовує сам,
 * EXIF з геоміткою при цьому не потрапляє у файл. Формат, який браузер не відкриває (HEIC у Chrome), лишається як є.
 */
export const prepareImage = async (file: File): Promise<File> => {
  if (!file.type.startsWith("image/") || /gif|svg/.test(file.type)) return file;

  let img: HTMLImageElement;
  try {
    img = await loadImage(file);
  } catch {
    return file;
  }
  try {
    const { naturalWidth: w, naturalHeight: h } = img;
    if (file.size <= KEEP_AS_IS_BYTES && Math.max(w, h) <= MAX_SIDE) return file;

    const scale = Math.min(1, MAX_SIDE / Math.max(w, h));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const isPng = file.type === "image/png";
    const type = isPng ? "image/webp" : "image/jpeg";
    let blob: Blob | null = null;
    for (const quality of [0.86, 0.78, 0.68]) {
      blob = await toBlob(canvas, type, quality);
      if (blob && blob.size <= CLOUDINARY_IMAGE_LIMIT * 0.9) break;
    }
    if (!blob || blob.size >= file.size) return file;

    const name = file.name.replace(/\.[^.]+$/, "") + (isPng ? ".webp" : ".jpg");
    return new File([blob], name, { type, lastModified: file.lastModified });
  } finally {
    URL.revokeObjectURL(img.src);
  }
};

const formatMb = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1).replace(".", ",")} МБ`;

/** Текст помилки для людини: Cloudinary пише причину в error.message (розмір, формат, прострочений підпис). */
export const uploadErrorMessage = (e: unknown, file?: File) => {
  const err = e as AxiosError<{ error?: { message?: string } }>;
  const message = err.response?.data?.error?.message || err.message || "невідома помилка";
  if (/file size too large/i.test(message)) {
    const max = Number(message.match(/maximum is (\d+)/i)?.[1]) || CLOUDINARY_IMAGE_LIMIT;
    return `Файл завеликий${file ? ` (${formatMb(file.size)})` : ""}: Cloudinary приймає до ${formatMb(max)}. Зменшіть файл і спробуйте ще раз`;
  }
  if (/stale request/i.test(message)) return "Сторінка була відкрита задовго: оновіть її і завантажте файл ще раз";
  if (/invalid image file|unsupported/i.test(message)) return "Формат не підтримується: завантажте JPG, PNG або WebP";
  if (!err.response) return "Немає зв'язку з Cloudinary: перевірте інтернет і спробуйте ще раз";
  return `Не вдалося завантажити: ${message}`;
};

/** Завантажує файл у Cloudinary з підписом, отриманим саме для цього завантаження (підпис діє годину). */
export const uploadToCloudinary = async (
  file: File,
  signature: CloudinarySignature,
  resource: "auto" | "image" | "video" = "auto",
  onProgress?: (percent: number) => void
) => {
  const { cloudName, apiKey, publicId, signature: sig, timestamp } = signature;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", apiKey);
  formData.append("public_id", publicId);
  formData.append("signature", sig);
  formData.append("timestamp", String(timestamp));
  formData.append("folder", "products");
  formData.append("upload_preset", "nibw5oyz");

  const { data } = await axios.post<CloudinaryUploadDTO>(
    `https://api.cloudinary.com/v1_1/${cloudName}/${resource}/upload`,
    formData,
    { onUploadProgress: (e) => onProgress && e.total && onProgress(Math.round((e.loaded / e.total) * 100)) }
  );
  return data;
};
