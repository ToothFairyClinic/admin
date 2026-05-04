import FindInPageIcon from '@mui/icons-material/FindInPage';
import { PageMetadataCreate } from './page-metadata-create/page-metadata-create.component';
import { PageMetadataEdit } from './page-metadata-edit/page-metadata-edit.component';
import { PageMetadataList } from './page-metadata-list/page-metadata-list.component';

export const pageMetadataResource = {
    name: "page_metadata",
    list: PageMetadataList,
    edit: PageMetadataEdit,
    create: PageMetadataCreate,
    options: { label: "Мета дані сторінок" },
    icon: FindInPageIcon,
};
