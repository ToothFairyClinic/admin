import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import { Edit, SimpleForm, TextInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const ServicesEdit = () => {
  return (
    <Edit title={<CustomTitle source={"title"} />}>
      <SimpleForm>
        <TextInput source="name" fullWidth label="Назва" />
        <RichTextInput source="description" fullWidth label="Опис" />
        <CloudinaryInput source="image" label="Фото іконки" />
        <CloudinaryInput source="mainImage" label="Фото послуги" />
      </SimpleForm>
    </Edit>
  );
};
