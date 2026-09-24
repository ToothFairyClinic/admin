import { Create, SimpleForm, TextInput } from "react-admin";

export const PageMetadataCreate = () => (
    <Create title="Додати метадані для сторінки">
        <SimpleForm>
            <TextInput source="page_route" fullWidth label="Маршрут сторінки (URL)" />
                <TextInput source="h1" fullWidth label="Заголовок H1 (UA)" />
                <TextInput source="h1_en" fullWidth label="Заголовок H1 (EN)" />
            <TextInput source="seo_title" fullWidth label="SEO title ua" />
            <TextInput source="seo_description" fullWidth label="SEO Description ua" />
            <TextInput source="seo_title_en" fullWidth label="SEO title en" />
            <TextInput source="seo_description_en" multiline fullWidth label="SEO Description en" />
        </SimpleForm>
    </Create>
);
