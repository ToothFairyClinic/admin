import {
  ArrayInput,
  BooleanInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleFormIterator,
  TextInput,
  required,
} from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { PostEditor } from "@app/common/components/post-editor/post-editor.component";
import { CloudinaryVideoInput } from "@app/common/components/cloudinary-video-input/cloudinary-video-input.component";

const emptyToNull = (v: any) => (v === "" || v === undefined ? null : v);
const dateToNull = (v: any) => (v ? new Date(v).toISOString() : null);

const VIDEO_META = {
  duration: "video_duration",
  width: "video_width",
  height: "video_height",
  uploadedAt: "video_uploaded_at",
};

const ChaptersInput = ({ source, label }: { source: string; label: string }) => (
  <ArrayInput
    source={source}
    label={label}
    fullWidth
    helperText="Необов'язково. Час початку у форматі 0:08 і коротка назва. На сторінці не показуються, Google може показати їх у пошуку як ключові моменти відео"
  >
    <SimpleFormIterator inline>
      <TextInput source="time" label="Початок" sx={{ width: 110 }} />
      <TextInput source="title" label="Назва фрагмента" fullWidth />
    </SimpleFormIterator>
  </ArrayInput>
);

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

    <h3>Відео під першим екраном</h3>
    <p style={{ margin: 0, opacity: 0.7 }}>
      Якщо відео завантажено, воно показується одразу під заголовком статті і розмічається для Google як VideoObject.
      Назва й опис обов'язкові для розширених результатів пошуку
    </p>
    <CloudinaryVideoInput source="video" label="Відео" meta={VIDEO_META} />
    <TextInput source="video_title" fullWidth label="Назва відео" />
    <TextInput source="video_description" multiline fullWidth label="Опис відео" helperText="2-3 речення: про що відео і кому корисне. Показується на сайті поруч з відео" />
    <ChaptersInput source="video_chapters" label="Фрагменти відео" />
    <CloudinaryInput source="video_poster" label="Обкладинка відео (якщо порожньо - кадр з відео)" />
    <NumberInput source="video_duration" label="Тривалість, с" InputProps={{ readOnly: true }} helperText="Заповнюється автоматично після завантаження" />
    <DateTimeInput source="video_uploaded_at" label="Дата завантаження відео" parse={dateToNull} />

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

    <TextInput source="video_title_en" fullWidth label="Назва відео en" />
    <TextInput source="video_description_en" multiline fullWidth label="Опис відео en" />
    <ChaptersInput source="video_chapters_en" label="Фрагменти відео en" />

    <TextInput source="seo_title_en" fullWidth label="SEO title en" />
    <TextInput source="seo_description_en" multiline fullWidth label="SEO description en" />
  </>
);
