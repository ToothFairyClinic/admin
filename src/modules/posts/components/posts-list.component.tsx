import {
  BooleanField,
  Datagrid,
  DateField,
  EditButton,
  List,
  ReferenceField,
  TextField,
  TextInput,
  SelectInput,
} from "react-admin";

const filters = [
  <TextInput source="title" label="Пошук за назвою" alwaysOn resettable />,
  <SelectInput
    source="is_published"
    label="Статус"
    alwaysOn
    emptyText="Усі"
    choices={[
      { id: true, name: "Опубліковані" },
      { id: false, name: "Чернетки" },
    ]}
  />,
];

export const PostsList = () => (
  <List
    exporter={false}
    filters={filters}
    sort={{ field: "published_at", order: "DESC" }}
    perPage={25}
  >
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="title" label="Назва" />
      <ReferenceField source="author_id" reference="personnel" label="Автор" link={false}>
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="is_published" label="Опубліковано" />
      <DateField source="published_at" label="Дата" showTime={false} />
      <EditButton />
    </Datagrid>
  </List>
);
