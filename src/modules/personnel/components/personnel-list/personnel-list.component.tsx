import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  TextField,
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
