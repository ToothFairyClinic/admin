import { Create, SimpleForm } from "react-admin";
import { PostFormFields } from "./post-form-fields.component";

export const PostsCreate = () => (
  <Create title="Додати публікацію" redirect="edit">
    <SimpleForm defaultValues={{ is_published: false }}>
      <PostFormFields />
    </SimpleForm>
  </Create>
);
