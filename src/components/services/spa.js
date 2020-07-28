import React, { Component } from "react";
import Banner from "../banner";
import BannerBg from '../../static/images/Banner_Spa.jpg';

class Services extends Component {

    render() {
        return (
            <div>
                <Banner imageUrl={BannerBg} style={{"width": "100%"}} />
                <main>
                    <div className="container">
                        <div className="parsys main-content-area">
                            <div className="title-component section">
                                <h1>
                                    The Spa
                                </h1>
                            </div>
                            <div className="richtext full-width-text section">
                                <div className="text text-left">
                                    <p>
                                    M & M  Salon & Spa offers a wide variety of spa services including Novalash
                                    eyelash extensions, Manicures, Pedicures, facials, Massage, Waxing and more.
                                    Our aestheticians are highly trained and offer years of experience with your
                                    satisfaction our top priority.
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

export default Services;