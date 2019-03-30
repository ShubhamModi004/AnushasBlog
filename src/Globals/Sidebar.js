import React, { Component } from 'react'
import './Sidebar.css';

import Facebook from './Facebook';
import Instagram from './Instagram';


export default class Sidebar extends Component {
  render() {
    return (
        <div className="sticky-top">
            <div className="card">
                <div className="avatar"></div>
                <div className="profile">
                    <h3 className="name">Anusha Shaikh</h3>
                    <div className="container">
                        <p>Handcrafting intricate designs of a collective collection that starts with 
                        casual ethnic ware, extending up to bridal couture that pleases the eye. 
                        With strong Indian sentiments in each stitch, 
                        flowing with distinct embroideries and prints. 
                        Featuring traditional and experimental styles. 
                        It is a showcase of diversity throughout.
                        With intimate client sessions that bring out the creativity, 
                        one can design their outfit from scratch, 
                        with the designer brewing up craft just for you.</p>
                    </div>
                    <div className="socialinks">
                        <a href="https://www.facebook.com/designer.anushashaikh/">
                            <div className="about_social">
                                <Facebook/>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/anushas_designer">
                            <div className="about_social">
                                <Instagram />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
