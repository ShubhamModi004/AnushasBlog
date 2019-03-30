import React, { Component } from 'react'
import { Link } from "gatsby"


// import icons
import { FaAngleRight } from 'react-icons/fa';


class Footer extends Component {
    render() {
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
                            {/* {% component 'blogPosts2' %} */}
                    </div>
                        <div class="col-md-3 margin">
                            <h6>Popular Tags</h6>
                            <div class="tagcloud">
                                <a href="{{ 'resortwear'| page }}" class="tag-cloud-link tag-link-30 tag-link-position-1" aria-label="adventure (4 items)">Resort Wear</a>
                                <a href="{{ 'bridal'| page }}" class="tag-cloud-link tag-link-30 tag-link-position-1" aria-label="adventure (4 items)">Bridal Wear</a>
                                <a href="{{ 'classictraditional'| page }}" class="tag-cloud-link tag-link-30 tag-link-position-1" aria-label="adventure (4 items)">Classic Taditional</a>
                                <a href="{{ 'cocktailwear'| page }}" class="tag-cloud-link tag-link-30 tag-link-position-1" aria-label="adventure (4 items)">Cocktail Wear</a>
                                <a href="{{ 'eveningwear'| page }}" class="tag-cloud-link tag-link-30 tag-link-position-1" aria-label="adventure (4 items)">Evening Wear</a>
                                <a href="{{ 'indoegyption'| page }}" class="tag-cloud-link tag-link-30 tag-link-position-1" aria-label="adventure (4 items)">Indo Egyption</a>
                                <a href="{{ 'indowestern'| page }}" class="tag-cloud-link tag-link-30 tag-link-position-1" aria-label="adventure (4 items)">Indo Western</a>
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
                    © 2018 Anushas - Designed &amp; Developed by <a>Blck Studio</a>	
                </div>
            </div>
            </div>
        )
    }
}


export default Footer;