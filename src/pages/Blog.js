import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'


const Blog = ({ data: { allContentfulPortfolio } }) => {
    return (
        <div>
            {/* Products list*/}
            {allContentfulPortfolio.edges.map(({ node: post }) => (
                <div>
                    <h2>Garb Products</h2>
                    <Link to={`/`}
                        style={{ textDecoration: 'none', color: 'darkPurple' }}
                    >
                        <h3>{post.title} . {' '} <span style={{ fontSize: '1.2rem', fontWeight: '300', color: '#551A8B' }}>{post.title}</span></h3>
                        <div>
                            <Img
                                style={{ maxWidth: 400 }}
                                fluid={post.featuredImage.fluid}
                            />
                        </div>
                    </Link>
                </div>

            ))}
        </div>
    )
}



export const query = graphql`
{
   allContentfulPortfolio{
        edges{
            node{
                title
                slug
                featuredImage {
                    fluid(maxWidth: 400){
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
}
`

export default Blog;

