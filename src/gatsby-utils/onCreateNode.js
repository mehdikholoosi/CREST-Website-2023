const { slugify } = require("../utils");

module.exports = ({ node, actions, createNodeId }) => {
    const { createNode } = actions;
    if (
        node.internal.type === "HomepagesJson" ||
        node.internal.type === "InnerpagesJson"
    ) {
        createNode({
            id: createNodeId(`Page-${node.id}`),
            parent: node.id,
            title: node.title,
            pageType: node.pageType,
            content: node.content,
            internal: {
                type: "Page",
                contentDigest: node.internal.contentDigest,
                contentFilePath: node.internal.contentFilePath
            },
        });
    }

    if (node.internal.type === "ItServicesJson") {
        createNode({
            id: createNodeId(`ItService-${node.id}`),
            parent: node.id,
            title: node.title,
            tagline: node.tagline,
            slug: slugify(node.title),
            excerpt: node.excerpt,
            is_featured: node.is_featured,
            introText: node.introText,
            icon: node.icon,
            featured_image: node.featured_image,
            banner_image: node.banner_image,
            content: node.content,
            internal: {
                type: "ItService",
                contentDigest: node.internal.contentDigest,
                contentFilePath: node.internal.contentFilePath
            },
        });
    }
    if (node.internal.type === "ItSolutionsJson") {
        createNode({
            id: createNodeId(`ItSolution-${node.id}`),
            parent: node.id,
            title: node.title,
            tagline: node.tagline,
            slug: slugify(node.title),
            excerpt: node.excerpt,
            is_featured: node.is_featured,
            introText: node.introText,
            icon: node.icon,
            featured_image: node.featured_image,
            banner_image: node.banner_image,
            content: node.content,
            internal: {
                type: "ItSolution",
                contentDigest: node.internal.contentDigest,
                contentFilePath: node.internal.contentFilePath
            },
        });
    }

    if (node.internal.type === "CaseStudiesJson") {
        createNode({
            id: createNodeId(`CaseStudy-${node.id}`),
            parent: node.id,
            title: node.title,
            slug: slugify(node.title),
            category: node.category,
            excerpt: node.excerpt,
            tagline: node.tagline,
            logo: node.logo,
            featured_image: node.featured_image,
            slide_image: node.slide_image,
            banner_image: node.banner_image,
            is_featured: node.is_featured,
            content: node.content,
            internal: {
                type: "CaseStudy",
                contentDigest: node.internal.contentDigest,
                contentFilePath: node.internal.contentFilePath
            },
        });
    }
    if (node.internal.type === "GeneralJson") {
        createNode({
            id: createNodeId(`General-${node.id}`),
            parent: node.id,
            section: node.section,
            contact_info: node.contact_info,
            menu: node.menu,
            slogan: node.slogan,
            internal: {
                type: "General",
                contentDigest: node.internal.contentDigest,
                contentFilePath: node.internal.contentFilePath
            },
        });
    }

    if (node.internal.type === "Mdx") {
        console.log(JSON.stringify(node));
        if (node.frontmatter.type === "resources") {
            console.log(node);
            createNode({
                id: node.frontmatter.id,
                title: node.frontmatter.title,
                parent: node.id,
                type: node.frontmatter.type,
                body: node.body,
                internal: {
                    type: "Resources",
                    contentDigest: node.internal.contentDigest,
                    contentFilePath: node.internal.contentFilePath
            },
            });
        }
        else if (node.frontmatter.type === "blog") {
            createNode({
                id: createNodeId(`Article-${node.id}`),
                parent: node.id,
                title: node.frontmatter.title,
                slug: `blog/${slugify(node.frontmatter.title)}`,
                postedAt: node.frontmatter.date,
                image: node.frontmatter.image,
                quote_text: node.frontmatter.quote_text,
                quote_author: node.frontmatter.quote_author,
                video_link: node.frontmatter.video_link,
                categories: node.frontmatter.categories,
                tags: node.frontmatter.tags,
                format: node.frontmatter.format,
                is_featured: node.frontmatter.is_featured,
                author: node.frontmatter.author,
                // define a description entity in frontmatter metadata to replace excerpt
                excerpt: node.frontmatter.description,
                description: node.frontmatter.description,
                type: node.frontmatter.type,
                internal: {
                    type: "Article",
                    contentDigest: node.internal.contentDigest,
                    contentFilePath: node.internal.contentFilePath
                },
            });
        } else if (node.frontmatter.type === "news") {
            createNode({
                id: createNodeId(`News-${node.id}`),
                parent: node.id,
                title: node.frontmatter.title,
                slug: `news/${slugify(node.frontmatter.title)}`,
                postedAt: node.frontmatter.date,
                image: node.frontmatter.image,
                quote_text: node.frontmatter.quote_text,
                quote_author: node.frontmatter.quote_author,
                video_link: node.frontmatter.video_link,
                categories: node.frontmatter.categories,
                tags: node.frontmatter.tags,
                format: node.frontmatter.format,
                is_featured: node.frontmatter.is_featured,
                author: node.frontmatter.author,
                // define a description entity in frontmatter metadata to replace excerpt
                excerpt: node.frontmatter.description,
                description: node.frontmatter.description,
                type: node.frontmatter.type,
                internal: {
                    type: "News",
                    contentDigest: node.internal.contentDigest,
                    contentFilePath: node.internal.contentFilePath
                },
            });
        }
    }

    if (node.internal.type === "AuthorsJson") {
        createNode({
            id: createNodeId(`Author-${node.id}`),
            parent: node.id,
            name: node.name,
            slug: slugify(node.name),
            image: node.image,
            bio: node.bio,
            socials: node.socials,
            internal: {
                type: "Author",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
};
