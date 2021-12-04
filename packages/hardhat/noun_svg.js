const { buildSVG } = require('@nouns/sdk');
const nounParts = require("./parts.json");
const nounPalette = require("./palette.json");
const nounBackground = require("./backgrounds.json")

const svg = buildSVG(nounParts, nounPalette, nounBackground);
console.log(svg);