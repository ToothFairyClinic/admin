import { Create, SimpleForm, TextInput } from "react-admin";

export const PriceListCategoryCreate = () => (
  <Create title="Додати категорію прйс-листа">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва категорії" />
    </SimpleForm>
  </Create>
);
