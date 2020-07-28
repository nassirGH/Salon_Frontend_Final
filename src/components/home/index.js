import React, {Component } from "react";


class Home extends Component {
    render () {
        return (
            <div>
                <video id="home-video" autoPlay muted loop width="100%" height="547">
                    <source src="home.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
          <main>
            <div className="container">
                <div className="parsys main-content-area">
                    <div className="title-component section">
                        <h1>
                            <i>M</i><b> & <i>M</i> Style</b>
                            <span>Salon &amp; Spa</span>
                        </h1>
                    </div>
                    <div className="col-md-offset-2 richtext full-width-text section">
                        <div className="text text-left">
                            <p>M & M Hair Salon, that offers exceptional spa and salon services in a luxurious and relaxing environment that is second to none! 
                                Our master stylists and senior estheticians have extensive knowledge in their fields with many years of experience,  are Keune coloring line-certified and members of the Unite Professional Salon System. Our services include cuts, colors , waxing, manicures, pedicures, laser hair removal, and much more. 
                            </p>
                           
                        </div>
                    </div>
                </div>
                <br/>
                <div className="parsys main-content-area">
                    <div className="title-component section">
                        <h1>
                            Hours
                        </h1>
                    </div>
                    <div className="richtext full-width-text section">
                        <div className="text">
                            <p style={{"textAlign": "center"}}>
                                <b>&nbsp;10:00 am - 7:00 pm&nbsp;</b>
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

export default Home;