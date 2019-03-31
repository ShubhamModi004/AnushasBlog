import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'


// Importing components
import About from '../About/About';

const AboutPage = ({ data }) => (
    <Layout dataBlog={data.allContentfulBlog} dataPortfolio={data.allContentfulPortfolio}>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <About />
    </Layout>
)


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

export default AboutPage
