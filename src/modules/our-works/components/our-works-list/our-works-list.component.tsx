import { BooleanField, Datagrid, EditButton, List, TextField } from "react-admin";

export const OurWorksList = () => (
  <List exporter={false}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="title" label="Назва" />
      <TextField source="description" label="Опис" />
      <BooleanField source="is_case_published" label="Сторінка кейсу" />
      <TextField source="slug" label="Slug" />
      <EditButton />
    </Datagrid>
  </List>
);
