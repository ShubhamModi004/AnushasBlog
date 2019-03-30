import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout';

const portfolioSection = ({ data: { contentfulPortfolio } }) => {
    return (
        <Layout>
            <div>
                <h2>{contentfulPortfolio.title}</h2>
            </div>
        </Layout>
    )
}

export const query = graphql`
query($slug: String!){
    contentfulPortfolio(slug:{ eq:$slug}){
        title
    }
}
`



export default portfolioSection
