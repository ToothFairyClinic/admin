import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PersonnelCategoryEdit = () => (
  <Edit title="Додати категорію персонала">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва категорії" />
    </SimpleForm>
  </Edit>
);
