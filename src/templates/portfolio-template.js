import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'


const portfolioSection = ({ data: { contentfulPortfolio } }) => {
    return (
        <Layout>
        <div>
            <div>
                <h2>{contentfulPortfolio.title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: contentfulPortfolio.portfolioImages.childMarkdownRemark.html,
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
}
`



export default portfolioSection
