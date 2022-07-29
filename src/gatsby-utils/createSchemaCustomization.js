const {
    pageDefs,
    contentDefs,
    itServiceDefs,
    itSolutionDefs,
    caseStudyDefs,
    generalDefs,
    siteDefs,
    blogDefs,
    authorDefs,
    newsDefs,
} = require("./typedefs");

module.exports = async ({ actions }) => {
    const { createTypes } = actions;

    const allTypeDefs = [
        pageDefs,
        contentDefs,
        itServiceDefs,
        itSolutionDefs,
        caseStudyDefs,
        generalDefs,
        siteDefs,
        blogDefs,
        authorDefs,
        newsDefs,
    ];

    createTypes(allTypeDefs);
};
