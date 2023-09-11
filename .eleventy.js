const copyTokensToJSON = require('./config/copyTokensToJSON.js');
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");

module.exports = function (eleventyConfig) {
    // eleventyConfig.addTemplateFormats('js');

    // Liquid considers "" and 0 as truthy - this makes it behave like JavaScript
    eleventyConfig.setLiquidOptions({
        jsTruthy: true
    });

    eleventyConfig.addPlugin(lightningCSS);
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy({ 'source/assets': '/' });

    eleventyConfig.on('eleventy.before', async ({ dir, runMode, outputMode }) => {
        await copyTokensToJSON({ dir, runMode, outputMode });
    });

    return {
        dir: {
            input: "source",
            output: "public",
        },
        // NOTE: html uses liquid by default
        templateFormats: ["md", "html", "11ty.js"],
    };

};

