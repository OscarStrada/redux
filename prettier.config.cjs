/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
    arrowParens: 'always',
    printWidth: 80,
    singleQuote: true,
    jsxSingleQuote: true,
    semi: true,
    trailingComma: 'all',
    tabWidth: 2,
    plugins: [
      '@ianvs/prettier-plugin-sort-imports',
      'prettier-plugin-tailwindcss',
    ],
    tailwindConfig: './tailwind.config.ts',
    importOrder: [
      '^(react/(.*)$)|^(react$)',
      '^(next/(.*)$)|^(next$)',
      '<THIRD_PARTY_MODULES>',
      '',
      '^~/types/(.*)$',
      '^~/utils/(.*)$',
      '^~/helpers/(.*)$',
      '^~/components/(.*)$',
      '^~/styles/(.*)$',
      '^~/(.*)$',
      '^[./]',
    ],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.4',
  };
  
  module.exports = config;
  