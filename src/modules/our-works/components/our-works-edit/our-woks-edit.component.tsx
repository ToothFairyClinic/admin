import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import {
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

export const OurWorksEdit = () => (
  <Edit title="Додати приклад роботи">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва" />

      <TextInput source="description" fullWidth label="Опис" />
      <CloudinaryInput source="image_before" label="Фото до" />
    </SimpleForm>
  </Edit>
);
