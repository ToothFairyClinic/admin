import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import { BooleanInput, DateField, Edit, Labeled, SimpleForm, TextInput } from "react-admin";
import { RevealPhoneField } from "../review-phone/review-phone.component";

export const ReviewsEdit = () => {
  return (
    <Edit title={<CustomTitle source={"client_name"} />} mutationMode="pessimistic">
      <SimpleForm>
        <BooleanInput source="is_published" label="Опублікувати на сайті" />
        <Labeled label="Надіслано">
          <DateField source="created_at" showTime />
        </Labeled>
        <TextInput source="client_name" fullWidth label="Ім'я" />
        <RevealPhoneField />
        <TextInput source="comment" fullWidth label="Коментар" multiline />
      </SimpleForm>
    </Edit>
  );
};
