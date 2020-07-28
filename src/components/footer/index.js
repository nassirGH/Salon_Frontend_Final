import React, { Component } from "react"
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <div className="parsys footer-wrap iparsys">
            <div className="section">
                <div className="new"></div>
            </div>
            <div className="iparys_inherited">
                <div className="parsys footer-wrap iparsys">
                    <div className="footer-wrapper section">
                        <footer>
                            <div className="container">
                                <div className="footer_local footerlinks">
                                    <div className="local-footer-component">
                                        <div className="hidden-sm hidden-md hidden-lg">
                                            <div className="sociallinks social-links">
                                                <ul className="social">
                                                    
                                                </ul>
                                            </div>
                                            <div className="address">
                                                <div className="address text-uppercase">
                                                    <p>
                                                    <Link to="/">Majeed Style Salon & SPA </Link>
                                                    </p>
                                                    <p>Btater, Lebanon</p>
                                                    <p>
                                                        &nbsp;&nbsp; <a href="tel:03 803 449">03 803 449</a> &nbsp;&nbsp; | &nbsp;&nbsp;
                                                        <Link to="/contact">Contact Us</Link> &nbsp;&nbsp;
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden-xs hidden-md hidden-lg">
                                            <div className="property-name">
                                                <p>
                                                <Link to="/">M & M SALON & SPA</Link>
                                                </p>
                                            </div>
                                            <div className="sociallinks social-links">
                                                <ul className="social">
                                                    
                                                </ul>
                                            </div>
                                            <div className="address">
                                                <p>
                                                    Beirut, Lebanon &nbsp;&nbsp; | &nbsp;&nbsp;  <a href="tel:03 803 449">03 803 449</a>
                                                    &nbsp;&nbsp;
                                                    <Link to="/contact">Contact Us</Link> &nbsp;&nbsp;
                                                </p>
                                            </div>
                                        </div>
                                        <div className="hidden-xs hidden-sm">
                                            <div className="address" style={{"verticalAlign": "text-top"}}>
                                                <div className="address text-uppercase">
                                                    <p>
                                                        <Link to="/">M & M SALON & SPA</Link> &nbsp;&nbsp; | &nbsp;&nbsp; Beirut, Lebanon &nbsp;&nbsp; | &nbsp;&nbsp;  <a href="tel:03 803 449">03 803 449</a>
                                                        &nbsp;&nbsp; | &nbsp;&nbsp;
                                                        <Link to="/contact">Contact Us</Link> &nbsp;&nbsp;
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sociallinks social-links">
                                                <ul className="social">
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="global-footer-component">
                                    <div className="richtext full-width-text">
                                        <div className="text">
                                            
                                            <p>
                                                <a>&nbsp; &nbsp;<h4>© 2020 M & M SALON & SPA
                                                    </h4> </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Footer;