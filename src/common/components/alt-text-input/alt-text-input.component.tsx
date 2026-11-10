import { FC } from "react";
import { TextInput } from "react-admin";
import { useWatch } from "react-hook-form";

interface AltTextInputProps {
  source: string;
  /** Поле зі фото, до якого належить цей alt. */
  imageSource: string;
  label: string;
  /** Що сайт покаже замість порожнього alt, наприклад "назву послуги". */
  fallback: string;
}

/**
 * Поле alt для головного фото сутності. Підказує, що писати, і попереджає, якщо фото є, а alt порожній
 * (на сайті тоді підставиться запасний варіант).
 */
export const AltTextInput: FC<AltTextInputProps> = ({ source, imageSource, label, fallback }) => {
  const image = useWatch({ name: imageSource });
  const alt = useWatch({ name: source });
  const missing = Boolean(image) && !String(alt ?? "").trim();

  return (
    <TextInput
      source={source}
      label={label}
      fullWidth
      helperText={
        missing
          ? `Не заповнено: на сайті буде ${fallback}. Краще описати, що на фото, 5-15 слів, без слів фото чи картинка`
          : `Що зображено на фото, 5-15 слів, без слів фото чи картинка. Порожнє поле - на сайті буде ${fallback}`
      }
      sx={missing ? { "& .MuiFormHelperText-root": { color: "warning.main" } } : undefined}
    />
  );
};
