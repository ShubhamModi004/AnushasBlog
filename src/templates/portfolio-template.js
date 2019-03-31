import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'


const portfolioSection = ({ data }) => {
    return (
        <Layout dataBlog={data.allContentfulBlog} dataPortfolio={data.allContentfulPortfolio}>
        <div>
            <div>
                <h2>{data.contentfulPortfolio.title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.contentfulPortfolio.portfolioImages.childMarkdownRemark.html,
                    }}
                    className="ImagesFetched"
                />
            </div>
        </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!){
    contentfulPortfolio(slug:{ eq:$slug}){
        title
        portfolioImages{
            childMarkdownRemark {
                html
            }
        }
    }
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
    allContentfulBlog{
        edges{
            node{
                header
                posted
                slug
                description
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



export default portfolioSection
