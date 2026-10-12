import { FC, useCallback, useRef, useState } from "react";
import { Menu, MenuItem, ToggleButton, Divider } from "@mui/material";
import TableChartIcon from "@mui/icons-material/TableChart";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";
import { useNotify } from "react-admin";
import {
  RichTextInput,
  RichTextInputToolbar,
  LevelSelect,
  FormatButtons,
  ListButtons,
  LinkButtons,
  QuoteButtons,
  ClearButtons,
  AlignmentButtons,
  DefaultEditorOptions,
  useTiptapEditor,
} from "ra-input-rich-text";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import { useCloudinarySignatureLazyQuery } from "@app/core/types";
import { CloudinaryUploadDTO } from "../cloudinary-input-ui/cloudinary-upload.dto";

const CLOUD_NAME = "dc7d3byxg";
const DELIVERY = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1200`;

const editorOptions = {
  ...DefaultEditorOptions,
  extensions: [
    ...(DefaultEditorOptions.extensions || []),
    Table.configure({ resizable: true }),
    TableRow,
    TableHeader,
    TableCell,
  ],
};

const TableButton = () => {
  const editor = useTiptapEditor();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const run = (fn: () => void) => () => {
    fn();
    setAnchor(null);
  };

  const inTable = Boolean(editor?.isActive("table"));

  return (
    <>
      <ToggleButton
        aria-label="Таблиця"
        title="Таблиця"
        value="table"
        disabled={!editor || !editor.isEditable}
        onClick={(e) => setAnchor(e.currentTarget)}
      >
        <TableChartIcon fontSize="inherit" />
      </ToggleButton>

      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
        <MenuItem
          onClick={run(() =>
            editor
              ?.chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          )}
        >
          Вставити таблицю 3 на 3
        </MenuItem>
        <Divider />
        <MenuItem disabled={!inTable} onClick={run(() => editor?.chain().focus().addRowAfter().run())}>
          Додати рядок
        </MenuItem>
        <MenuItem disabled={!inTable} onClick={run(() => editor?.chain().focus().deleteRow().run())}>
          Видалити рядок
        </MenuItem>
        <MenuItem disabled={!inTable} onClick={run(() => editor?.chain().focus().addColumnAfter().run())}>
          Додати колонку
        </MenuItem>
        <MenuItem disabled={!inTable} onClick={run(() => editor?.chain().focus().deleteColumn().run())}>
          Видалити колонку
        </MenuItem>
        <Divider />
        <MenuItem disabled={!inTable} onClick={run(() => editor?.chain().focus().toggleHeaderRow().run())}>
          Рядок-шапка
        </MenuItem>
        <MenuItem disabled={!inTable} onClick={run(() => editor?.chain().focus().mergeOrSplit().run())}>
          Об'єднати або розділити комірки
        </MenuItem>
        <Divider />
        <MenuItem disabled={!inTable} onClick={run(() => editor?.chain().focus().deleteTable().run())}>
          Видалити таблицю
        </MenuItem>
      </Menu>
    </>
  );
};

const ImageUploadButton = () => {
  const editor = useTiptapEditor();
  const notify = useNotify();
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [getSignature] = useCloudinarySignatureLazyQuery({ fetchPolicy: "network-only" });

  const onPick = useCallback(
    async (file: File) => {
      if (!editor) return;
      setBusy(true);
      try {
        const { data: sig } = await getSignature();
        const s = sig?.cloudinarySignature;
        if (!s) {
          notify("Не вдалося отримати підпис для завантаження", { type: "error" });
          return;
        }

        const form = new FormData();
        form.append("file", file);
        form.append("api_key", s.apiKey);
        form.append("public_id", s.publicId);
        form.append("signature", s.signature);
        form.append("timestamp", String(s.timestamp));
        form.append("folder", "products");
        form.append("upload_preset", "nibw5oyz");

        const { data } = await axios.post<CloudinaryUploadDTO>(
          `https://api.cloudinary.com/v1_1/${s.cloudName}/auto/upload`,
          form
        );

        const alt = window.prompt("Опис зображення (alt). Можна лишити порожнім:") || "";
        editor
          .chain()
          .focus()
          .insertContent({
            type: "image",
            attrs: { src: `${DELIVERY}/${data.public_id}`, alt },
          })
          .run();
      } catch (e) {
        notify("Помилка завантаження зображення", { type: "error" });
      } finally {
        setBusy(false);
        if (inputRef.current) inputRef.current.value = "";
      }
    },
    [editor, getSignature, notify]
  );

  return (
    <>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onPick(file);
        }}
      />
      <ToggleButton
        aria-label="Завантажити зображення"
        title="Завантажити зображення"
        value="upload-image"
        disabled={!editor || !editor.isEditable || busy}
        onClick={() => inputRef.current?.click()}
      >
        <AddPhotoAlternateIcon fontSize="inherit" />
      </ToggleButton>
    </>
  );
};

interface PostEditorProps {
  source: string;
  label?: string;
}

export const PostEditor: FC<PostEditorProps> = ({ source, label }) => (
  <RichTextInput
    source={source}
    label={label}
    fullWidth
    editorOptions={editorOptions}
    toolbar={
      <RichTextInputToolbar>
        <LevelSelect size="medium" />
        <FormatButtons size="medium" />
        <AlignmentButtons size="medium" />
        <ListButtons size="medium" />
        <QuoteButtons size="medium" />
        <LinkButtons size="medium" />
        <ImageUploadButton />
        <TableButton />
        <ClearButtons size="medium" />
      </RichTextInputToolbar>
    }
  />
);
