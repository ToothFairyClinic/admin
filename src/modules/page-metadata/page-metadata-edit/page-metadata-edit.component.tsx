import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const PageMetadataEdit = () => {
    return (
        <Edit title={<CustomTitle source={"page_route"} />}>
            <SimpleForm>
                <TextInput source="page_route" fullWidth label="Назва сторінки" />
                <TextInput source="seo_title" fullWidth label="SEO title" />
                <TextInput source="seo_description" multiline fullWidth label="SEO Description" />
            </SimpleForm>
        </Edit>
    );
};
