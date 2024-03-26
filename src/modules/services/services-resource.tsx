import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { ServicesList } from "./components/services-list/services-list.component";
import { ServicesCreate } from "./components/services-create/services-create.component";
import { ServicesEdit } from "./components/services-edit/services-edit.component";

export const servicesResource = {
  name: "services",
  list: ServicesList,
  edit: ServicesEdit,
  create: ServicesCreate,
  options: { label: "Послуги" },
  icon: LocalOfferIcon,
};
