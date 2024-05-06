import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PriceListEdit = () => {
  return (
    <Edit title={<CustomTitle source={"title"} />}>
      <SimpleForm>
        <TextInput source="title" fullWidth label="Назва" />
        <ReferenceInput
          source="price_list_category_id"
          reference="price_list_categories"
          label="Категорія"
        >
          <SelectInput optionText="title" label=" категорія" />
        </ReferenceInput>
        <TextInput source="price" label="Ціна" />
      </SimpleForm>
    </Edit>
  );
};
