const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(lightningCSS);
    return {
        dir: {
            input: "source",
            output: "public",
        },
        templateFormats: ["md", "njk", "html",],
    };

};

