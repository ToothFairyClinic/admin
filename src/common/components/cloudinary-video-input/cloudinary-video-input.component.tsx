import { FC, useRef, useState } from "react";
import { InputProps, useInput, useNotify } from "react-admin";
import { useFormContext } from "react-hook-form";
import axios, { AxiosError } from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  LinearProgress,
  Typography,
} from "@mui/material";
import { CloudinaryUploadDTO } from "../cloudinary-input-ui/cloudinary-upload.dto";
import { useCloudinarySignatureQuery } from "@app/core/types";

const CLOUD = "dc7d3byxg";

interface VideoUploadDTO extends CloudinaryUploadDTO {
  duration?: number;
}

/** Поля, які заповнюються з відповіді Cloudinary, щоб сайт мав тривалість, розмір і дату для розмітки VideoObject. */
interface VideoMetaSources {
  duration: string;
  width: string;
  height: string;
  uploadedAt: string;
}

type CloudinaryVideoInputProps = InputProps & { meta: VideoMetaSources };

const formatDuration = (seconds?: number | null) => {
  if (!seconds) return "";
  const total = Math.round(Number(seconds));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
};

/**
 * Завантаження відео в Cloudinary з адмінки. Зберігає public_id у полі source,
 * а тривалість, ширину, висоту і дату завантаження - у сусідні поля форми.
 */
export const CloudinaryVideoInput: FC<CloudinaryVideoInputProps> = (props) => {
  const { label, source, meta } = props;
  const notify = useNotify();
  const inputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const { setValue, watch } = useFormContext();

  const { data: cloudSignature, loading } = useCloudinarySignatureQuery({ fetchPolicy: "network-only" });
  const {
    field: { onChange, value },
  } = useInput(props);

  const duration = watch(meta.duration);
  const width = watch(meta.width);
  const height = watch(meta.height);

  const onFileSelected = async (file: File) => {
    if (!cloudSignature?.cloudinarySignature) return;
    const { cloudName, apiKey, publicId, signature, timestamp } = cloudSignature.cloudinarySignature;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("public_id", publicId);
    formData.append("signature", signature);
    formData.append("timestamp", String(timestamp));
    formData.append("folder", "products");
    formData.append("upload_preset", "nibw5oyz");

    setProgress(0);
    try {
      const { data } = await axios.post<VideoUploadDTO>(
        `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`,
        formData,
        { onUploadProgress: (e) => e.total && setProgress(Math.round((e.loaded / e.total) * 100)) }
      );
      onChange(data.public_id);
      const opts = { shouldDirty: true };
      setValue(meta.duration, data.duration ? Math.round(data.duration * 100) / 100 : null, opts);
      setValue(meta.width, data.width || null, opts);
      setValue(meta.height, data.height || null, opts);
      setValue(meta.uploadedAt, data.created_at || new Date().toISOString(), opts);
      notify("Відео завантажено. Збережіть публікацію", { type: "success" });
    } catch (e) {
      notify(`Не вдалося завантажити відео: ${(e as AxiosError).message}`, { type: "error" });
    } finally {
      setProgress(null);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const onRemove = () => {
    onChange(null);
    const opts = { shouldDirty: true };
    [meta.duration, meta.width, meta.height, meta.uploadedAt].forEach((f) => setValue(f, null, opts));
  };

  const previewUrl = value ? `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto,w_360/${value}.mp4` : "";
  const posterUrl = value ? `https://res.cloudinary.com/${CLOUD}/video/upload/so_1,w_360,q_auto,f_jpg/${value}.jpg` : "";

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="file"
        accept="video/mp4,video/webm,video/quicktime"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={(e) => e.target.files?.[0] && onFileSelected(e.target.files[0])}
      />
      <Card variant="outlined">
        <CardHeader title={String(label ?? source)} />
        <CardContent>
          {value ? (
            <>
              <video
                src={previewUrl}
                poster={posterUrl}
                controls
                playsInline
                preload="none"
                style={{ width: 240, maxHeight: 430, borderRadius: 12, background: "#000" }}
              />
              <Typography variant="body2" sx={{ mt: 1 }}>
                {formatDuration(duration)}
                {width && height ? ` · ${width}x${height}` : ""}
              </Typography>
            </>
          ) : (
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Відео ще не завантажено. Підходить MP4 до 100 МБ; для телефонів - вертикальне 9:16.
            </Typography>
          )}
          {progress !== null && (
            <div style={{ marginTop: 12 }}>
              <LinearProgress variant="determinate" value={progress} />
              <Typography variant="body2" sx={{ mt: 0.5 }}>Завантаження: {progress}%</Typography>
            </div>
          )}
        </CardContent>
        <CardActions>
          <Button variant="contained" disabled={loading || progress !== null} onClick={() => inputRef.current?.click()}>
            <Typography>{value ? "Замінити відео" : "Завантажити відео"}</Typography>
          </Button>
          {value && (
            <Button color="error" disabled={progress !== null} onClick={onRemove}>
              <Typography>Прибрати відео</Typography>
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};
