import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";
import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ProductEdit = () => {
  return (
    <Edit title={<CustomTitle source={"title"} />}>
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
        <CloudinaryInput source="image" label="Фото" />
        <NumberInput source="price" label="Ціна" />
        <NumberInput source="weight" label="Вага" />
      </SimpleForm>
    </Edit>
  );
};
