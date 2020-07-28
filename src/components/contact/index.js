import React, {Component} from "react"
import Banner from '../banner';

import BannerBg from '../../static/images/Bermuda-spa-banner-new.jpg';
class Contact extends Component {
    render() {
        return (
            <div>
            <Banner imageUrl={BannerBg} style={{"width": "100%"}} />
            <main>
            <div className="container">
                <div className="parsys main-content-area">
                    <div className="title-component section">
                        <h1>
                            Contact Us
                        </h1>
                    </div>
                    <div className="two-col-layout section">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="parsys parl">
                                    <div className="richtext full-width-text section">
                                        <div className="text">
                                            <h2>M & M Style Salon & Spa
                                                <br/>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="richtext full-width-text section">
                                        <div className="text">
                                            <p style={{"fontFamily": "tahoma, arial, helvetica, sans-serif", "fontSize": "12px"}}>
                                                <br/>   Beirut , Lebanon
                                                <br/> Tel:&nbsp; 03 803 449
                                                <br/> Email:
                                                <a href="mailto:example@gmail.com"> example@gmail.com </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="richtext full-width-text section">
                                        <div className="text">
                                            <h2>Working Hours&nbsp;</h2>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="richtext full-width-text section">
                                        <div className="text">
                                            <p>&nbsp;10 am - 7 pm</p>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="parsys parr">
                                    <div className="locationmap section">
                                        <div className="locationmap">
                                        <iframe title="Best Salon and SPA Treatments Edmonton"
                                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.1524363406279!2d35.63108182912969!3d33.77074911361093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ2JzE0LjciTiAzNcKwMzcnNTMuOSJF!5e0!3m2!1sen!2slb!4v1583227643149!5m2!1sen!2slb" width="100%" height="250" allowFullScreen="" frameBorder="0" style={{"border": "1px solid lightgray"}}></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="endtab end"></div>
                    </div>
                </div>
            </div>
        </main>
        </div>
        );
    }
}

export default Contact;