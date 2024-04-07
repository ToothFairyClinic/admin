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

export const OurWorksList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="title" label="назва" />
      <TextField source="description" label="Опис" />
      <EditButton />
    </Datagrid>
  </List>
);
