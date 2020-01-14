// Ref https://babeljs.io/docs/en/presets#creating-a-preset
// Ref https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md

const presetEnv = require("@babel/preset-env");
const presetTypescript = require("@babel/preset-typescript");
const presetReact = require("@babel/preset-react");
const proposalClassProperties = require("@babel/plugin-proposal-class-properties");
const proposalOptionalChaining = require("@babel/plugin-proposal-optional-chaining");

module.exports = () => {
  const base = {
    presets: [
      [
        presetEnv,
        {
          modules: false,
          useBuiltIns: "entry",
          corejs: {
            version: 3
          }
        }
      ],
      presetTypescript,
      presetReact
    ],
    plugins: [proposalClassProperties, proposalOptionalChaining]
  };
  return {
    env: {
      development: base,
      production: base
    }
  };
};
