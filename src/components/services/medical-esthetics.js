import React, { Component } from "react";
import Banner from "../banner";
const priceList = [{"name":"Crows Feet","price":"$299 - $399","treatments":"2 - 3 Treatments"},{"name":"Eye Lids","price":"$299 - $399","treatments":"2 - 3 Treatments"},{"name":"Lower Eye","price":"$299 - $399","treatments":"2 - 3 Treatments"},{"name":"Full Eye","price":"$899","treatments":"2 - 3 Treatments"},{"name":"Upper Lip","price":"$299 - $399","treatments":"2 - 3 Treatments"},{"name":"Lower Lip","price":"$299 - $399","treatments":"2 - 3 Treatments"},{"name":"Lip Flip","price":"$299","treatments":"2 - 3 Treatments"},{"name":"Neck Lift","price":"$799","treatments":"2 - 3 Treatments"},{"name":"Forehead Lines","price":"$299 and up","treatments":"2 - 3 Treatments"},{"name":"Nasal Lines","price":"$299 - $399","treatments":"2 - 3 Treatments"},{"name":"Mole/Skin Tags","price":"$29 - $79","treatments":"1 Treatment"},{"name":"Tummy Lift","price":"$899 and up","treatments":"2 - 3 Treatments"},{"name":"Full Face","price":"$1999","treatments":"2 - 3 Treatments"},{"name":"Stretch Marks","price":"Starting at $499","treatments":"2 - 3 Treatments"},{"name":"Jawline","price":"$699","treatments":"2 - 3 Treatments"},{"name":"Acne Scarring","price":"$699 and up","treatments":"2 - 3 Treatments"},{"name":"Tatto Removal","price":"$149 and up","treatments":"Depending on size of removal"},{"name":"Age/Sun Spot","price":"$29 - $79","treatments":"2 - 3 Treatments"},{"name":"Belly Button List","price":"$499","treatments":"2 - 3 Treatments"}];
class MedicalEsthetics extends Component {

    render() {
        return (
            <div>
                <Banner imageUrl="https://res.cloudinary.com/vierbit/image/upload/b_auto,f_auto,c_pad,h_585,w_1685,q_80/v1544888084/MEDICAL.jpg" />
                <main>
                    <div className="container">
                        <div className="parsys main-content-area">
                            <div className="title-component section">
                                <h1>
                                    Medical Esthetics
                                </h1>
                            </div>
                            <div className="col-md-offset-3 richtext full-width-text section text-center">
                                <div className="row">
                                    <div className="col-md-10 col-xs-12 text text-left">
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
                                                            <td>
                                                                <span>{item.treatments}</span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <br />
                                <p className="text-left">For a free consultation call - <a href="tel:+1 780-710-8730">+1 780-710-8730</a></p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default MedicalEsthetics;