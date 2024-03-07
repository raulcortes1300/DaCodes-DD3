module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
//   config: {
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   },
// };
