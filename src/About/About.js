import React, { Component } from 'react';
import "./About.css";



// importing images
import Anushas from '../Globals/Anushas';


class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="post__category title-line textaligncenter">
                        <div className="title-line__inwrap wow fadeIn">
                            <ul>
                                About Me 
                            </ul>
                        </div>
                </div>
                <div className="title_about textaligncenter wow fadeIn">
                    <h1>Anusha Shaikh</h1>
                </div>
                <div className="post_container_single">
                    <div className="about_img text-center">
                        <Anushas />
                    </div>
                    <div className="textaligncenter wow fadeIn">
                            <ul className="meta-share ">	
                                <li>		
                                    <a href="https://www.facebook.com/designer.anushashaikh/">* facebook</a>
                                </li>	
                                <li>		
                                    <a href="https://www.instagram.com/anushas_designer">* instagram</a>	
                                </li>
                            </ul>
                    </div>



                    <div className="story-intro wow fadeInUp">	
                        <p className="capiial">Handcrafting intricate designs of a collective collection that starts with casual ethnic ware, extending up to bridal couture that pleases the eye. With strong Indian sentiments in each stitch, flowing with distinct embroideries and prints. Featuring traditional and experimental styles. It is a showcase of diversity throughout. With intimate client sessions that bring out the creativity, one can design their outfit from scratch, with the designer brewing up craft just for you. 
                        </p>
                    </div>
                    <p className="wow fadeInUp">
                    Ensembles mixed with charm, contemporary cuts and silhouettes Anusha’s has a penchant for well finished craftsmanship. And is ready for you!	
                    </p>
                                        
                </div>
            </div>
        )
    }
}

export default About;
