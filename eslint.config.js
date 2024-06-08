import globals from "globals";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

export default [
    {
        files: ["**/*.js"],
        ignores: ["cli/**/*", "dist/**/*", "utils/**/*", "node_modules/**/*", "**/*.config.js", "**/settings.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                ...globals.node,
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            "array-callback-return": "error",
            "arrow-body-style": ["error", "always"],
            "block-scoped-var": "error",
            camelcase: ["error", {
                properties: "never",
                ignoreDestructuring: true,
                ignoreGlobals: true
            }],
            curly: "error",
            "dot-notation": ["error", { allowKeywords: true }],
            eqeqeq: "error",
            "func-names": ["error", "never"],
            "id-length": ["error", { exceptions: ["i", "j", "_"], min: 2 }],
            "logical-assignment-operators": ["error", "never"],
            "max-depth": ["error", 3],
            "new-cap": "error",
            "no-alert": "error",
            "no-duplicate-imports": "error",
            "no-else-return": "error",
            "no-empty-function": "error",
            "no-eq-null": "error",
            "no-eval": "error",
            "no-extend-native": "error",
            "no-implicit-coercion": "error",
            "no-implicit-globals": "error",
            "no-implied-eval": "error",
            "no-inline-comments": "error",
            "no-inner-declarations": "error",
            "no-invalid-this": "error",
            "no-iterator": "error",
            "no-label-var": "error",
            "no-lone-blocks": "error",
            "no-lonely-if": "error",
            "no-loop-func": "error",
            "no-multi-assign": "error",
            "no-multi-str": "error",
            "no-negated-condition": "error",
            "no-nested-ternary": "error",
            "no-new": "error",
            "no-new-func": "error",
            "no-new-wrappers": "error",
            "no-octal-escape": "error",
            "no-param-reassign": "error",
            "no-promise-executor-return": "error",
            "no-proto": "error",
            "no-return-assign": "error",
            "no-script-url": "error",
            "no-self-compare": "error",
            "no-sequences": "error",
            "no-shadow": "error",
            "no-template-curly-in-string": "error",
            "no-throw-literal": "error",
            "no-undef-init": "error",
            "no-undefined": "error",
            "no-underscore-dangle": "error",
            "no-unmodified-loop-condition": "error",
            "no-unneeded-ternary": "error",
            "no-unreachable-loop": "error",
            "no-unused-expressions": "error",
            "no-useless-assignment": "error",
            "no-useless-computed-key": "error",
            "no-useless-concat": "error",
            "no-useless-constructor": "error",
            "no-useless-rename": "error",
            "no-useless-return": "error",
            "no-var": "error",
            "no-void": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "prefer-exponentiation-operator": "error",
            "prefer-object-spread": "error",
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "prefer-template": "error",
            radix: ["error", "always"],
            "require-atomic-updates": "error",
            "require-await": "error",
            "sort-imports": "error",
            "sort-vars": "error",
            yoda: ["error", "never"],
        },
    },
    {
        files: ["**/*.js"],
        ignores: ["cli/**/*", "dist/**/*", "utils/**/*", "node_modules/**/*", "**/*.config.js", "**/settings.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                ...globals.node,
            },
        },
        plugins: {
            "@stylistic": stylistic
        },
        rules: {
            ...stylistic.configs["recommended-flat"].rules,
            "@stylistic/array-bracket-newline": ["error", "consistent"],
            "@stylistic/array-element-newline": ["error", "consistent"],
            "@stylistic/arrow-parens": ["error", "always"],
            "@stylistic/block-spacing": ["error", "always"],
            "@stylistic/brace-style": ["error", "1tbs"],
            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/function-call-argument-newline": ["error", "consistent"],
            "@stylistic/function-call-spacing": ["error", "never"],
            "@stylistic/function-paren-newline": ["error", "multiline"],
            "@stylistic/generator-star-spacing": ["error", { after: false, before: true }],
            "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/indent-binary-ops": ["error", 4],
            "@stylistic/key-spacing": ["error", {
                afterColon: true,
                beforeColon: false,
                mode: "strict",
            }],
            "@stylistic/line-comment-position": ["error", { position: "above" }],
            "@stylistic/linebreak-style": ["error", "unix"],
            "@stylistic/lines-around-comment": ["error", { beforeBlockComment: true }],
            "@stylistic/member-delimiter-style": ["error", {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                multilineDetection: "brackets",
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            }],
            "@stylistic/multiline-comment-style": ["error", "separate-lines"],
            "@stylistic/new-parens": ["error", "never"],
            "@stylistic/newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
            "@stylistic/no-confusing-arrow": "error",
            "@stylistic/no-extra-semi": "error",
            "@stylistic/no-tabs": "error",
            "@stylistic/object-curly-newline": ["error", { consistent: true }],
            "@stylistic/object-curly-spacing": ["error", "always"],
            "@stylistic/object-property-newline": ["error", {
                allowAllPropertiesOnSameLine: true
            }],
            "@stylistic/one-var-declaration-per-line": ["error", "initializations"],
            "@stylistic/padded-blocks": ["error", "never"],
            "@stylistic/quote-props": ["error", "as-needed"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/semi-style": ["error", "last"],
            "@stylistic/switch-colon-spacing": ["error", { after: true, before: false }],
            "@stylistic/template-curly-spacing": ["error", "never"],
            "@stylistic/wrap-iife": ["error", "inside"],
            "@stylistic/wrap-regex": "error",
            "@stylistic/yield-star-spacing": ["error", "before"],
        }
    }
];