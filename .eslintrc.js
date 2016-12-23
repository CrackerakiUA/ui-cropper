module.exports = {
    "env": {
        "browser": true,
        "mocha": true,
        "node": true
    },
    'globals': {
        'angular': true,
        'inject': true,
        'expect': true,
        'sinon': true,
        'ColorThief': true,
        "ArrayBuffer": true,
        "Uint8Array": true,
        "DataView": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4,
            { 'SwitchCase': 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        'no-console': ['off'],
        "strict": ["error", "global"],
        "curly": ["error"],
        "eqeqeq": ["error"],
        "wrap-iife": ["error"],
        "no-caller": ["error"],
        "no-extend-native": ["error"],
        "new-cap": ["error"],
        "no-use-before-define": ["error"],

    }
};