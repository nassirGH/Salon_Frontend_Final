import React, { Component } from "react";
import Banner from "../banner";

import BannerBg from '../../static/images/career.jpg';
class Hiring extends Component {

    render() {
        return (
            <div>
                <Banner imageUrl={BannerBg} />
                <main>
                    <div className="container">
                        <div className="parsys main-content-area">
                            <div className="title-component section">
                                <h1>
                                    We Are Hiring
                                </h1>
                            </div>
                            <div className="col-md-offset-2 richtext full-width-text section">
                                <div className="text text-left">
                                    <p>1. Nail Tech Estheticians</p>
                                    <p>2. Hairsylists</p>
                                    <br/>
                                    <p>
                                        Thairpy Salon & Spa is now hiring. We are looking to expand our staff to better accommodate our clients. We are a brand new salon, newly renovated and geared towards educating our staff and clients. 
                                    </p>
                                    <p>
                                    We are looking for staff who have a great work ethic, works hard and is looking to build their clientele. 
                                    </p>
                                    <p>
                                    Please call us at <a href="tel:+1 780-484-3555"> +1 780-484-3555</a> or email us @ <a href="mailto:thairpysalonspa@gmail.com"> thairpysalonspa@gmail.com </a> to forward resume.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Hiring;