import { Datagrid, EditButton, List, TextField } from "react-admin";

export const PageMetadataList = () => (
    <List exporter={false}>
        <Datagrid rowClick="expand" bulkActionButtons={false}>
            <TextField source="page_route" label="Назва" />

            <EditButton />
        </Datagrid>
    </List>
);
