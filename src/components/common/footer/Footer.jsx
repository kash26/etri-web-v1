import React from 'react';
import { blog } from '../../../dummydata';
import "./footer.css";

const Footer = () => {
    return (
        <>
            <section className="newsletter">
                <div className="container flexSB">
                    <div className="left row">
                        <h1>Newsletter - Stay tune and get the latest update</h1>
                        <span>far far away, behind the word mountains</span>
                    </div>
                    <div className="right row">
                        <input type="text" name="newsletter" id="newsletter" placeholder='Enter email address here...' />
                        <i className="fa fa-paper-plane"></i>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>ACADEMIA</h1>
                        <span>online education & learning</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam sed a, ipsa pariatur eos quos praesentium aliquam tempora quas perferendis sint minus nisi ex animi asperiores, maiores, quaerat autem! Esse nihil totam, debitis amet saepe aperiam sequi nesciunt omnis ipsa enim deserunt ab repellat, quisquam ullam asperiores fuga minus!</p>
                        <i className="fab fa-facebook-f icon"></i>
                        <i className="fab fa-instagram icon"></i>
                        <i className="fab fa-twitter icon"></i>
                        <i className="fab fa-youtube icon"></i>
                    </div>
                    <div className="box link">
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                        </ul>
                        <ul>
                            <li>About Us</li>
                        </ul>
                        <ul>
                            <li>About Us</li>
                        </ul>
                        <ul>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className="box link">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>About Us</li>
                        </ul>
                        <ul>
                            <li>About Us</li>
                        </ul>
                        <ul>
                            <li>About Us</li>
                        </ul>
                        <ul>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Recent Post</h3>
                        {
                            blog.slice(0, 3).map((val) => (
                                <div className="items flexSB">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <span>
                                            <i className="fa fa-user"></i>
                                            <label htmlFor="">{val.type}</label>
                                        </span>
                                        <span>
                                            <i className="fa fa-calendar-alt"></i>
                                            <label htmlFor="">{val.date}</label>
                                        </span>
                                        <h4>{val.title}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="box last">
                        <h3>Have Questions ?</h3>
                        <ul>
                            <li>
                                <i className="fa fa-map"></i>
                                203 Fake ST. Mount View, San francisco California, USA
                            </li>
                            <li>
                                <i className="fa fa-phone-alt"></i>
                                +123 456 7897
                            </li>
                            <li>
                                <i className="fa fa-paper-plane"></i>
                                example@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="legal">
                <p>Copyright @2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by <a href="https://isaackashiya.netlify.app/">Isaac Kashiya</a></p>
            </div>
        </>
    );
};

export default Footer;