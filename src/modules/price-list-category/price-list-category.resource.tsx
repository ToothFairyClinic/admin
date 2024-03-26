import PaidIcon from "@mui/icons-material/Paid";
import { PriceListCategoryCreate } from "./components/price-list-category-create/price-list-category-create.component";
import { PriceListCategoryList } from "./components/price-list-category-list/price-list-category-list.component";
import { PriceListCategoryEdit } from "./components/price-list-category-edit/price-list-category-edit.component";

export const PriceListCategoryResource = {
  name: "price_list_categories",
  list: PriceListCategoryList,
  edit: PriceListCategoryEdit,
  create: PriceListCategoryCreate,
  options: { label: "Категорії прайс листа" },
  icon: PaidIcon,
};
