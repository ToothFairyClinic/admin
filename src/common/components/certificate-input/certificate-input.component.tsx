import { FC, useEffect } from "react";
import { InputProps } from "react-admin";
import { useFormContext, useWatch } from "react-hook-form";
import { CloudinaryInput } from "../cloudinary-input/cloudinary-input.comnponent";
import { AltTextInput } from "../alt-text-input/alt-text-input.component";

/**
 * Один сертифікат лікаря в ArrayInput (SimpleFormIterator дає source вигляду certificates.0).
 * Раніше сертифікат зберігався рядком (public_id у Cloudinary), тепер об'єктом { image, alt, alt_en }.
 * Старий рядок при відкритті форми перетворюється на об'єкт, після Зберегти в базі буде новий формат.
 */
export const CertificateInput: FC<InputProps> = ({ source }) => {
  const { setValue } = useFormContext();
  const value = useWatch({ name: source });
  const legacy = value == null || typeof value === "string";

  useEffect(() => {
    if (legacy) {
      setValue(source, { image: value || null, alt: "", alt_en: "" });
    }
  }, [legacy, source, value, setValue]);

  if (legacy) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 640 }}>
      <CloudinaryInput source={`${source}.image`} label="Фото сертифіката" />
      <AltTextInput
        source={`${source}.alt`}
        imageSource={`${source}.image`}
        label="Alt сертифіката (UA)"
        fallback="Сертифікат N, ім'я лікаря"
      />
      <AltTextInput
        source={`${source}.alt_en`}
        imageSource={`${source}.image`}
        label="Alt сертифіката (EN)"
        fallback="Certificate N, ім'я лікаря"
      />
    </div>
  );
};
