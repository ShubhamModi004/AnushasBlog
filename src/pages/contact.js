import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

// Importing components
import Contact from '../Contact/Contact';

const ContactPage = ({ data }) => (
    <Layout dataBlog={data.allContentfulBlog} dataPortfolio={data.allContentfulPortfolio}>
        <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
        <Contact />
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

export default ContactPage;
