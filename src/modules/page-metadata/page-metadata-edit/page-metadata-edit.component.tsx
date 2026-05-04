import { CustomTitle } from "@app/common/components/custom-title/custom-title.component";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const PageMetadataEdit = () => {
    return (
        <Edit title={<CustomTitle source={"page_route"} />}>
            <SimpleForm>
                <TextInput source="page_route" fullWidth label="Назва сторінки" />
                <TextInput source="seo_title" fullWidth label="SEO title ua" />
                <TextInput source="seo_description" fullWidth label="SEO Description ua" />
                <TextInput source="seo_title_en" fullWidth label="SEO title en" />
                <TextInput source="seo_description_en" multiline fullWidth label="SEO Description en" />
            </SimpleForm>
        </Edit>
    );
};
