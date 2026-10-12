import {
  ArrayInput,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  SimpleFormIterator,
  TextInput,
  required,
} from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { PostEditor } from "@app/common/components/post-editor/post-editor.component";

const emptyToNull = (v: any) => (v === "" || v === undefined ? null : v);
const dateToNull = (v: any) => (v ? new Date(v).toISOString() : null);

const DoctorInput = ({ source, label }: { source: string; label: string }) => (
  <ReferenceInput
    source={source}
    reference="personnel"
    perPage={200}
    sort={{ field: "name", order: "ASC" }}
  >
    <SelectInput
      optionText="name"
      label={label}
      fullWidth
      emptyText="Не вказано"
      parse={emptyToNull}
    />
  </ReferenceInput>
);

export const PostFormFields = () => (
  <>
    <h3>Публікація</h3>
    <BooleanInput source="is_published" label="Опублікувати на сайті" />
    <DateTimeInput
      source="published_at"
      label="Дата публікації"
      parse={dateToNull}
      helperText="За цією датою статті сортуються у списку"
    />

    <h3>Основне</h3>
    <TextInput source="title" fullWidth label="Назва" validate={required()} />
    <TextInput
      source="slug"
      fullWidth
      label="Slug"
      validate={required()}
      helperText="Адреса сторінки: /ua/blog/slug. Лише малі латинські літери, цифри й дефіс"
    />
    <TextInput source="h1" fullWidth label="Заголовок H1" helperText="Якщо порожньо — береться назва" />
    <TextInput source="excerpt" multiline fullWidth label="Анонс" helperText="Короткий текст у списку статей" />

    <PostEditor source="content" label="Текст статті" />

    <h3>Головне зображення</h3>
    <CloudinaryInput source="hero_image" label="Зображення вгорі сторінки" />
    <TextInput source="hero_image_alt" fullWidth label="Alt головного зображення" />

    <h3>Автор</h3>
    <DoctorInput source="author_id" label="Автор" />
    <DoctorInput source="reviewer_id" label="Перевірив (медичний рецензент)" />

    <h3>Часті запитання</h3>
    <ArrayInput source="faq_ua" label="FAQ" fullWidth>
      <SimpleFormIterator inline>
        <TextInput source="question" label="Питання" fullWidth />
        <TextInput source="answer" label="Відповідь" multiline fullWidth />
      </SimpleFormIterator>
    </ArrayInput>

    <h3>SEO</h3>
    <TextInput source="seo_title" fullWidth label="SEO title" />
    <TextInput source="seo_description" multiline fullWidth label="SEO description" />
    <TextInput source="custom_robots" fullWidth label="Robots (html tags)" />

    <h3>Англійська версія</h3>
    <p style={{ margin: 0, opacity: 0.7 }}>
      Якщо англійські поля порожні — англійської сторінки не існує, і в карту сайту вона не потрапляє
    </p>
    <TextInput source="title_en" fullWidth label="Назва en" />
    <TextInput source="slug_en" fullWidth label="Slug en" parse={emptyToNull} />
    <TextInput source="h1_en" fullWidth label="Заголовок H1 en" />
    <TextInput source="excerpt_en" multiline fullWidth label="Анонс en" />

    <PostEditor source="content_en" label="Текст статті en" />

    <TextInput source="hero_image_alt_en" fullWidth label="Alt головного зображення en" />

    <ArrayInput source="faq_en" label="FAQ en" fullWidth>
      <SimpleFormIterator inline>
        <TextInput source="question" label="Питання en" fullWidth />
        <TextInput source="answer" label="Відповідь en" multiline fullWidth />
      </SimpleFormIterator>
    </ArrayInput>

    <TextInput source="seo_title_en" fullWidth label="SEO title en" />
    <TextInput source="seo_description_en" multiline fullWidth label="SEO description en" />
  </>
);
