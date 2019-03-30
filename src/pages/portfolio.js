import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image';
import Layout from "../components/layout"
import SEO from "../components/seo"

import './portfolio.css';



const Portfolio = ({ data: { allContentfulPortfolio } }) => {
    
    return (
        <Layout>
            <SEO title="Portfolio" keywords={[`Anushas`, `Fashion Designers In Goa`, `Best Fashion Designer`]} />
            {/* Products list*/}
            <div className="row">
                    {allContentfulPortfolio.edges.map(({ node: post }) => (
                    <div className="col-md-4 col-sm-6">
                        <Link to={`/portfolioSection/${post.slug}`}>
                            <div className="resortwear">
                                <Img fluid={post.featuredImage.fluid}/>
                                <div className="dark-overlay"></div>
                                <div className="containertag">
                                    <span>{post.title}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
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
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
}
`

export default Portfolio;

