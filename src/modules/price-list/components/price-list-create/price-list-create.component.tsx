import {
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PriceListCreate = () => (
  <Create title="Додати категорію до прайсу">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва" />
      <ReferenceInput
        source="price_list_category_id"
        reference="price_list_categories"
        label="Категорія"
      >
        <SelectInput optionText="title" label="Спеціалізація" />
      </ReferenceInput>
      <TextInput source="price" label="Ціна" />
    </SimpleForm>
  </Create>
);
