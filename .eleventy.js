const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(lightningCSS);
    eleventyConfig.addPassthroughCopy("main.css");

};

