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

export const PriceListCategoryList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="title" label="Назва" />

      <EditButton />
    </Datagrid>
  </List>
);
