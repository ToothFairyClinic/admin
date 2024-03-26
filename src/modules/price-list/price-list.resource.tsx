import PaidIcon from "@mui/icons-material/Paid";
import { PriceListCreate } from "./components/price-list-create/price-list-create.component";
import { PriceListEdit } from "./components/price-list-edit/price-list-edit.component";
import { PriceListList } from "./components/price-list-list/price-list-list.component";

export const PriceListResource = {
  name: "price_list",
  list: PriceListList,
  edit: PriceListEdit,
  create: PriceListCreate,
  options: { label: "Прайс лист" },
  icon: PaidIcon,
};
