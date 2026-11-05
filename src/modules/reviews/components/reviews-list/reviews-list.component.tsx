import {
  BooleanField,
  BulkDeleteButton,
  BulkUpdateButton,
  Datagrid,
  DateField,
  EditButton,
  FunctionField,
  List,
  SelectInput,
  TextField,
} from "react-admin";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { MaskedPhoneField } from "../review-phone/review-phone.component";
import { ReviewModerationButton } from "../review-moderation/review-moderation.component";

const filters = [
  <SelectInput
    source="is_published"
    label="Статус"
    alwaysOn
    emptyText="Усі"
    choices={[
      { id: false, name: "На модерації" },
      { id: true, name: "Опубліковані" },
    ]}
  />,
];

const BulkActions = () => (
  <>
    <BulkUpdateButton label="Опублікувати" data={{ is_published: true }} icon={<VisibilityIcon />} mutationMode="pessimistic" />
    <BulkUpdateButton label="Сховати" data={{ is_published: false }} icon={<VisibilityOffIcon />} mutationMode="pessimistic" />
    <BulkDeleteButton mutationMode="pessimistic" />
  </>
);

export const ReviewsList = () => (
  <List exporter={false} filters={filters} sort={{ field: "created_at", order: "DESC" }} perPage={25}>
    <Datagrid rowClick="edit" bulkActionButtons={<BulkActions />}>
      <DateField source="created_at" label="Дата" showTime />
      <TextField source="client_name" label="Ім'я" />
      <MaskedPhoneField label="Телефон" />
      <FunctionField
        label="Відгук"
        render={(record: { comment?: string }) => {
          const text = (record?.comment || "").trim();
          return text.length > 120 ? `${text.slice(0, 120)}…` : text;
        }}
      />
      <BooleanField source="is_published" label="На сайті" />
      <ReviewModerationButton label="Модерація" />
      <EditButton />
    </Datagrid>
  </List>
);
