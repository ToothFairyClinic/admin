import { Node } from "@tiptap/core";

/**
 * Фото з підписом: <figure><img><figcaption>підпис</figcaption></figure>.
 * Підпис редагується прямо в редакторі, може містити посилання (автор фото, ліцензія).
 */
export const Figure = Node.create({
  name: "figure",
  group: "block",
  content: "inline*",
  draggable: true,
  isolating: true,

  addAttributes() {
    return {
      src: { default: null, rendered: false },
      alt: { default: "", rendered: false },
    };
  },

  parseHTML() {
    return [
      {
        tag: "figure",
        contentElement: (dom) =>
          (dom as HTMLElement).querySelector("figcaption") || document.createElement("figcaption"),
        getAttrs: (dom) => {
          const img = (dom as HTMLElement).querySelector("img");
          return img ? { src: img.getAttribute("src"), alt: img.getAttribute("alt") || "" } : false;
        },
      },
    ];
  },

  renderHTML({ node }) {
    return ["figure", ["img", { src: node.attrs.src, alt: node.attrs.alt }], ["figcaption", 0]];
  },
});

/** Подія для відкриття вікна редагування коду з блока в тексті (подвійний клік по блоку). */
export const EMBED_EDIT_EVENT = "tf-embed-edit";

/**
 * Довільний HTML-код (віджет, відео YouTube, скрипт, форма) як окремий блок тексту.
 * Зберігається як <div data-embed="true">код</div>; на сайті код вставляється як є, скрипти виконуються.
 * У редакторі код не виконується, видно лише його текст.
 */
export const HtmlEmbed = Node.create({
  name: "htmlEmbed",
  group: "block",
  atom: true,
  draggable: true,
  selectable: true,

  addAttributes() {
    return { html: { default: "", rendered: false } };
  },

  parseHTML() {
    return [{ tag: "div[data-embed]", getAttrs: (dom) => ({ html: (dom as HTMLElement).innerHTML.trim() }) }];
  },

  renderHTML({ node }) {
    const div = document.createElement("div");
    div.setAttribute("data-embed", "true");
    div.innerHTML = node.attrs.html;
    return div;
  },

  addNodeView() {
    return ({ node, editor, getPos }) => {
      const dom = document.createElement("div");
      dom.className = "tf-embed-view";
      dom.contentEditable = "false";
      const head = document.createElement("div");
      head.className = "tf-embed-head";
      head.textContent = "Вставлений код (на сайті виконується). Подвійний клік - редагувати";
      const pre = document.createElement("pre");
      pre.textContent = node.attrs.html;
      dom.append(head, pre);
      dom.addEventListener("dblclick", () => {
        if (typeof getPos === "function") editor.commands.setNodeSelection(getPos());
        window.dispatchEvent(new CustomEvent(EMBED_EDIT_EVENT, { detail: { editor } }));
      });
      return {
        dom,
        update: (updated) => {
          if (updated.type.name !== "htmlEmbed") return false;
          pre.textContent = updated.attrs.html;
          return true;
        },
      };
    };
  },
});

/** Теги, які редактор розуміє сам. Решта верхнього рівня з HTML-режиму загортається в блок коду. */
const KNOWN_BLOCKS = new Set([
  "P", "H1", "H2", "H3", "H4", "H5", "H6", "UL", "OL", "BLOCKQUOTE", "PRE", "TABLE", "FIGURE", "HR", "IMG", "BR",
  "STRONG", "B", "EM", "I", "U", "S", "A", "CODE", "SPAN", "MARK",
]);

const isEmbedDiv = (el: Element) => el.tagName === "DIV" && el.hasAttribute("data-embed");

/** HTML статті для вікна коду: блоки верхнього рівня з нового рядка, вміст блоків коду без змін. */
export const formatHtml = (html: string) => {
  const doc = new DOMParser().parseFromString(`<body>${html}</body>`, "text/html");
  return Array.from(doc.body.childNodes)
    .map((n) => (n.nodeType === 1 ? (n as Element).outerHTML : n.textContent?.trim() || ""))
    .filter(Boolean)
    .join("\n\n");
};

/**
 * HTML з вікна коду -> вміст редактора. Звичайні блоки (абзаци, заголовки, списки, таблиці, фото) лишаються
 * редагованими; усе інше (script, iframe, style, div, section, form...) поспіль стає одним блоком коду,
 * щоб редактор не викинув невідомі теги.
 */
export const wrapUnknownHtml = (html: string) => {
  const doc = new DOMParser().parseFromString(`<body>${html}</body>`, "text/html");
  const out: string[] = [];
  let pending: string[] = [];
  const flush = () => {
    const code = pending.join("\n").trim();
    if (code) {
      const div = document.createElement("div");
      div.setAttribute("data-embed", "true");
      div.innerHTML = code;
      out.push(div.outerHTML);
    }
    pending = [];
  };
  Array.from(doc.body.childNodes).forEach((n) => {
    if (n.nodeType === 3) {
      const text = n.textContent?.trim();
      if (text) {
        flush();
        out.push(`<p>${text}</p>`);
      }
      return;
    }
    if (n.nodeType !== 1) return;
    const el = n as Element;
    if (isEmbedDiv(el) || KNOWN_BLOCKS.has(el.tagName)) {
      flush();
      out.push(el.outerHTML);
    } else {
      pending.push(el.outerHTML);
    }
  });
  flush();
  return out.join("");
};
