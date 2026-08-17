import { Edit, SimpleForm, TextInput } from "react-admin";

export const PersonnelCategoryEdit = () => (
  <Edit title="Додати категорію персонала">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва категорії" />
      <TextInput source="title_en" fullWidth label="Title category (en)" />
    </SimpleForm>
  </Edit>
);
