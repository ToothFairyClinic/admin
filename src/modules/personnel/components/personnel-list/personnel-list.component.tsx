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

export const PersonnelList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="name" label="Ім'я" />
      <ReferenceField
        source="personnel_category_id"
        reference="personnel_categories"
        label="Категорія"
      >
        <TextField source="title" label="Назва" />
      </ReferenceField>

      <EditButton />
    </Datagrid>
  </List>
);
