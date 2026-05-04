import { Create, SimpleForm, TextInput } from "react-admin";

export const PageMetadataCreate = () => (
    <Create title="Додати метадані для сторінки">
        <SimpleForm>
            <TextInput source="page_route" fullWidth label="Назва сторінки" />
            <TextInput source="seo_title" fullWidth label="SEO title" />
            <TextInput source="seo_description" multiline fullWidth label="SEO Description" />
        </SimpleForm>
    </Create>
);
