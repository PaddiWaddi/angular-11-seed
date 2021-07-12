const defaultOrderConfig = {
  emptyLineBefore: 'never', // Change it to 'threshold' if this bug is resolved: https://github.com/hudochenkov/stylelint-order/issues/101
  // emptyLineMinimumPropertyThreshold: 4,
  noEmptyLineBetween: true,
};

const PROPERTY_ORDER = [
  {
    ...defaultOrderConfig,
    groupName: 'Pseudo-Elements',
    properties: ['content'],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Box',
    properties: ['position', 'display', 'visibility', 'box-sizing', 'float', 'clear'],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Grid',
    properties: [
      'grid',
      'grid-after',
      'grid-area',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-auto-rows',
      'grid-before',
      'grid-column',
      'grid-column-end',
      'grid-column-gap',
      'grid-column-start',
      'grid-columns',
      'grid-end',
      'grid-gap',
      'grid-row',
      'grid-row-end',
      'grid-row-gap',
      'grid-row-start',
      'grid-rows',
      'grid-start',
      'grid-template',
      'grid-template-areas',
      'grid-template-columns',
      'grid-template-rows',
    ],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Flex',
    properties: [
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'justify-content',
      'align-items',
      'align-content',
      'align-self',
      'order',
    ],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Positioning',
    properties: ['top', 'right', 'bottom', 'left'],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Boundaries',
    properties: ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height'],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Spacing',
    properties: [
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
    ],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Text',
    properties: [
      'color',
      'font',
      'font-family',
      'font-size',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-style',
      'font-variant',
      'font-weight',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'letter-spacing',
      'line-height',
      'list-style',
      'word-spacing',
      'text-align',
      'text-align-last',
      'text-decoration',
      'text-indent',
      'text-justify',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-rendering',
      'text-outline',
      'text-shadow',
      'text-transform',
      'text-wrap',
      'word-wrap',
      'overflow-wrap',
      'word-break',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'vertical-align',
      'white-space',
      'word-spacing',
      'hyphens',
      'src',
    ],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Border',
    properties: [
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',
      'stroke-width',
      'stroke-linecap',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke',
    ],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Background',
    properties: [
      'opacity',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-size',
      'background-attachment',
      'box-shadow',
      'fill',
    ],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Overflow',
    properties: ['overflow', 'overflow-x', 'overflow-y'],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Columns',
    properties: ['columns', 'column-gap', 'column-fill', 'column-rule', 'column-span', 'column-count', 'column-width'],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Table',
    properties: [
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
    ],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Animation',
    properties: [
      'transform',
      'transform-origin',
      'transform-style',
      'filter',
      'backface-visibility',
      'perspective',
      'perspective-origin',
      'transition',
      'transition-property',
      'transition-duration',
      'transition-timing-function',
      'transition-delay',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-play-state',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',
    ],
  },
  {
    ...defaultOrderConfig,
    groupName: 'Other',
    properties: [
      'z-index',
      'tab-size',
      'counter-reset',
      'counter-increment',
      'resize',
      'cursor',
      'pointer-events',
      'speak',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
    ],
  },
];

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-high-performance-animation', 'stylelint-order'],
  rules: {
    // ----- POSSIBLE ERRORS ----- //
    // Function
    'function-linear-gradient-no-nonstandard-direction': [
      true,
      {
        message: 'Use standard syntax for direction attribute: `to top`, `to left`, ... instead of `top`, `left`, ...',
      },
    ],
    // Selector
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/^app-/', '/^app-/', '/^cdk-/', '/^ng-/', 'router-outlet'],
      },
    ],
    // At-rule
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin', 'each', 'if', 'else', 'at', 'at-root'],
      },
    ],
    // General / Sheet
    'no-extra-semicolons': null, // Disabled, because Prettier handles this,
    'no-descending-specificity': [
      true,
      {
        severity: 'warning', // Changes severity of this rule
      },
    ],
    // ----- Limit language features ----- //
    // Color
    'color-named': [
      'never',
      {
        severity: 'warning',
      },
    ],
    // Function
    'function-url-no-scheme-relative': true,
    // Keyframes
    'keyframes-name-pattern': [
      '.+[aA]nimation',
      {
        message: "Follow the naming convention ('Animation' as suffix): e.g. 'loadingAnimation' or 'loading-animation'",
      },
    ],
    // Number
    'number-max-precision': 4,
    // Time
    'time-min-milliseconds': 50,
    // Unit
    'unit-blacklist': [
      ['px', 'em'],
      {
        message: "Don't use `px` or `em` units. Use `rem` instead (unit-blacklist)",
        ignoreProperties: {
          px: ['/^border/', 'outline', 'letter-spacing', 'perspective', 'filter', 'box-shadow', 'stroke-dashoffset'],
        },
        ignoreMediaFeatureNames: {
          px: ['/height$/'],
        },
      },
    ],
    // Shorthand property
    'shorthand-property-no-redundant-values': true,
    // Value
    'value-no-vendor-prefix': true,
    // Property
    'property-no-vendor-prefix': true,
    // Declaration
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['flex-flow'],
      },
    ],
    // Selector
    'selector-class-pattern': [
      '(app|ng|cdk)(-([a-zA-Z0-9^]+[-]?[a-zA-Z0-9^]+))?((__)([a-zA-Z0-9^]+[-]?[a-zA-Z0-9^]+))?((--)([a-zA-Z0-9^]+[-]?[a-zA-Z0-9^]+))?',
      {
        resolveNestedSelectors: true,
      },
    ],
    // At-rule
    'at-rule-no-vendor-prefix': true,
    // General / Sheet
    'max-nesting-depth': 6,
    'no-unknown-animations': true,

    // ----- STYLISTIC ISSUES ----- //
    // Color
    'color-hex-case': 'lower',
    // Font family
    'font-family-name-quotes': 'always-unless-keyword',
    // Font weight
    'font-weight-notation': 'numeric',
    // Function
    'function-calc-no-unspaced-operator': null, // Disabled, because Prettier handles this
    'function-comma-newline-after': null, // Disabled, because Prettier handles this
    'function-comma-newline-before': null, // Disabled, because Prettier handles this
    'function-comma-space-after': null, // Disabled, because Prettier handles this
    'function-comma-space-before': null, // Disabled, because Prettier handles this
    'function-max-empty-lines': null, // Disabled, because Prettier handles this
    'function-parentheses-newline-inside': null, // Disabled, because Prettier handles this
    'function-parentheses-space-inside': null, // Disabled, because Prettier handles this
    'function-url-quotes': 'always',
    'function-whitespace-after': null, // Disabled, because Prettier handles this
    // String
    'string-quotes': null, // Disabled, because Prettier handles this
    // Unit
    'unit-case': 'lower',
    // Value
    'value-keyword-case': 'lower',
    // Value list
    'value-list-comma-newline-after': null, // Disabled, because Prettier handles this
    'value-list-comma-newline-before': null, // Disabled, because Prettier handles this
    'value-list-comma-space-after': null, // Disabled, because Prettier handles this
    'value-list-comma-space-before': null, // Disabled, because Prettier handles this
    'value-list-max-empty-lines': null, // Disabled, because Prettier handles this
    // Declaration
    'declaration-bang-space-after': null, // Disabled, because Prettier handles this
    'declaration-bang-space-before': null, // Disabled, because Prettier handles this
    'declaration-colon-newline-after': null, // Disabled, because Prettier handles this
    'declaration-colon-space-after': null, // Disabled, because Prettier handles this
    'declaration-colon-space-before': null, // Disabled, because Prettier handles this
    // Declaration block
    'declaration-block-semicolon-newline-after': null, // Disabled, because Prettier handles this
    'declaration-block-semicolon-newline-before': null, // Disabled, because Prettier handles this
    'declaration-block-semicolon-space-after': null, // Disabled, because Prettier handles this
    'declaration-block-semicolon-space-before': null, // Disabled, because Prettier handles this
    'declaration-block-trailing-semicolon': null, // Disabled, because Prettier handles this
    // Block
    'block-closing-brace-empty-line-before': null, // Disabled, because Prettier handles this
    'block-closing-brace-newline-after': null, // Disabled, because Prettier handles this
    'block-closing-brace-newline-before': null, // Disabled, because Prettier handles this
    'block-closing-brace-space-after': null, // Disabled, because Prettier handles this
    'block-closing-brace-space-before': null, // Disabled, because Prettier handles this
    'block-opening-brace-newline-after': null, // Disabled, because Prettier handles this
    'block-opening-brace-newline-before': null, // Disabled, because Prettier handles this
    'block-opening-brace-space-after': null, // Disabled, because Prettier handles this
    'block-opening-brace-space-before': null, // Disabled, because Prettier handles this
    // Selector
    'selector-attribute-brackets-space-inside': null, // Disabled, because Prettier handles this
    'selector-attribute-operator-space-after': null, // Disabled, because Prettier handles this
    'selector-attribute-operator-space-before': null, // Disabled, because Prettier handles this
    'selector-attribute-quotes': null,
    'selector-combinator-space-after': null, // Disabled, because Prettier handles this
    'selector-combinator-space-before': null, // Disabled, because Prettier handles this
    'selector-descendant-combinator-no-non-space': null, // Disabled, because Prettier handles this
    'selector-pseudo-class-parentheses-space-inside': null, // Disabled, because Prettier handles this
    // Selector list
    'selector-list-comma-newline-after': null, // Disabled, because Prettier handles this
    'selector-list-comma-newline-before': null, // Disabled, because Prettier handles this
    'selector-list-comma-space-after': null, // Disabled, because Prettier handles this
    'selector-list-comma-space-before': null, // Disabled, because Prettier handles this
    // Rule
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
      },
    ],
    // Media feature
    'media-feature-colon-space-after': null, // Disabled, because Prettier handles this
    'media-feature-colon-space-before': null, // Disabled, because Prettier handles this
    'media-feature-parentheses-space-inside': null, // Disabled, because Prettier handles this
    'media-feature-range-operator-space-after': null, // Disabled, because Prettier handles this
    'media-feature-range-operator-space-before': null, // Disabled, because Prettier handles this
    // Media query list
    'media-query-list-comma-newline-after': null, // Disabled, because Prettier handles this
    'media-query-list-comma-newline-before': null, // Disabled, because Prettier handles this
    'media-query-list-comma-space-after': null, // Disabled, because Prettier handles this
    'media-query-list-comma-space-before': null, // Disabled, because Prettier handles this
    // At-rule
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['include', 'else'],
      },
    ],
    'at-rule-name-newline-after': null, // Disabled, because Prettier handles this
    'at-rule-name-space-after': null, // Disabled, because Prettier handles this
    'at-rule-semicolon-newline-after': null, // Disabled, because Prettier handles this
    'at-rule-semicolon-space-before': null, // Disabled, because Prettier handles this
    // General / Sheet
    indentation: null, // Disabled, because Prettier handles this
    linebreaks: null, // Disabled, because Prettier handles this
    'max-empty-lines': null, // Disabled, because Prettier handles this
    'max-line-length': null, // Disabled, because Prettier handles this
    'no-eol-whitespace': null, // Disabled, because Prettier handles this
    'no-missing-end-of-source-newline': null, // Disabled, because Prettier handles this
    'no-empty-first-line': null, // Disabled, because Prettier handles this

    'order/order': [
      [
        'dollar-variables',
        'at-variables',
        {
          type: 'at-rule',
          name: 'mixin',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'ellipsis',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'multiLineEllipsis',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: '^FontStyle',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: '^headline',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: '^label',
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'isBasketOpened',
        },
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'isSettings',
        },
        {
          type: 'rule',
          selector: /\s&?:{1,2}[^(ng\-deep)]/,
        },
        {
          type: 'at-rule',
          name: 'keyframes',
        },
        'rules',
        {
          type: 'rule',
          selector: /[&#{]+/,
        },
        'at-rules',
      ],
      {},
    ],
    'order/properties-order': [
      [...PROPERTY_ORDER],
      {
        // unspecified: 'bottomAlphabetical',
        // emptyLineBeforeUnspecified: 'never', // Change it to 'threshold' if this bug is resolved: https://github.com/hudochenkov/stylelint-order/issues/87
        // emptyLineMinimumPropertyThreshold: 4,
      },
    ],
    'plugin/no-low-performance-animation-properties': [
      true,
      {
        ignore: 'paint-properties',
        severity: 'warning',
      },
    ],
  },
};
