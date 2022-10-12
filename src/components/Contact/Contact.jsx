import React from 'react';
import "./contact.css";
import Back from '../common/back/Back';

const Contact = () => {
    // const map = '"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26762.566161346895!2d15.37279501480379!3d-4.358639824565744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scd!4v1665589930935!5m2!1sen!2scd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.616760735209!2d15.332456846760318!3d-4.3230121749230905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a36a0fb114e7f%3A0x8eb9e2f35ce7ab16!2sInstitut%20Sup%C3%A9rieur%20des%20Techniques%20Appliqu%C3%A9es%20(I.S.T.A.)!5e0!3m2!1sen!2scd!4v1665591422761!5m2!1sen!2scd';
    return (
        <div>
            <Back title='Contact Us' />
            <section className="contact padding">
                <div className="container shadow flexSB">
                    <div className="left row">
                        {/* <iframe src={map} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe src={map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="right now">
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        <div className="items grid2">
                            <div className="box">
                                <h4>ADDRESS: </h4>
                                <p>198 west 21st street, suite 751 New York NY 10016</p>
                            </div>
                            <div className="box">
                                <h4>Email: </h4>
                                <p>info@gmail.com</p>
                            </div>
                            <div className="box">
                                <h4>PHONE: </h4>
                                <p>+123 456 7898</p>
                            </div>
                        </div>

                        <form action="">
                            <div className="flexSB">
                                <input type="text" name="name" id="" placeholder='Name' />
                                <input type="email" name="email" id="" placeholder='Email' />
                            </div>
                            <input type="text" name="subject" id="" placeholder='Subject' />
                            <textarea name="message" id="" cols="30" rows="10">
                                Create a message here...
                            </textarea>
                            <button className="primary-btn">SEND MESSAGE</button>
                        </form>

                        <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;