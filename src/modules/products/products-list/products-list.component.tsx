import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";

const filters = [
  <TextInput source="title" label="Пошук по назві" />,
  <ReferenceInput
    source="products_category_id"
    reference="products_categories"
    label="Категорія"
  >
    <SelectInput optionText="title" label=" категорія" />
  </ReferenceInput>,
];

export const ProductList = () => (
  <List filters={filters} exporter={false}>
    <TextField source="title" label="Назва" />
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="title" label="Назва" />
      <ReferenceField
        source="products_category_id"
        reference="products_categories"
        label="Категорія"
      >
        <TextField source="title" label="Назва" />
      </ReferenceField>

      <EditButton />
    </Datagrid>
  </List>
);
