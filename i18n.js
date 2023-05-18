module.exports = {
  locales: ["en", "pl"], // Array with the languages that you want to use
  defaultLocale: "pl", // Default language of your website
  pages: {
    "*": ["nav-bar"],
    "/": ["home-page"],
    "/login": ["auth"],
  },
};
