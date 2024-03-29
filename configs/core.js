"use strict";

const ON = true;
const OFF = false;

module.exports = {
  rules: {
    // TypeScript-specific
    "adjacent-overload-signatures": ON,
    "ban-ts-ignore": ON,
    "ban-types": [
      ON,
      [
        ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
        [
          "Function",
          "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
        ],
        ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
        ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
        ["String", "Avoid using the `String` type. Did you mean `string`?"],
        ["Symbol", "Avoid using the `Symbol` type. Did you mean `symbol`?"]
      ]
    ],
    "member-access": [ON, "no-public"],
    "member-ordering": [
      ON,
      {
        order: [
          "static-field",
          "static-method",
          "instance-field",
          "constructor",
          "instance-method"
        ]
      }
    ],
    "no-any": ON,
    "no-empty-interface": OFF,
    "no-import-side-effect": OFF,
    "no-inferrable-types": [ON, "ignore-params"],
    "no-internal-module": ON,
    "no-magic-numbers": OFF,
    "no-namespace": ON,
    "no-non-null-assertion": ON,
    "no-reference": ON,
    "no-this-assignment": ON,
    "no-var-requires": ON,
    "only-arrow-functions": OFF,
    "prefer-for-of": ON,
    "prefer-readonly": OFF,
    "promise-function-async": OFF,
    typedef: [ON, "parameter", "property-declaration"],
    "typedef-whitespace": [
      ON,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        parameter: "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      },
      {
        "call-signature": "onespace",
        "index-signature": "onespace",
        parameter: "onespace",
        "property-declaration": "onespace",
        "variable-declaration": "onespace"
      }
    ],
    "unified-signatures": ON,

    // Functionality
    "await-promise": ON,
    ban: [
      ON,
      "alert",
      "prompt",
      "confirm",
      ["_", "isNull", "Use plain JS: == null"],
      ["_", "isDefined", "Use plain JS: != null"],
      ["Object", "assign", "Use object spread: {...a, ...b}"],
      ["Object", "getOwnPropertyNames", "Use Object.keys()"],
      ["describe", "only", "Should not be committed to repo"],
      ["it", "only", "Should not be committed to repo"],
      ["test", "only", "Should not be committed to repo"]
    ],
    "ban-comma-operator": ON,
    curly: ON,
    forin: ON,
    "import-blacklist": OFF,
    "label-position": ON,
    "no-arg": ON,
    "no-bitwise": ON,
    "no-conditional-assignment": ON,
    "no-console": ON,
    "no-construct": ON,
    "no-debugger": ON,
    "no-duplicate-super": ON,
    "no-duplicate-switch-case": ON,
    "no-duplicate-variable": [ON, "check-parameters"],
    "no-dynamic-delete": ON,
    "no-empty": ON,
    "no-eval": ON,
    "no-floating-promises": OFF,
    "no-for-in-array": ON,
    "no-implicit-dependencies": [ON, "dev", "optional"],
    "no-inferred-empty-object-type": ON,
    "no-invalid-template-strings": ON,
    "no-invalid-this": OFF,
    "no-misused-new": ON,
    "no-null-keyword": OFF,
    "no-object-literal-type-assertion": ON,
    "no-return-await": ON,
    "no-shadowed-variable": ON,
    "no-string-literal": ON,
    "no-string-throw": ON,
    "no-sparse-arrays": ON,
    "no-submodule-imports": OFF,
    "no-switch-case-fall-through": OFF,
    "no-unbound-method": OFF,
    "no-unnecessary-class": [ON, "allow-empty-class"],
    "no-unsafe-any": OFF,
    "no-unsafe-finally": ON,
    "no-unused-expression": ON,
    "no-unused-variable": OFF,
    "no-use-before-declare": OFF,
    "no-var-keyword": ON,
    "no-void-expression": ON,
    "prefer-conditional-expression": ON,
    radix: ON,
    "restrict-plus-operands": ON,
    "strict-boolean-expressions": OFF,
    "strict-type-predicates": ON,
    "switch-default": ON,
    "typeof-compare": OFF,
    "triple-equals": [ON, "allow-null-check", "allow-undefined-check"],
    "use-default-type-parameter": ON,
    "use-isnan": ON,

    // Maintainability
    "cyclomatic-complexity": ON,
    eofline: ON,
    indent: [ON, "spaces", 2],
    "linebreak-style": [ON, "LF"],
    "max-classes-per-file": [ON, 1],
    "max-file-line-count": [ON, 1000],
    "max-line-length": OFF,
    "no-default-export": OFF,
    "no-duplicate-imports": ON,
    "no-irregular-whitespace": ON,
    "no-mergeable-namespace": ON,
    "no-parameter-reassignment": ON,
    "no-require-imports": ON,
    "no-trailing-whitespace": ON,
    "object-literal-sort-keys": OFF,
    "prefer-const": ON,
    "trailing-comma": [
      ON,
      {
        multiline: "always",
        singleline: "never",
        esSpecCompliant: true
      }
    ],

    // Style
    align: OFF,
    "array-type": [ON, "array-simple"],
    "arrow-parens": ON,
    "arrow-return-shorthand": [ON, "multiline"],
    "binary-expression-operand-order": ON,
    "callable-types": ON,
    "class-name": ON,
    "comment-format": [ON, "check-space"],
    "completed-docs": OFF,
    "file-header": OFF,
    deprecation: ON,
    encoding: ON,
    "file-name-casing": OFF,
    "import-spacing": ON,
    "interface-name": [ON, "never-prefix"],
    "interface-over-type-literal": ON,
    "jsdoc-format": [ON, "check-multiline-start"],
    "match-default-export-name": ON,
    "new-parens": ON,
    "newline-before-return": OFF,
    "newline-per-chained-call": OFF,
    "no-angle-bracket-type-assertion": ON,
    "no-boolean-literal-compare": ON,
    "no-consecutive-blank-lines": ON,
    "no-parameter-properties": ON,
    "no-redundant-jsdoc": OFF,
    "no-reference-import": ON,
    "no-unnecessary-callback-wrapper": ON,
    "no-unnecessary-initializer": ON,
    "no-unnecessary-qualifier": ON,
    "no-unnecessary-type-assertion": ON,
    "number-literal-format": ON,
    "object-literal-key-quotes": [ON, "consistent-as-needed"],
    "object-literal-shorthand": ON,
    "one-line": [
      ON,
      "check-catch",
      "check-finally",
      "check-else",
      "check-open-brace",
      "check-whitespace"
    ],
    "one-variable-per-declaration": ON,
    "ordered-imports": OFF,
    "prefer-function-over-method": OFF,
    "prefer-method-signature": OFF,
    "prefer-object-spread": ON,
    "prefer-switch": ON,
    "prefer-template": ON,
    quotemark: [ON, "double", "jsx-double", "avoid-escape"],
    "return-undefined": OFF,
    semicolon: [OFF, "always", "ignore-bound-class-methods"],
    "space-before-function-paren": [
      ON,
      {
        anonymous: "never",
        asyncArrow: "always",
        constructor: "never",
        method: "never",
        named: "never"
      }
    ],
    "space-within-parens": [ON, 0],
    "switch-final-break": [ON, "always"],
    "type-literal-delimiter": ON,
    "variable-name": [ON, "ban-keywords", "check-format", "allow-pascal-case"],
    whitespace: [
      ON,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-rest-spread",
      "check-type",
      "check-type-operator",
      "check-preblock"
    ]
  }
};
