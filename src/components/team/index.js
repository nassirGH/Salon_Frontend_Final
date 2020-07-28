import React, { Component } from "react";
import Slider from "../slider";
import profile1 from "../../static/images/profile1.jpg";
import profile2 from "../../static/images/profile2.JPG";
import profile3 from "../../static/images/profile3.jpg";
import profile4 from "../../static/images/profile4.jpeg";
import profile5 from "../../static/images/profile5.jpg";


class Team extends Component {
    state = {
        selectedIndex: 0
    }
    
    render() {
        return (
            <div>
                 <Slider itemPerSlide="1">
                    <div className="image-slider-item">
                        <div>
                            <h3>Tessa</h3>
                            <img
                              title="M & M SALON & SPA "
                              alt="null"
                              style={{ width: "150px",height: "150px", borderRadius: "100px" }}
                              src={profile1}
                            />
                            <p>
                                Tessa is a manager and master hairstylist. With over 13 years of experience as a licensed hairstylist, and many more years prior working alongside her mom who is also a stylist, Tessa has extensive knowledge and passion for her trade.
                            </p>
                            <p>
                                She is an expert with colour and especially loves working with blonde. T
                                essa is always keeping up with new trends and is constantly challenging her skill.
                            </p>
                            <p>
                            A long-time client had this to say aboutTessa: 
                            <br/>
                                “Tessa always goes above and beyond to provide an all around great experience. From her pleasant personality and conversation, right down to the attention to detail with styling my hair after refreshing it with a seamless colour job. Tessa is the best at what she does, I highly recommend her services”.
                            </p>
                        </div>
                    </div>
                    <div className="image-slider-item">
                        <div>
                            <h3>Ashley</h3>
                            <img
                              title="M & M SALON & SPA "
                              alt="null"
                              style={{ width: "150px",height: "150px", borderRadius: "100px" }}
                              src={profile2}
                            />
                            <p>Ashley is one of the managers here at M & M Salon & Spa, as well as our own lash extension expert.</p>
                            <p>She prides herself in close attention to detail and is a self professed perfectionist. <br/>"To me it is very important to consult with each client, answer their questions and ask questions myself, ensuring their expectations are met and exceeded.
                                I always allow enough time for an appointment to make sure the experience is relaxing and that the client leaves completely satisfied with the results. 
                                Education is also very important to me and Iam always looking for ways to expand my knowledge of all aspects of the industry."
                            </p>
                            <p>Ashley has over 5 years of experience with eyelash extensions and many more years in the esthetics and beauty industry. She is also trained in skincare, facials and chemical peels, which was the starting point of her education. 
                                In addition Ashley is trained with tape-in hair extensions, manicures, pedicures, waxing and more. <br/>
                            "I love building relationships with my clients, and look forward to hearing whats new and exciting with each and every one of them."</p>
                        </div>
                    </div>
                    <div className="image-slider-item">
                        <div>
                            <h3>Imad</h3>
                            <img
                              title="M & M SALON & SPA "
                              alt="null"
                              style={{ width: "150px",height: "150px", borderRadius: "100px" }}
                              src={profile3}
                            />
                            <p>
                            Imad is another senior hairstylist at M & M Salon & Spa. 
                            He has been in the industry for over 12 years and has been trained with LÓreal professional and now with the Keune line we feature here at M & M salon.
                            </p>
                            <p>
                                Hair is Imad's passion and he loves to advance his skills with regular educational classes. 
                                He has a great level of professionalism and a warm and friendly personality, creating an all around great experiencer his clients.
                            </p>
                        </div>
                    </div>
                    <div className="image-slider-item">
                        <div>
                            <h3>Fadi</h3>
                            <img
                              title="M & M SALON & SPA "
                              alt="null"
                              style={{ width: "150px",height: "150px", borderRadius: "100px" }}
                              src={profile4}
                            />
                            <p>
                            Fadi attended school at the Alberta Academy of Aesthetics and graduated about a year ago.
                            </p>
                            <p>
                            This is what Fadi had to say about his passion:
                            <br/>
                            "I love my job because there is nothing better than making people feel good about themselves, with everything from pampering them with a manicure or pedicure to providing a relaxing massage. I love meeting new people and hearing everyoneʼs stories. I truly enjoy getting to know my clients and making their spa experience one to remember”.
                            </p>
                        </div>
                    </div>
                    <div className="image-slider-item">
                        <div>
                            <h3>Lama</h3>
                            <img
                              title="M & M SALON & SPA "
                              alt="null"
                              style={{ width: "150px",height: "150px", borderRadius: "100px" }}
                              src={profile5}
                            />
                            <p>
                            Lama graduated as an aesthetician from MC college about a year ago and it has been a pleasure to have her on our team since then! She is hard working, skilled, attentive and genuinely cares about providing a high quality experience for each and every client.
                            </p>
                            <p> 
                                Lama is a Fibroblast Plasma Skin Tightening Technician with a Medical background. 
                                Termed “Soft Surgery”, Fibroblast is the only cosmetic treatment to use plasma to reduce excess skin. 
                                It has been performed all over Europe for years and is now becoming popular in North America. 
                                Fibroblast is known for its success with Non- Surgical Eyelifts, Tummy Tightening, Neck Tightening and so much more. 
                                It is a non-invasive skin rejuvenation treatment that is affordable, uses no scalpel, stitches, bandages and has a minimal downtime. 
                                The results last as long as any invasive surgical procedure would. Contacts us today for a free consultation.
                            </p>
                        </div>
                    </div>   
                </Slider>
            </div>
        );
    }
}

export default Team;