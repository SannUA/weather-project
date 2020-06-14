// eslint-disable-next-line no-undef
module.exports = {
    
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["plugin:react/recommended", "eslint:recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "react/prop-types": 0
    }
};
