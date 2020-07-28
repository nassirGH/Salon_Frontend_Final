import React, { Component } from "react"
import { Link } from 'react-router-dom';

class Banner extends Component {
    render () {
        const { imageUrl, ...other} = this.props;
        return (
            <div className="parsys iparsys sub-content-area">
            <div className="mastheadoverlay section">
                <div id="masthead-component">
                    <div className="flexslider flexslider--caption" data-slide-speed="5">
                        <ul className="slides">
                            <li>
                                <a href="#">
                                    {
                                        this.props.videoUrl ? 
                                        <iframe title="thairapy salon and spa" width="100%" height="547" src={this.props.videoUrl} frameBorder="0" allow="autoplay" allowFullScreen="true"></iframe> :
                                        <img style={{"height":"50%px"}} src={imageUrl} alt="Thairpy Salon & Spa" {...other} />
                                    }
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="new"></div>
            </div>
            <div className="iparys_inherited">
                <div className="parsys iparsys sub-content-area">
                </div>
            </div>
        </div>
        )
    }
}

export default Banner;