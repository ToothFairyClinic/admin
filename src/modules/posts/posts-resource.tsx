import ArticleIcon from "@mui/icons-material/Article";
import { PostsList } from "./components/posts-list.component";
import { PostsCreate } from "./components/posts-create.component";
import { PostsEdit } from "./components/posts-edit.component";

export const postsResource = {
  name: "posts",
  list: PostsList,
  edit: PostsEdit,
  create: PostsCreate,
  options: { label: "Блог" },
  icon: ArticleIcon,
};
