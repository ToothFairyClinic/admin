import { Edit, SimpleForm, TextInput } from "react-admin";

export const PriceListCategoryEdit = () => (
  <Edit title="Додати категорію персонала">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва категорії парйс-листа" />
    </SimpleForm>
  </Edit>
);
