import Groups3Icon from "@mui/icons-material/Groups3";
import { PersonnelCategoryList } from "./personnel-category-list/personnel-category-list.component";
import { PersonnelCategoryCreate } from "./personnel-category-create/personnel-category-create.component";
import { PersonnelCategoryEdit } from "./personnel-category-edit/personnel-category-edit.component";

export const personnelCategoryResource = {
  name: "personnel_categories",
  list: PersonnelCategoryList,
  edit: PersonnelCategoryEdit,
  create: PersonnelCategoryCreate,
  options: { label: "Категорії персоналу" },
  icon: Groups3Icon,
};
