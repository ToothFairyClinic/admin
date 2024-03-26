import AddIcon from "@mui/icons-material/Add";
import { AdvantagesList } from "./components/advantages-list";
import { AdvantagesCreate } from "./components/advantages-create";
import { AdvantagesEdit } from "./components/advantages-edit";

export const advantagesResource = {
  name: "advantages",
  list: AdvantagesList,
  edit: AdvantagesEdit,
  create: AdvantagesCreate,
  options: { label: "Переваги" },
  icon: AddIcon,
};
