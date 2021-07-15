import React from 'react';
import { FiFastForward, FiTag, FiUsers, FiCreditCard, FiTwitter, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaPinterest } from 'react-icons/fa';
import  cards_alt from '../../assests/img/cards-alt.png';
import logoWhite from '../../assests/logoWhite.png';

const Footer = () => {
    return (
        <footer>
            <div className="pt-5 bg-darker">
            <div className="container">
                <div className="row pb-3">
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="d-flex">
                        <FiFastForward className="text-primary" style={{fontSize: '2.25rem'}} />
                        <div className="ps-3">
                            <h6 className="fs-base text-light mb-1">Fast and affordable delivery</h6>
                            <p className="mb-0 fs-ms text-light opacity-50">We deliver all orders within 2 hours</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="d-flex">
                        <FiTag className="text-primary" style={{fontSize: '2.25rem'}} />
                    <div className="ps-3">
                        <h6 className="fs-base text-light mb-1">Money back guarantee</h6>
                        <p className="mb-0 fs-ms text-light opacity-50">We return money within 30 days</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="d-flex">
                        <FiUsers className="text-primary" style={{fontSize: '2.25rem'}}/>
                    <div className="ps-3">
                        <h6 className="fs-base text-light mb-1">24/7 customer support</h6>
                        <p className="mb-0 fs-ms text-light opacity-50">Friendly 24/7 customer support</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="d-flex">
                        <FiCreditCard className="text-primary" style={{fontSize: '2.25rem'}} />
                    <div className="ps-3">
                        <h6 className="fs-base text-light mb-1">Secure online payment</h6>
                        <p className="mb-0 fs-ms text-light opacity-50">We possess SSL / Secure сertificate</p>
                    </div>
                    </div>
                </div>
                </div>
                <hr className="hr-light mb-5" />
                <div className="row pb-2">
                <div className="col-md-6 text-center text-md-start mb-4">
                    <div className="text-nowrap mb-4">
                        <Link className="d-inline-block align-middle mt-n1 me-3" to="#">
                            <img className="d-block" src={logoWhite} width={117} alt="Cartzilla" />
                        </Link>
                    </div>
                    <div className="widget widget-links widget-light">
                    <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                        <li className="widget-list-item me-4"><Link className="widget-list-link" to="#">Shop</Link></li>
                        <li className="widget-list-item me-4"><Link className="widget-list-link" to="#">About Us</Link></li>
                        <li className="widget-list-item me-4"><Link className="widget-list-link" to="#">Offers</Link></li>
                        <li className="widget-list-item me-4"><Link className="widget-list-link" to="#">Blog</Link></li>
                        <li className="widget-list-item me-4"><Link className="widget-list-link" to="#">Contact Us</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-6 text-center text-md-end mb-4">
                    <div className="mb-3">
                        <Link className="btn-social bs-light bs-twitter ms-2 mb-2" to="#">
                            <FiTwitter className="social-icon" /></Link>
                        <Link className="btn-social bs-light bs-facebook ms-2 mb-2" to="#">
                            <FiFacebook className="social-icon" /></Link>
                        <Link className="btn-social bs-light bs-instagram ms-2 mb-2" to="#">
                            <FiInstagram className="social-icon" /></Link>
                        <Link className="btn-social bs-light bs-pinterest ms-2 mb-2" to="#">
                            <FaPinterest className="social-icon" /></Link>
                        <Link className="btn-social bs-light bs-youtube ms-2 mb-2" to="#">
                            <FiYoutube className="social-icon" /></Link>
                    </div>
                    <img className="d-inline-block" src={cards_alt} width={187} alt="Payment methods" />
                </div>
                </div>
                <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved. Made by <Link className="text-light" to="index" target="_blank" rel="noopener">Timmytech Solutions</Link></div>
            </div>
            </div>

        </footer>
    )
}

export default Footer
