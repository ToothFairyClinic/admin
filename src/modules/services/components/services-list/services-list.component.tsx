import { Datagrid, EditButton, List, TextField } from "react-admin";

export const ServicesList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="name" label="Назва" />

      <EditButton />
    </Datagrid>
  </List>
);
