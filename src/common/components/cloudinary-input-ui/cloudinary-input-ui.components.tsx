import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import { AdvancedImage } from "@cloudinary/react";
import { FC, useRef } from "react";
import { cloudinary } from "@app/core/cloudinary";

interface CloudinaryInputUIProps {
  label: string;
  // label: string;
  onImageSelected: (image: File) => void;
  disabled: boolean;
  value?: string;
  fitImage?: boolean;
}

export const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({
  label,
  value,
  disabled,
  onImageSelected,
  fitImage,
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
    if (!e.target.files) {
      return;
    }
    const [file] = Array.from(e.target.files);

    onImageSelected(file);
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
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={onUploadClick}
            disabled={disabled}
          >
            <Typography>Завантажити</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
