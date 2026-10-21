import { Create, SimpleForm } from "react-admin";
import { OurWorkFormFields } from "../our-work-form/our-work-form-fields.component";

export const OurWorksCreate = () => (
  <Create title="Додати приклад роботи">
    <SimpleForm>
      <OurWorkFormFields />
    </SimpleForm>
  </Create>
);
