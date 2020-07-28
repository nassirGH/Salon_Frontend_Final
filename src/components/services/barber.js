import React, { Component } from "react";
import Banner from "../banner";
import BannerBg from '../../static/images/BARBER.jpg';

const priceList = [
    {
        name: 'Beard trim',
        price: '$10'
    },
    {
        name: 'Beard trim & lineup',
        price: '$15'
    },
    {
        name: 'Line up',
        price: '$10'
    },
    {
        name: 'Cut',
        price: '$30'
    },
    {
        name: 'Buzz cut',
        price: '$20'
    },
    {
        name: 'Boys cut',
        price: '$18'
    },
    {
        name: 'Senior cut',
        price: '$16'
    },
    {
        name: 'Student cut',
        price: '$18'
    },
    {
        name: 'Hot towel beard trim',
        price: '$25'
    },
    {
        name: 'Hot towel shave',
        price: '$35'
    },
    {
        name: 'Shampoo',
        price: '$5'
    },
];

class Barber extends Component {

    render() {
        return (
            <div>
                <Banner imageUrl={BannerBg} />
                <main>
                    <div className="container">
                        <div className="parsys main-content-area">
                            <div className="title-component section">
                                <h1>
                                    Barber
                                </h1>
                            </div>
                            <div className="col-md-offset-4 richtext full-width-text section text-center">
                                <div className="row">
                                    <div className="col-md-5 col-xs-12 text text-left">
                                            <table className="table">
                                                <tbody>
                                                    {
                                                        priceList.map(item => (
                                                            <tr key={item.name}>
                                                                <td>
                                                                    <h3>{item.name}</h3>
                                                                </td>
                                                                <td>
                                                                    <span>{item.price}</span>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                </div>
                                <br />
                                <p className="text-left">Feel free for a free consultation call - <a href="tel:03 803 449">03 803 449</a></p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Barber;