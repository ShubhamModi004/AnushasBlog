import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


const blogPost = ({ data: { contentfulBlog}}) => {
    return (
            <div>
                <h2>{contentfulBlog.header}</h2>
            </div>
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
