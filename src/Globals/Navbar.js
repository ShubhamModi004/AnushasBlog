import React, { Component } from 'react'
import './Navbar.css';
import { Link } from "gatsby"


// Importing the Logo
import Logo from './Logo';
// importing icons
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

class Navbar extends Component {
  render() {
    return (
        <div>
            <div className="header container-fluid">
                <div className="container">
                        <div className="logoHeader"><Logo /></div>
                        <div className="socialLinks">
                            <a className="fab number float-right pl-3 pt-1" href="tel:+91-742-0886-432">+91-742-0886-432</a>
                            <div className="fab line float-right"></div>
                            <a href="https://www.facebook.com/designer.anushashaikh/">
                                <div className="fab social pr-3 float-right"><FaFacebook/></div>
                            </a>
                            <a href="https://www.instagram.com/anushas_designer">
                                <div className="fab social pr-3 float-right"><FaInstagram/></div>
                            </a>
                            <a href="mailto:anushas.designer@gmail.com">
                                <div className="fab social pr-3 fas float-right"><FaEnvelope/></div>
                            </a>
                        </div>
                    </div>
                </div>


                <ul className="nav container-fluid justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio" >Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
        </div>
    )
  }
}

export default Navbar;
