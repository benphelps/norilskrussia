module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("favicon.ico");


    return {
        passthroughFileCopy: true
    };
};
