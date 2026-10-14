import HomeIcon from "@mui/icons-material/Home";
import { Navigate } from "react-router-dom";
import { HomePageEdit } from "./home-page-edit.component";

/** Головна сторінка - один запис з id 1, тому список одразу відкриває редагування. */
const HomePageRedirect = () => <Navigate to="/home_page/1" replace />;

export const homePageResource = {
  name: "home_page",
  list: HomePageRedirect,
  edit: HomePageEdit,
  options: { label: "Головна сторінка" },
  icon: HomeIcon,
};
