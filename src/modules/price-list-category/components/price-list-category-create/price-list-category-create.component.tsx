import { Create, SimpleForm, TextInput } from "react-admin";

export const PriceListCategoryCreate = () => (
  <Create title="Додати категорію прйс-листа">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва категорії" />
      <TextInput source="title_en" fullWidth label="Назва категорії парйс-листа en" />
    </SimpleForm>
  </Create>
);
