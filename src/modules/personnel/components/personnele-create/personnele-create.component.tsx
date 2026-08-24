import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";

const transform = (data: any) => {
  const { category_ids, service_ids, ...rest } = data;
  return {
    ...rest,
    categories: {
      data: (category_ids || []).map((id: string) => ({ category_id: id }))
    },
    personnel_services: {
      data: (service_ids || []).map((id: string) => ({ service_id: id }))
    }
  };
};

export const PersonnelCreate = () => (
  <Create title="Додати лікаря / персонал" transform={transform}>
    <SimpleForm>
      <h3>Основна інформація</h3>
      <TextInput source="name" fullWidth label="Ім'я та прізвище (UA)" required />
      <TextInput source="name_en" fullWidth label="Ім'я та прізвище (EN)" />

      <RichTextInput source="description" fullWidth label="Біографія / Опис (UA)" />
      <RichTextInput source="description_en" fullWidth label="Біографія / Опис (EN)" />

      <TextInput
        source="experience"
        fullWidth
        label="Досвід роботи / Стаж"
        helperText="Наприклад: 10 років або Досвід роботи 12 років"
      />
      <TextInput
        source="experience_en"
        fullWidth
        label="Досвід роботи / Стаж (EN)"
        helperText="Наприклад: 10 years or 12 years experience"
      />

      <CloudinaryInput source="image" label="Фото лікаря" />
      <TextInput source="image_alt" fullWidth label="Alt для фото лікаря (UA)" />
      <TextInput source="image_alt_en" fullWidth label="Alt для фото лікаря (EN)" />

      <h3>URL та Спеціалізації</h3>
      <TextInput source="slug" fullWidth label="Slug (UA)" required />
      <TextInput source="slug_en" fullWidth label="Slug (EN)" />

      <ReferenceArrayInput
        source="category_ids"
        reference="personnel_categories"
        label="Спеціалізації / Категорії"
      >
        <SelectArrayInput optionText="title" fullWidth />
      </ReferenceArrayInput>

      <ReferenceArrayInput
        source="service_ids"
        reference="services"
        label="Послуги, які надає лікар"
      >
        <SelectArrayInput optionText="name" fullWidth />
      </ReferenceArrayInput>

      <h3>Сертифікати та дипломи</h3>
      <ArrayInput source="certificates" label="Список сертифікатів (зображення)">
        <SimpleFormIterator inline>
          <CloudinaryInput source="" label="Фото сертифіката" />
        </SimpleFormIterator>
      </ArrayInput>

      <h3>SEO Налаштування</h3>
      <TextInput source="seo_title" fullWidth label="SEO Title (UA)" />
      <TextInput source="seo_description" multiline fullWidth label="SEO Description (UA)" />

      <TextInput source="seo_title_en" fullWidth label="SEO Title (EN)" />
      <TextInput source="seo_description_en" multiline fullWidth label="SEO Description (EN)" />
    </SimpleForm>
  </Create>
);