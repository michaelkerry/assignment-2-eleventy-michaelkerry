module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/**");
    return {
        dir: {
            input: "src",
            output: "dist"
        },
        pathprefix: "assignment-2-eleventy-michaelkerry"
    };
};