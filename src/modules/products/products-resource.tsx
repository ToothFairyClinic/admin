import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import { ProductList } from "./products-list/products-list.component";
import { ProductEdit } from "./products-edit/products-edit.component";
import { ProductCreate } from "./products-create/products-create.component";

export const productsResource = {
  name: "products",
  list: ProductList,
  edit: ProductEdit,
  create: ProductCreate,
  options: { label: "Продукція" },
  icon: MedicationLiquidIcon,
};
