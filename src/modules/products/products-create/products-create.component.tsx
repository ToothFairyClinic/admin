// import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.component";
import {
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ProductCreate = () => (
  <Create title="Додати продукцію">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва" />
      <ReferenceInput
        source="products_category_id"
        reference="products_categories"
        label="Категорія"
      >
        <SelectInput optionText="title" label=" категорія" />
      </ReferenceInput>
      <TextInput source="description" fullWidth label="Опис" />
      {/* <CloudinaryInput source="image" label="Фото" /> */}
      <NumberInput source="price" label="Ціна" />
      <NumberInput source="weight" label="Вага" />
    </SimpleForm>
  </Create>
);
