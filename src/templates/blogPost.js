import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'


const blogPost = ({ data: { contentfulBlog}}) => {
    return (
        <Layout>
            <div>
                <h2>{contentfulBlog.header}</h2>
            </div>
        </Layout>
    )
}

export const query = graphql`
query($slug: String!){
    contentfulBlog(slug:{ eq:$slug}){
        header
        description
        featuredImage {
            fluid(maxWidth: 800){
                ...GatsbyContentfulFluid
            }
        }
    }
}
`



export default blogPost
