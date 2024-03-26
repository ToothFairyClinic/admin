import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import {
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PersonnelCategoryCreate = () => (
  <Create title="Додати категорію персонала">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва категорії" />
    </SimpleForm>
  </Create>
);
