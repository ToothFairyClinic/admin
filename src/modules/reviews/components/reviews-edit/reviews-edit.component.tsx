import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const ReviewsEdit = () => {
  return (
    <Edit title={<CustomTitle source={"title"} />}>
      <SimpleForm>
        <TextInput source="client_name" fullWidth label="Ім'я" />
        <TextInput source="client_phone" fullWidth label="Номер телефона" />
        <TextInput source="comment" fullWidth label="Коментар" multiline />
      </SimpleForm>
    </Edit>
  );
};
