import React, { Component } from "react";
import Banner from "../banner";
import BannerBg from "../../static/images/slide2.jpg";


class Services extends Component {
  render() {
    return (
      <div>
        <Banner imageUrl={BannerBg} style={{ width: "100%" }} />
        <main>
          <div className="container">
            <div className="parsys main-content-area">
              <div className="title-component section">
                <h1>The Salon</h1>
              </div>
              <div className="richtext full-width-text section">
                <div className="text text-left">
                  <p>
                    M & M Salon & Spa is proud to be home to a team of highly
                    skilled, passionate and on trend stylists.
                  </p>
                  <p>
                    We offer a full range of salon services, in a friendly
                    upscale atmosphere.
                  </p>
                  <p>
                    All of our stylists are constantly advancing their skills
                    and techniques with regular educational training.
                  </p>
                  <p>
                    At M & M we only work with the best, which is why Keune hair
                    products are our exclusive choice for use by both our
                    professionals and for you to enjoy at home.
                  </p>
                </div>

                <br />
                <br />
                <div className="text text-left">
                <p>
                    M & M Salon & Spa is proud to be home to a team of highly
                    skilled, passionate and on trend stylists.
                  </p>
                  <p>
                    We offer a full range of salon services, in a friendly
                    upscale atmosphere.
                  </p>
                  <p>
                    All of our stylists are constantly advancing their skills
                    and techniques with regular educational training.
                  </p>
                  <p>
                    At M & M we only work with the best, which is why Keune hair
                    products are our exclusive choice for use by both our
                    professionals and for you to enjoy at home.
                </p>                           
                </div>

                <br />
                <br />
                <div className="text text-left">
                  <p>
                    M & M Salon & Spa is proud to be home to a team of highly
                    skilled, passionate and on trend stylists.
                  </p>
                  <p>
                    We offer a full range of salon services, in a friendly
                    upscale atmosphere.
                  </p>
                  <p>
                    All of our stylists are constantly advancing their skills
                    and techniques with regular educational training.
                  </p>
                  <p>
                    At M & M we only work with the best, which is why Keune hair
                    products are our exclusive choice for use by both our
                    professionals and for you to enjoy at home.
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
