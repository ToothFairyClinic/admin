import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { Create, SimpleForm, TextInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";


export const ServicesCreate = () => (
  <Create title="Додати послугу">
    <SimpleForm>
      <TextInput source="name" fullWidth label="Назва" />
      <RichTextInput source="description" fullWidth label="Опис" />
      <CloudinaryInput source="image" label="Фото" />
      <TextInput source="seo_title" fullWidth label="SEO title" />
      <TextInput source="seo_description" multiline fullWidth label="SEO Description" />
    </SimpleForm>
  </Create>
);
