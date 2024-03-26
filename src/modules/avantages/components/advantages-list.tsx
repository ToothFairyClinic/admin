import { List, Datagrid, TextField, EditButton } from "react-admin";

export const AdvantagesList = () => (
  <List exporter={false}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="title" label="Текст" />
      <EditButton />
    </Datagrid>
  </List>
);
