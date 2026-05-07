import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { Create, SimpleForm, TextInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";


export const ServicesCreate = () => (
  <Create title="Додати послугу">
    <SimpleForm>
      <TextInput source="name" fullWidth label="Назва" />
      <TextInput source="name_en" fullWidth label="Назва en" />
      <RichTextInput source="description" fullWidth label="Опис" />
      <CloudinaryInput source="image" label="Фото іконки" />
      <CloudinaryInput source="mainImage" label="Фото послуги" />
      <TextInput source="seo_title" fullWidth label="SEO title ua" />
      <TextInput source="seo_description" multiline fullWidth label="SEO Description ua" />
      <TextInput source="seo_title_en" fullWidth label="SEO title en" />
      <TextInput source="seo_description_en" multiline fullWidth label="SEO Description en" />
    </SimpleForm>
  </Create>
);
