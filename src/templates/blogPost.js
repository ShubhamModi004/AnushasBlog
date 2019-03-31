import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'


const blogPost = ({ data }) => {
    return (
        <Layout dataBlog={data.allContentfulBlog} dataPortfolio={data.allContentfulPortfolio}>
            <div>
                <h2>{data.contentfulBlog.header}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.contentfulBlog.longDescription.childMarkdownRemark.html,
                    }}
                    className="ImagesFetched"
                />
            </div>
        </Layout>
    )
}

export const query = graphql`
        query($slug: String!){
        contentfulBlog(slug:{ eq:$slug}){
            header
            description
            longDescription{
                childMarkdownRemark {
                    html
                }
            }
            featuredImage {
                fluid(maxWidth: 800){
                    ...GatsbyContentfulFluid
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



export default blogPost
