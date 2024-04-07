import ReviewsIcon from "@mui/icons-material/Reviews";
import { ReviewsList } from "./components/reviews-list/reviews-list.component";
import { ReviewsCreate } from "./components/reviews-create/reviews-create.component";
import { ReviewsEdit } from "./components/reviews-edit/reviews-edit.component";

export const reviewsResource = {
  name: "reviews",
  list: ReviewsList,
  edit: ReviewsEdit,
  create: ReviewsCreate,
  options: { label: "Відгуки" },
  icon: ReviewsIcon,
};
