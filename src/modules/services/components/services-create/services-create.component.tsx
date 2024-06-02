import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { Create, SimpleForm, TextInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { CloudinaryInput_2 } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent_2";


export const ServicesCreate = () => (
  <Create title="Додати послугу">
    <SimpleForm>
      <TextInput source="name" fullWidth label="Назва" />
      <RichTextInput source="description" fullWidth label="Опис" />
      <CloudinaryInput source="image" label="Фото" />
      <CloudinaryInput_2 source="image" label="Фото" />
    </SimpleForm>
  </Create>
);
