module.exports = {
  extends: [
    "react-app",
    "react-app/jest"
  ],
  rules: {
    "no-console": "warn",
    "prefer-const": "error",
    "quotes": ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "indent": ["warn", 2],
    "max-len": ["warn", {"code":  120}],
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "always"],
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
      "newlines-between": "always-and-inside-groups",
    }]
  }
}