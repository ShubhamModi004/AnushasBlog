import React, { Component } from 'react'
import './Contact.css';
import ContactForm from './ContactForm';

// importing images
import Anushas from '../Globals/Anushas';
import Facebook from '../Globals/Facebook';
import Instagram from '../Globals/Instagram';


export default class Contact extends Component {
  render() {
    return (
        <div>
            <div className="newsletter">
                <div className="container wow fadeInUp">
                    <h2>CONTACT ME</h2>
                </div>
            </div>
            <div className="container blog">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8" id="main">
                        <ContactForm/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 order-2">
                        <div className="row form-groups">
                            <div className="col-md-12 container contact_descrition">
                                <div className="contact_img">
                                    <Anushas />
                                </div>
                            </div>
                            <div className="col-md-12 container wow fadeInUp contact_details">
                                <h6>Website: <a href="http://anushas.in/">Anushas.in</a></h6>
                                <h6>Mobile: <a href="tel:+91-951-8739-931">+91-951-8739-931</a></h6>
                                <h6>Email: <a href="anushas.designer@gmail.com">anushas.designer@gmail.com</a></h6>
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
                </div>
            </div>
            
        </div>
    )
  }
}
