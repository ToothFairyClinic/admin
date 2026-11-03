import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  LinearProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import { AdvancedImage } from "@cloudinary/react";
import { FC, useRef } from "react";
import { cloudinary } from "@app/core/cloudinary";

interface CloudinaryInputUIProps {
  label: string;
  onImageSelected: (image: File) => void;
  onRemove?: () => void;
  disabled: boolean;
  value?: string;
  fitImage?: boolean;
  /** Що відбувається зараз: стискання чи завантаження. */
  status?: string | null;
  progress?: number | null;
  error?: string | null;
}

export const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({
  label,
  value,
  disabled,
  onImageSelected,
  onRemove,
  fitImage,
  status,
  progress,
  error,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onUploadClick = () => {
    inputRef.current?.click();
  };

  const image = cloudinary.image(value);
  const transformations = ["w_384", "h_240", "dpr_2.0"];
  if (fitImage) {
    transformations.push("c_pad");
  }
  image.addTransformation(transformations.join(","));

  const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const [file] = Array.from(e.target.files ?? []);
    // Скидаємо вибір, щоб той самий файл можна було вибрати ще раз після помилки.
    e.target.value = "";
    if (file) {
      onImageSelected(file);
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onFileInputChange}
      />
      <Card variant="outlined">
        <CardHeader title={label} />
        <CardContent>
          <CardContent>
            {value ? (
              <AdvancedImage cldImg={image} width={384} height={240} />
            ) : (
              <Skeleton
                variant="rectangular"
                width={384}
                height={247}
                style={{ objectPosition: "center", objectFit: "cover" }}
              />
            )}
          </CardContent>
          {status && (
            <div style={{ maxWidth: 384, margin: "0 16px" }}>
              <Typography variant="body2">
                {status}
                {progress !== null && progress !== undefined ? ` ${progress}%` : ""}
              </Typography>
              <LinearProgress
                variant={progress !== null && progress !== undefined ? "determinate" : "indeterminate"}
                value={progress ?? 0}
              />
            </div>
          )}
          {error && (
            <Alert severity="error" style={{ margin: "8px 16px 0" }}>
              {error}
            </Alert>
          )}
          <Typography variant="caption" color="text.secondary" component="p" style={{ margin: "8px 16px 0" }}>
            JPG, PNG або WebP. Великі фото з камери чи телефона адмінка сама зменшить до 2560 px і стисне.
            Після завантаження натисніть Зберегти.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={onUploadClick}
            disabled={disabled}
          >
            <Typography>{value ? "Замінити" : "Завантажити"}</Typography>
          </Button>
          {value && onRemove && (
            <Button color="error" onClick={onRemove} disabled={disabled}>
              <Typography>Прибрати</Typography>
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};
