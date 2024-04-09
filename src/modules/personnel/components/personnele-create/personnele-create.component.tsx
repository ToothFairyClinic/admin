import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PersonnelCreate = () => (
  <Create title="Додати персонал">
    <SimpleForm>
      <TextInput source="name" fullWidth label="Ім'я" />
      <ReferenceInput
        source="personnel_category_id"
        reference="personnel_categories"
        label="Категорія"
      >
        <SelectInput optionText="title" label="Спеціалізація" />
      </ReferenceInput>
      <ReferenceInput
        source="personnel_category_id_second"
        reference="personnel_categories"
        label="Категорія"
      >
        <SelectInput
          optionText="title"
          label="Дурга Спеціалізація (не обов'язково)"
        />
      </ReferenceInput>
      <TextInput source="description" fullWidth label="Опис" />
      <CloudinaryInput source="image" label="Фото" />
    </SimpleForm>
  </Create>
);
