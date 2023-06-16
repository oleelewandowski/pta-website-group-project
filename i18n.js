module.exports = {
  locales: ["en", "pl"], // Array with the languages that you want to use
  defaultLocale: "pl", // Default language of your website
  pages: {
    "*": ["nav-bar"],
    "/": ["home-page"],
    "/login": ["auth"],
    "/panel": ["panel"],
    "/panel/manage": ["panel-manage"],
    "/panel/overview": ["panel-overview"],
    "/panel/edit/[articleId]": ["panel-manage", "panel-overview"],
  },
};
