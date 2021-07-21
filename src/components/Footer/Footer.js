import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png'
import FooterTop from './FooterTop/FooterTop';

const Footer = () => {
    return (
        <div>
        <div className="footer">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-about">
                            <img src={logo} alt="" />
                            <p className="pt-3">Trusted and reliable service is our to main goal extremely painful. again a there anyone loves our chooses</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="quick-link">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>About us</li>
                                <li>Our Services</li>
                                <li>Our Mechanics</li>
                                <li>Blog Posts</li>
                                <li>Login/Register</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                         <div className="information">
                            <h4>Information</h4>
                            <ul>
                                <li>Terms </li>
                                <li>Conditions</li>
                                <li>Return Policy</li>
                                <li>Payment</li>
                                <li>Emergency Call</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="subs">
                            <h4>Subscribe</h4>
                            <form action="">
                                <input type="text" className="form-control" placeholder="Enter Email"/>
                                <button className="btn btn-light mt-2">Send</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <FooterTop/>

        </div>
    );
};

export default Footer;