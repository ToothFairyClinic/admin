import { FC, useState } from "react";
import { InputProps, useInput, useNotify } from "react-admin";
import { CloudinaryInputUI } from "../cloudinary-input-ui/cloudinary-input-ui.components";
import { useCloudinarySignatureLazyQuery } from "@app/core/types";
import { prepareImage, uploadErrorMessage, uploadToCloudinary } from "@app/core/cloudinary-upload";

export const CloudinaryInput: FC<InputProps> = (props) => {
  const { label, source } = props;

  const computetLabel = String(label ?? source);
  // Підпис беремо перед кожним завантаженням: виданий при відкритті форми прострочується за годину.
  const [getSignature] = useCloudinarySignatureLazyQuery({ fetchPolicy: "network-only" });
  const [status, setStatus] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const notify = useNotify();

  const {
    field: { onChange, value },
  } = useInput(props);

  const fail = (message: string) => {
    setError(message);
    notify(message, { type: "error" });
  };

  const onImageSelected = async (image: File) => {
    setError(null);
    let file = image;
    try {
      setStatus("Готуємо фото...");
      file = await prepareImage(image);

      const { data: sig } = await getSignature();
      if (!sig?.cloudinarySignature) {
        fail("Не вдалося отримати дозвіл на завантаження: оновіть сторінку і увійдіть знову");
        return;
      }

      setStatus("Завантаження...");
      setProgress(0);
      const data = await uploadToCloudinary(file, sig.cloudinarySignature, "auto", setProgress);
      onChange(data.public_id);
      notify("Фото завантажено. Натисніть Зберегти, щоб воно з'явилось на сайті", { type: "success" });
    } catch (e) {
      fail(uploadErrorMessage(e, file));
    } finally {
      setStatus(null);
      setProgress(null);
    }
  };

  return (
    <CloudinaryInputUI
      label={computetLabel}
      value={value}
      disabled={status !== null}
      status={status}
      progress={progress}
      error={error}
      onImageSelected={onImageSelected}
      onRemove={() => onChange(null)}
      fitImage={true}
    />
  );
};
