import { Datagrid, EditButton, List, TextField } from "react-admin";

export const PersonnelCategoryList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="title" label="Назва" />

      <EditButton />
    </Datagrid>
  </List>
);
