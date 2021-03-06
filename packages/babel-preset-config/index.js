// Ref https://babeljs.io/docs/en/presets#creating-a-preset
// Ref https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md

const presetEnv = require("@babel/preset-env");
const presetTypescript = require("@babel/preset-typescript");
const presetReact = require("@babel/preset-react");
const proposalClassProperties = require("@babel/plugin-proposal-class-properties");
const proposalOptionalChaining = require("@babel/plugin-proposal-optional-chaining");
const proposalDecorators = require("@babel/plugin-proposal-decorators");

module.exports = () => {
  const base = {
    presets: [
      [
        presetEnv,
        {
          modules: false,
          useBuiltIns: "entry",
          corejs: {
            version: 3,
          },
        },
      ],
      presetTypescript,
      presetReact,
    ],
    plugins: [
      [
        proposalDecorators,
        {
          decoratorsBeforeExport: true,
        },
      ],
      proposalClassProperties,
      proposalOptionalChaining,
    ],
  };

  const test = {
    presets: [
      [
        presetEnv,
        {
          targets: {
            node: "current",
          },
        },
      ],
      presetTypescript,
      presetReact,
    ],
    plugins: [
      [
        proposalDecorators,
        {
          decoratorsBeforeExport: true,
        },
      ],
      proposalClassProperties,
      proposalOptionalChaining,
    ],
  };
  return {
    env: {
      test,
      development: base,
      production: base,
    },
  };
};
