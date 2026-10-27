import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import { ArrayInput, Edit, ReferenceInput, SelectInput, SimpleForm, SimpleFormIterator, TextInput } from "react-admin";
import { PostEditor } from "@app/common/components/post-editor/post-editor.component";

export const ServicesEdit = () => {
  return (
    <Edit title={<CustomTitle source={"title"} />}>
      <SimpleForm>
        <TextInput source="name" fullWidth label="Назва" />
        <TextInput source="name_en" fullWidth label="Назва en" />
        <TextInput source="h1" fullWidth label="Заголовок H1 (UA)" />
        <TextInput source="h1_en" fullWidth label="Заголовок H1 (EN)" />
        <TextInput source="summary" multiline fullWidth label="Короткий опис під H1 (UA, до 60 слів, без цін)" />
        <TextInput source="summary_en" multiline fullWidth label="Короткий опис під H1 (EN, до 60 слів, без цін)" />
        <PostEditor source="description" label="Опис" />
        <PostEditor source="description_en" label="Опис en" />
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

        <ArrayInput source="price_items" label="Ціни на сторінці (позиції прайсу, порядок - стрілками)" fullWidth>
          <SimpleFormIterator inline>
            <ReferenceInput source="price_list_id" reference="price_list" perPage={300} sort={{ field: "title", order: "ASC" }}>
              <SelectInput
                optionText={(row: { title: string; price?: string }) => `${row.title.trim()} - ${row.price ?? ""}`}
                label="Позиція прайсу"
                fullWidth
              />
            </ReferenceInput>
          </SimpleFormIterator>
        </ArrayInput>

        <TextInput source="seo_title" fullWidth label="SEO title ua" />
        <TextInput source="seo_description" multiline fullWidth label="SEO Description ua" />
        <TextInput source="seo_title_en" fullWidth label="SEO title en" />
        <TextInput source="seo_description_en" multiline fullWidth label="SEO Description en" />

        <ReferenceInput
          source="parent_id"
          reference="services"
          perPage={200}
          sort={{ field: "name", order: "ASC" }}
        >
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
