import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


const portfolioSection = ({ data: { contentfulPortfolio } }) => {
    return (
        
        <div>
            {console.log(contentfulPortfolio)}
            <div>
                <h2>{contentfulPortfolio.title}</h2>
                {console.log(contentfulPortfolio.portfolioImages)}
                <div
                    dangerouslySetInnerHTML={{
                        __html: contentfulPortfolio.portfolioImages.childMarkdownRemark.html,
                    }}
                    className="ImagesFetched"
                />
            </div>
        </div>
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
