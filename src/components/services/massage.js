import React, { Component } from "react";
import Banner from "../banner";
import BannerBg from "../../static/images/MASSAGE.jpg";
import profile5 from "../../static/images/profile5.jpg";

const priceList = [
  {
    name: "Deep tissue, therapeutic, Swedish relaxation",
    types: [
      {
        price: "$70",
        time: "45 min"
      },
      {
        price: "$90",
        time: "1 hour"
      },
      {
        price: "$115",
        time: "75 min"
      },
      {
        price: "$125",
        time: "90 min"
      }
    ]
  },
  {
    name: "Hot Stone",
    types: [
      {
        price: "$120",
        time: "1 hour"
      },
      {
        price: "$140",
        time: "90 min"
      }
    ]
  },
  {
    name: "Pregnancy",
    types: [
      {
        price: "$80",
        time: "45 min"
      },
      {
        price: "$100",
        time: "1 hour"
      }
    ]
  }
];
class Massage extends Component {
  render() {
    return (
      <div>
        <Banner imageUrl={BannerBg} />
        <main>
          <div className="container">
            <div className="parsys main-content-area">
              <div className="title-component section">
                <h1>Massage</h1>
                <img
                  title="M & M SALON & SPA "
                  alt="null"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "100px",              
                  }}
                  src={profile5}
                />
              </div>
              <div className="col-md-offset-2 richtext full-width-text section text-center">
                <div className="row">
                  <div className="col-md-10 col-xs-12 text text-left">
                    <table className="table">
                      <tbody>
                        {priceList.map(item => (
                          <React.Fragment>
                            <tr key={item.name}>
                              <td rowSpan={item.types.length + 1}>
                                <h3>{item.name}</h3>
                              </td>
                            </tr>
                            {item.types.map(type => (
                              <tr key={item.time}>
                                <td>{type.time}</td>
                                <td>{type.price}</td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <br />
                <p className="text-left">
                  For a free consultation call -{" "}
                  <a href="tel: 03 803 449  "> 03 803 449 </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Massage;
