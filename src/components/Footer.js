import React, { Component } from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'


// import icons
import { FaAngleRight } from 'react-icons/fa';


class Footer extends Component {
    render() {
        const { dataBlog, dataPortfolio } = this.props;
        const post = dataBlog.edges[0].node;
        return (
            <div>
            <div class="container-fluid primary_footer">
                <div>
                    <div class="row adjust">
                        <div class="col-md-3 margin">
                            <h6>Site Map</h6>
                            <ul>
                                <li><Link to="/">Home<FaAngleRight className="float-right"/></Link></li>
                                <li><Link to="/about">About<FaAngleRight className="float-right"/></Link></li>
                                <li><Link to="/portfolio">Portfolio<FaAngleRight className="float-right"/></Link></li>
                                <li><Link to="/contact">Contact<FaAngleRight className="float-right"/></Link></li>
                            </ul>

                        </div>
                        <div class="col-md-3 footer_blog">
                            <h6>Latest Blog</h6>
                            <ul className="post-list">
                                <li>
                                    <Link to={`/blogPosts/${post.slug}`}>
                                        <p className="postTitle">{post.header}</p>
                                        <p className="info">{post.posted}</p>
                                        <p>
                                            <Img
                                                fluid={post.featuredImage.fluid}
                                            />
                                        </p>
                                        <p>{post.description}</p>
                                    </Link>
                                </li>
                            </ul>
                    </div>
                        <div class="col-md-3 margin">
                            <h6>Popular Tags</h6>
                            <div class="tagcloud">
                                {dataPortfolio.edges.map(({ node: post }) => (
                                        <Link to={`/portfolioSection/${post.slug}`} class="tag-cloud-link tag-link-30 tag-link-position-1" aria-label="adventure (4 items)">
                                            {post.title}
                                        </Link>
                                ))}
                            </div>

                        </div>
                        <div class="col-md-3 margin">
                            <h6>About Me</h6>
                            <p>Hello my name is Anusha and this is my Personal Blog! I am a fashion stylist. Through all the places and things I see around the world, there isn't a best way to share my experience! Follow my daily updates and discover with me the essence of traveling!</p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="sub_footer container">
                <div class="textaligncenter text_footer">
                        © {new Date().getFullYear()} Anushas - Designed &amp; Developed by <a>Blck Studio</a>	
                </div>
            </div>
            </div>
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

export default Footer;