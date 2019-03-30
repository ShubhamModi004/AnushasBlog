import React, { Component } from 'react'
import './Loader.css';

class Loader extends Component {
    render() {
        return (
                <div className="loaderOuter">
                <div className="loader">
                    <div className="largeBox"></div>
                    <div className="smallBox"></div>
                </div>
            </div>
        )
    }
}

export default Loader;
