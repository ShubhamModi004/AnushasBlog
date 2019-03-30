import React, { Component } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';



class Blog extends Component {

    render() {
        const { data } = this.props;
        return (
            <div class="container blog">
                {data.edges.map(( {node: post }) => (
                    <ul className="post-list">
                    <li>
                        <Link to={`/blogPosts/${post.slug}`}>
                            <h3>{post.header}</h3>
                            <p className="info">{post.posted}</p>
                            <p>
                                {console.log(post.featuredImage)}
                                <Img
                                    fluid={post.featuredImage.fluid}
                                />
                            </p>
                            <p>{post.description}</p>
                        </Link>
                    </li>
                    </ul>
                ))}
            </div>
        )
    }
}

export default Blog;











// code for the blog