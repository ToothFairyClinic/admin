import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Menu,
  MenuItem,
  TextField,
  ToggleButton,
} from "@mui/material";
import TableChartIcon from "@mui/icons-material/TableChart";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import HtmlIcon from "@mui/icons-material/Html";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
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
import { EMBED_EDIT_EVENT, Figure, formatHtml, HtmlEmbed, wrapUnknownHtml } from "./editor-extensions";

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
    Figure,
    HtmlEmbed,
  ],
};

const CODE_FONT = { fontFamily: "Consolas, Menlo, monospace", fontSize: 13 };

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

        const alt = window.prompt("Опис зображення (alt): що на фото. Можна лишити порожнім:") || "";
        const caption =
          window.prompt("Підпис під фото (необов'язково, видно на сайті). Посилання на автора можна додати потім:") || "";
        editor
          .chain()
          .focus()
          .insertContent({
            type: "figure",
            attrs: { src: `${DELIVERY}/${data.public_id}`, alt },
            content: caption.trim() ? [{ type: "text", text: caption.trim() }] : [],
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

/** Вікно з кодом усієї статті: HTML можна правити напряму. */
const HtmlSourceButton = () => {
  const editor = useTiptapEditor();
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");

  const apply = () => {
    editor?.chain().focus().setContent(wrapUnknownHtml(code), true).run();
    setOpen(false);
  };

  return (
    <>
      <ToggleButton
        aria-label="Код статті (HTML)"
        title="Код статті (HTML)"
        value="html-source"
        disabled={!editor || !editor.isEditable}
        onClick={() => {
          setCode(formatHtml(editor?.getHTML() || ""));
          setOpen(true);
        }}
      >
        <HtmlIcon fontSize="inherit" />
      </ToggleButton>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="lg">
        <DialogTitle>Код статті (HTML)</DialogTitle>
        <DialogContent>
          <p style={{ marginTop: 0, opacity: 0.75 }}>
            Абзаци, заголовки, списки, таблиці, фото з підписом (figure) і вирівнювання (style="text-align: center")
            лишаються звичайним текстом. Інші теги верхнього рівня (script, iframe, style, div, form...) автоматично стають
            блоком коду і вставляються на сайт як є. Інші стилі й класи всередині абзаців редактор прибирає.
          </p>
          <TextField
            value={code}
            onChange={(e) => setCode(e.target.value)}
            multiline
            minRows={18}
            maxRows={30}
            fullWidth
            inputProps={{ spellCheck: false, style: CODE_FONT }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Скасувати</Button>
          <Button variant="contained" onClick={apply}>
            Застосувати
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

/** Вставка довільного коду окремим блоком або редагування виділеного блока коду. */
const EmbedButton = () => {
  const editor = useTiptapEditor();
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [editing, setEditing] = useState(false);

  const openDialog = useCallback(() => {
    if (!editor) return;
    const isEmbed = editor.isActive("htmlEmbed");
    setEditing(isEmbed);
    setCode(isEmbed ? editor.getAttributes("htmlEmbed").html || "" : "");
    setOpen(true);
  }, [editor]);

  useEffect(() => {
    const onEdit = (e: Event) => {
      if ((e as CustomEvent).detail?.editor === editor) openDialog();
    };
    window.addEventListener(EMBED_EDIT_EVENT, onEdit);
    return () => window.removeEventListener(EMBED_EDIT_EVENT, onEdit);
  }, [editor, openDialog]);

  const save = () => {
    if (!editor) return;
    const html = code.trim();
    if (editing) {
      if (html) editor.chain().focus().updateAttributes("htmlEmbed", { html }).run();
      else editor.chain().focus().deleteSelection().run();
    } else if (html) {
      editor.chain().focus().insertContent({ type: "htmlEmbed", attrs: { html } }).run();
    }
    setOpen(false);
  };

  return (
    <>
      <ToggleButton
        aria-label="Вставити код"
        title="Вставити код (віджет, відео YouTube, скрипт)"
        value="embed"
        selected={Boolean(editor?.isActive("htmlEmbed"))}
        disabled={!editor || !editor.isEditable}
        onClick={openDialog}
      >
        <IntegrationInstructionsIcon fontSize="inherit" />
      </ToggleButton>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>{editing ? "Редагувати код" : "Вставити код"}</DialogTitle>
        <DialogContent>
          <p style={{ marginTop: 0, opacity: 0.75 }}>
            Будь-який HTML: iframe відео YouTube, віджет, форма, скрипт. На сайті вставляється в це місце тексту як є,
            скрипти виконуються. Якщо очистити поле при редагуванні, блок видаляється.
          </p>
          <TextField
            value={code}
            onChange={(e) => setCode(e.target.value)}
            multiline
            minRows={10}
            maxRows={24}
            fullWidth
            autoFocus
            placeholder='<iframe src="https://www.youtube.com/embed/..."></iframe>'
            inputProps={{ spellCheck: false, style: CODE_FONT }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Скасувати</Button>
          <Button variant="contained" onClick={save}>
            {editing ? "Зберегти" : "Вставити"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

/** Вигляд фото з підписом і блоків коду всередині редактора. */
const EDITOR_SX = {
  "& .ProseMirror figure": { margin: "16px 0", textAlign: "center" },
  "& .ProseMirror figure img": { maxWidth: "100%", maxHeight: 360, display: "block", margin: "0 auto" },
  "& .ProseMirror figcaption": {
    marginTop: "6px",
    padding: "4px 8px",
    fontSize: 14,
    opacity: 0.85,
    border: "1px dashed rgba(0,0,0,0.25)",
    borderRadius: "6px",
    minHeight: 24,
  },
  "& .ProseMirror figcaption:has(> br.ProseMirror-trailingBreak:only-child)::before": {
    content: '"Підпис під фото (необов’язково)"',
    opacity: 0.5,
    pointerEvents: "none",
  },
  "& .ProseMirror p img": { maxWidth: "100%", maxHeight: 360 },
  "& .ProseMirror code": { background: "rgba(138,143,90,0.18)", borderRadius: "4px", padding: "0 4px", ...CODE_FONT },
  "& .tf-embed-view": {
    margin: "12px 0",
    border: "1px solid #8a8f5a",
    borderRadius: "8px",
    background: "#f6f6ee",
    color: "#333",
    overflow: "hidden",
  },
  "& .tf-embed-view.ProseMirror-selectednode": { outline: "2px solid #1976d2" },
  "& .tf-embed-head": { fontSize: 12, padding: "4px 10px", background: "#D9DBB3", fontWeight: 600 },
  "& .tf-embed-view pre": {
    margin: 0,
    padding: "8px 10px",
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
    maxHeight: 200,
    overflow: "auto",
    ...CODE_FONT,
  },
};

const HELPER =
  "Фото з кнопки завантаження вставляється з підписом під ним. Кнопка HTML - код усього тексту; кнопка поруч з таблицею - вставити довільний код (YouTube, віджет, скрипт)";

interface PostEditorProps {
  source: string;
  label?: string;
}

export const PostEditor: FC<PostEditorProps> = ({ source, label }) => (
  <RichTextInput
    source={source}
    label={label}
    fullWidth
    helperText={HELPER}
    sx={EDITOR_SX}
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
        <EmbedButton />
        <HtmlSourceButton />
        <ClearButtons size="medium" />
      </RichTextInputToolbar>
    }
  />
);
