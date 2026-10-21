import { Edit, SimpleForm } from "react-admin";
import { OurWorkFormFields } from "../our-work-form/our-work-form-fields.component";

export const OurWorksEdit = () => (
  <Edit title="Приклад роботи" mutationMode="pessimistic">
    <SimpleForm>
      <OurWorkFormFields />
    </SimpleForm>
  </Edit>
);
