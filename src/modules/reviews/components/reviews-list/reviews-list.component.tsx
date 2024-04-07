import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";

export const ReviewsList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="client_name" label="Ім'я" />
      <TextField source="client_phone" label="Телефон" />

      <EditButton />
    </Datagrid>
  </List>
);
