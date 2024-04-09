import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { Create, SimpleForm, TextInput } from "react-admin";

export const ServicesCreate = () => (
  <Create title="Додати послугу">
    <SimpleForm>
      <TextInput source="name" fullWidth label="Назва" />
      <TextInput source="description" fullWidth label="Опис" multiline />
      <CloudinaryInput source="image" label="Фото" />
      <CloudinaryInput source="mainImage" label="Фото послуги" />
    </SimpleForm>
  </Create>
);
