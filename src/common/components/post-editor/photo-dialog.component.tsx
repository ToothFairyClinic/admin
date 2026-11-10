import { FC, useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

export interface PhotoDialogResult {
  alt: string;
  caption: string;
}

interface PhotoDialogProps {
  open: boolean;
  /** Адреса фото для попереднього перегляду. */
  src?: string | null;
  initialAlt?: string;
  /** Показувати поле підпису (лише під час вставки нового фото; наявний підпис правиться прямо в тексті). */
  withCaption?: boolean;
  title: string;
  submitLabel: string;
  onClose: () => void;
  onSubmit: (result: PhotoDialogResult) => void;
}

const ALT_SOFT_LIMIT = 125;

/** Прибирає переноси рядків і зайві пробіли: alt - один рядок. */
export const cleanAlt = (value: string) => value.replace(/\s+/g, " ").trim();

/**
 * Вікно опису фото в тексті: alt (що на фото, для пошуку й незрячих відвідувачів) і підпис.
 * Використовується і для нового фото, і для зміни alt наявного (подвійний клік по фото або кнопка Alt).
 */
export const PhotoDialog: FC<PhotoDialogProps> = ({
  open,
  src,
  initialAlt = "",
  withCaption = false,
  title,
  submitLabel,
  onClose,
  onSubmit,
}) => {
  const [alt, setAlt] = useState(initialAlt);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    if (open) {
      setAlt(initialAlt);
      setCaption("");
    }
  }, [open, initialAlt]);

  const length = cleanAlt(alt).length;
  const warn = length === 0 || length > ALT_SOFT_LIMIT;
  const altHelp =
    length === 0
      ? "Порожньо: на сайті для цього фото не буде опису. Напишіть, що зображено, 5-15 слів, без слів фото чи картинка"
      : length > ALT_SOFT_LIMIT
        ? `${length} символів: задовго, пошуковики читають приблизно до ${ALT_SOFT_LIMIT}. Скоротіть`
        : `${length} символів. Що зображено, без слів фото чи картинка`;

  const submit = () => onSubmit({ alt: cleanAlt(alt), caption: caption.trim() });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {src && (
          <img
            src={src}
            alt=""
            style={{ display: "block", maxWidth: "100%", maxHeight: 220, margin: "0 auto 16px", borderRadius: 8 }}
          />
        )}
        <TextField
          label="Alt: опис фото для пошуку й читалок екрана"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          multiline
          minRows={2}
          fullWidth
          autoFocus
          margin="dense"
          color={warn ? "warning" : "primary"}
          FormHelperTextProps={{ sx: { color: warn ? "warning.main" : undefined } }}
          helperText={altHelp}
        />
        {withCaption && (
          <TextField
            label="Підпис під фото (необов'язково, видно на сайті)"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            fullWidth
            margin="dense"
            helperText="Посилання на автора фото можна додати потім у тексті підпису. Підпис не заміна alt"
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Скасувати</Button>
        <Button variant="contained" onClick={submit}>
          {submitLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
