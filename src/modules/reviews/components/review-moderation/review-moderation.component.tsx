import { MouseEvent } from "react";
import { Button, useNotify, useRecordContext, useRefresh, useUpdate } from "react-admin";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

/** Кнопка в рядку списку: опублікувати відгук на сайті або сховати його. */
export const ReviewModerationButton = (_props: { label?: string }) => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();
  const [update, { isLoading }] = useUpdate();
  if (!record) return null;
  const published = Boolean(record.is_published);

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    update(
      "reviews",
      { id: record.id, data: { is_published: !published }, previousData: record },
      {
        onSuccess: () => {
          notify(published ? "Відгук сховано з сайту" : "Відгук опубліковано на сайті", { type: "info" });
          refresh();
        },
        onError: () => notify("Не вдалося змінити статус відгуку", { type: "error" }),
      }
    );
  };

  return (
    <Button
      label={published ? "Сховати" : "Опублікувати"}
      onClick={handleClick}
      disabled={isLoading}
      color={published ? "inherit" : "primary"}
    >
      {published ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </Button>
  );
};
