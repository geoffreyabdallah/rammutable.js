module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
      "prefer-template": 2,
      "prefer-arrow-callback": 2,
      "no-unused-vars": [2, { "argsIgnorePattern": "^_*$" }],
    },
    "parser": "babel-eslint"
};
