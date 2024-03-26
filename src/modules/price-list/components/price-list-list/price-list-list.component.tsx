import {
  Datagrid,
  EditButton,
  FunctionField,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";

export const PriceListList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="title" label="Назва" />
      <ReferenceField
        source="price_list_category_id"
        reference="price_list_categories"
        label="Категорія"
      >
        <TextField source="title" label="Назва" />
      </ReferenceField>
      <TextField source="price" label="Ціна" />
      <EditButton />
    </Datagrid>
  </List>
);
