module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: "react",
  settings: {
    "react": {
      "version": "detect"
    }
  }
};