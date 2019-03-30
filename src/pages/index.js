import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby'


import Blog from './Blog';
// Importing components
import Home from '../Home/Home';

class IndexPage extends Component {
  render() {
    const { data } = this.props;
    return (
        <Layout>
          <SEO title="Home" keywords={[`Anushas`, `Fashion Designers In Goa`, `Best Fashion Designer`]} />
          <Home data={data.allContentfulBlog} />
        </Layout>
    )
  }
}


export const query = graphql`
{
   allContentfulBlog{
        edges{
            node{
                header
                posted
                slug
                description
                featuredImage {
                    fluid(maxWidth: 400){
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
}
`





export default IndexPage;
