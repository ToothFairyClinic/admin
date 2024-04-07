import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { Create, SimpleForm, TextInput } from "react-admin";

export const ReviewsCreate = () => (
  <Create title="Додати коментар">
    <SimpleForm>
      <TextInput source="client_name" fullWidth label="Ім'я" />
      <TextInput source="client_phone" fullWidth label="Номер телефона" />
      <TextInput source="comment" fullWidth label="Коментар" multiline />
    </SimpleForm>
  </Create>
);
