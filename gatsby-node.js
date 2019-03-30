
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const BlogpostTemplate = path.resolve('./src/templates/blogPost.js');
const PortfolioTemplate = path.resolve('./src/templates/portfolio-template.js');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = createFilePath({ node, getNode, basePath: 'posts'})
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug,
//         })
//     }
// }   


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            allContentfulBlog{
                edges{
                    node {
                        slug
                    }
                }
            }
            allContentfulPortfolio{
                edges{
                    node{
                        slug
                    }
                }
            }
        }

    `)

    


    const blogPosts = result.data.allContentfulBlog.edges
    blogPosts.forEach(({ node: blogPost }) => {
        createPage({
            path: `/blogPosts/${blogPost.slug}`,
            component: BlogpostTemplate,
            context: {
                slug: blogPost.slug
            }
        })
    })

    const portfolio = result.data.allContentfulPortfolio.edges
    portfolio.forEach(({ node: portfolioContent }) => {
        createPage({
            path: `/portfolioSection/${portfolioContent.slug}`,
            component: PortfolioTemplate,
            context: {
                slug: portfolioContent.slug
            }
        })
    })


}


