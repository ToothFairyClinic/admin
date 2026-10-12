import { Edit, SimpleForm } from "react-admin";
import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import { PostFormFields } from "./post-form-fields.component";

export const PostsEdit = () => (
  <Edit title={<CustomTitle source={"title"} />} mutationMode="pessimistic">
    <SimpleForm>
      <PostFormFields />
    </SimpleForm>
  </Edit>
);
