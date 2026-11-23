import {
  Datagrid,
  EditButton,
  FunctionField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const PriceListList = () => (
  <List exporter={false}>
    <Datagrid rowClick="expand" bulkActionButtons={false}>
      <TextField source="title" label="Назва" />
      <ReferenceField
        source="price_list_category_id"
        reference="price_list_categories"
        label="Категорія"
      >
        <TextField source="title" label="Назва" />
      </ReferenceField>
      <TextField source="price" label="Ціна" />
      {/* Токен ціни для текстів сайту (мета, описи, FAQ): фронт підставляє ціну з цього рядка */}
      <FunctionField
        label="Токен для текстів"
        render={(record: { id: string }) => `{{price:${String(record.id).slice(0, 8)}|num}}`}
      />
      <EditButton />
    </Datagrid>
  </List>
);
