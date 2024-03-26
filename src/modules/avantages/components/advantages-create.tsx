import { Create, SimpleForm, TextInput } from "react-admin";

export const AdvantagesCreate = () => (
  <Create title="Створити преваги">
    <SimpleForm>
      <TextInput source="title" label="Текст" />
    </SimpleForm>
  </Create>
);
