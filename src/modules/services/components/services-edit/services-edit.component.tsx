import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import { ArrayInput, Edit, ReferenceInput, SelectInput, SimpleForm, SimpleFormIterator, TextInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const ServicesEdit = () => {
  return (
    <Edit title={<CustomTitle source={"title"} />}>
      <SimpleForm>
        <TextInput source="name" fullWidth label="Назва" />
        <TextInput source="name_en" fullWidth label="Назва en" />
        <RichTextInput source="description" fullWidth label="Опис" />
        <RichTextInput source="description_en" fullWidth label="Опис en" />
        <CloudinaryInput source="image" label="Фото іконки" />
        <CloudinaryInput source="mainImage" label="Фото послуги" />
        <TextInput source="image_alt" label="Alt текст" />
        <TextInput source="image_alt_en" label="Alt текст en" />

        <ArrayInput source="faq_ua" label="Часті питання (FAQ UA)" fullWidth>
          <SimpleFormIterator inline>
            <TextInput source="question" label="Питання" fullWidth />
            <TextInput source="answer" label="Відповідь" multiline fullWidth />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput source="faq_en" label="Часті питання (FAQ EN)" fullWidth>
          <SimpleFormIterator inline>
            <TextInput source="question" label="Питання (en)" fullWidth />
            <TextInput source="answer" label="Відповідь (en)" multiline fullWidth />
          </SimpleFormIterator>
        </ArrayInput>

        <TextInput source="seo_title" fullWidth label="SEO title ua" />
        <TextInput source="seo_description" multiline fullWidth label="SEO Description ua" />
        <TextInput source="seo_title_en" fullWidth label="SEO title en" />
        <TextInput source="seo_description_en" multiline fullWidth label="SEO Description en" />

        <ReferenceInput source="parent_id" reference="services">
          <SelectInput
            optionText="name"
            label="Батьківська послуга"
            fullWidth
            emptyText="Немає (Коренева послуга)"
          />
        </ReferenceInput>

        <TextInput source="slug" multiline fullWidth label="Slug" />
        <TextInput source="slug_en" multiline fullWidth label="Slug en" />
        <TextInput source="custom_robots" label="Robots (html tags)" />
      </SimpleForm>
    </Edit>
  );
};
