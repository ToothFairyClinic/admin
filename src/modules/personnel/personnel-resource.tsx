import GroupIcon from "@mui/icons-material/Group";
import { PersonnelList } from "./components/personnel-list/personnel-list.component";
import { PersonnelCreate } from "./components/personnele-create/personnele-create.component";
import { PersonnelEdit } from "./components/personnel-edit/personnel-edit.component";

export const personnelResource = {
  name: "personnel",
  list: PersonnelList,
  edit: PersonnelEdit,
  create: PersonnelCreate,
  options: { label: "Персонал" },
  icon: GroupIcon,
};
