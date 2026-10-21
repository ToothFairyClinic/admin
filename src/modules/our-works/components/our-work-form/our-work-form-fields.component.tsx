import { BooleanInput, DateTimeInput, TextInput, required } from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { PostEditor } from "@app/common/components/post-editor/post-editor.component";

const emptyToNull = (v: any) => (v === "" || v === undefined ? null : v);
const dateToNull = (v: any) => (v ? new Date(v).toISOString() : null);

/** Картка в галереї "Наші роботи" і, за бажанням, окрема сторінка кейсу /ua/our-work/slug. */
export const OurWorkFormFields = () => (
  <>
    <h3>Картка в галереї</h3>
    <TextInput source="title" fullWidth label="Назва" validate={required()} />
    <TextInput source="description" fullWidth label="Опис" validate={required()} />
    <CloudinaryInput source="image_before" label="Фото (до і після на одному зображенні: зліва до, справа після)" />

    <h3>Сторінка кейсу</h3>
    <p style={{ margin: 0, opacity: 0.7 }}>
      Якщо кейс опубліковано, картка в галереї веде на окрему сторінку з описом лікування. Без позначки - лише картка
    </p>
    <BooleanInput source="is_case_published" label="Опублікувати сторінку кейсу" />
    <DateTimeInput source="case_published_at" label="Дата публікації кейсу" parse={dateToNull} />
    <TextInput
      source="slug"
      fullWidth
      label="Slug"
      parse={emptyToNull}
      helperText="Адреса сторінки: /ua/our-work/slug. Лише малі латинські літери, цифри й дефіс"
    />
    <TextInput source="h1" fullWidth label="Заголовок H1" />
    <TextInput source="intro" multiline fullWidth label="Вступ під заголовком" helperText="1-2 речення: що зробили і що показують фото" />
    <PostEditor source="content" label="Текст кейсу" />
    <TextInput source="image_alt" fullWidth label="Alt фото" />
    <TextInput source="seo_title" fullWidth label="SEO title" />
    <TextInput source="seo_description" multiline fullWidth label="SEO description" />

    <h3>Англійська версія</h3>
    <p style={{ margin: 0, opacity: 0.7 }}>Якщо англійський slug порожній - англійської сторінки кейсу немає</p>
    <TextInput source="title_en" fullWidth label="Назва en" />
    <TextInput source="description_en" fullWidth label="Опис en" />
    <TextInput source="slug_en" fullWidth label="Slug en" parse={emptyToNull} />
    <TextInput source="h1_en" fullWidth label="Заголовок H1 en" />
    <TextInput source="intro_en" multiline fullWidth label="Вступ en" />
    <PostEditor source="content_en" label="Текст кейсу en" />
    <TextInput source="image_alt_en" fullWidth label="Alt фото en" />
    <TextInput source="seo_title_en" fullWidth label="SEO title en" />
    <TextInput source="seo_description_en" multiline fullWidth label="SEO description en" />
  </>
);
