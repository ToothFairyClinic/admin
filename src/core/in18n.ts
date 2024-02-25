import polyglotI18nProvider from "ra-i18n-polyglot";
import ua from "ra-language-ukrainian";

const lang = {
  ra: {
    ...ua.ra,

    configurable: {
      ...ua.ra.configurable,
      customize: "customize",
    },
    action: {
      ...ua.ra.action,
      clear_array_input: "clear_array_input",
    },
    message: {
      ...ua.ra.message,
      clear_array_input: "clear_array_input",
    },
  },
};

export const i18nProvider = polyglotI18nProvider(() => lang, "ua");
