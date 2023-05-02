import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Logo from '../assets/images/logo.svg'
import Local from '../assets/images/icon-location.svg'
import Phone from '../assets/images/icon-phone.svg'
import Email from '../assets/images/icon-email.svg'

const Footer = () => {
    return (
        <>
            <footer className="fylo-footer mobile-footer">
                <div className="fylo-logo">
                    <img src={Logo} alt="Fylo logo" className='logo' />
                </div>
                <div className="contact">
                    <div className="data">
                        <img src={Local} alt="location" />
                        <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="data">
                        <img src={Phone} alt="phone number" />
                        <p className="info">+1-543-123-4567</p>
                    </div>
                    <div className="data">
                        <img src={Email} alt="email address" />
                        <p className="info">example@fylo.com</p>
                    </div>
                </div>

                <div className="links">
                    <ul className="footer-links">
                        <li className="footer-link">About Us</li>
                        <li className="footer-link">Jobs</li>
                        <li className="footer-link">Press</li>
                        <li className="footer-link">Blog</li>
                        <li className="footer-link break-space">Contact Us</li>
                        <li className="footer-link">Terms</li>
                        <li className="footer-link">Privacy</li>
                    </ul>
                </div>

                <div className="social-media">
                    <FontAwesomeIcon className="media" icon={faFacebook}></FontAwesomeIcon>
                    <FontAwesomeIcon className="media" icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon className="media" icon={faInstagram}></FontAwesomeIcon>
                </div>
            </footer>

            <footer className="fylo-footer desktop-footer">
                <div className="fylo-logo">
                    <img src={Logo} alt="Fylo logo" className='logo' />
                </div>
                <div className="contact">
                    <div className="data">
                        <img src={Local} alt="location" />
                        <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="contact-data">
                        <div className="data">
                            <img src={Phone} alt="phone number" />
                            <p className="info">+1-543-123-4567</p>
                        </div>
                        <div className="data">
                            <img src={Email} alt="email address" />
                            <p className="info">example@fylo.com</p>
                        </div>
                    </div>
                </div>

                <div className="links">
                    <ul className="footer-links">
                        <div className="col-1">
                            <li className="footer-link">About Us</li>
                            <li className="footer-link">Jobs</li>
                            <li className="footer-link">Press</li>
                            <li className="footer-link">Blog</li>
                        </div>
                        <div className="col-2">
                            <li className="footer-link">Contact Us</li>
                            <li className="footer-link">Terms</li>
                            <li className="footer-link">Privacy</li>
                        </div>
                    </ul>
                </div>

                <div className="social-media">
                    <FontAwesomeIcon className="media" icon={faFacebook}></FontAwesomeIcon>
                    <FontAwesomeIcon className="media" icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon className="media" icon={faInstagram}></FontAwesomeIcon>
                </div>
            </footer>
        </>
    )
}

export default Footer