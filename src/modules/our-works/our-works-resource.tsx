import GroupIcon from "@mui/icons-material/Group";
import { OurWorksList } from "./components/our-works-list/our-works-list.component";
import { OurWorksCreate } from "./components/our-works-create/our-woks-create.component";
import { OurWorksEdit } from "./components/our-works-edit/our-woks-edit.component";

export const ourWorksResource = {
  name: "our_works",
  list: OurWorksList,
  edit: OurWorksEdit,
  create: OurWorksCreate,
  options: { label: "Наші роботи" },
  icon: GroupIcon,
};
