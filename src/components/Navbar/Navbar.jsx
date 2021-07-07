import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Badge, AppBar, Typography } from '@material-ui/core';
import { ShoppingCartRounded } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Toolbar from './Toolbar/Toolbar';

import logo from '../../assests/LogoDark.png';
import useStyles from './styles';

const PrimarySearchBar = ({ totalItems }) => {
    const [mobileMoreAnchorE1, setMobileMoreAnchorE1] = useState(null)
    const location = useLocation();
    const classes = useStyles();
    const isMobileMenuOpen = Boolean(mobileMoreAnchorE1)
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const handleMobileMenuClose = () => setMobileMoreAnchorE1(null)


    const renderMobileMenu = (
        <Menu
            id={mobileMenuId}
            anchorEl={mobileMoreAnchorE1}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCartRounded />
                        </Badge>
                    </IconButton>
                    <p>Cart</p>
                </MenuItem>
        </Menu>
    );
    
    return (
         <header className="shadow-sm">
        <Toolbar />
  {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
  <div className="navbar-sticky bg-light">
    <div className="navbar navbar-expand-lg navbar-light">
      <div className="container">
          <Link className="navbar-brand d-none d-sm-block me-3 flex-shrink-0" to="/">
              <img src={logo} width={142} alt="TeamVilla" />
        </Link>
        <Link className="navbar-brand d-sm-none me-2" to="/">
            <img src={logo} width={74} alt="TeamVilla" />
        </Link>
        {/* Search*/}
        <div className="input-group d-none d-lg-flex flex-nowrap mx-4">
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3" />
          <input className="form-control rounded-start w-100" type="text" placeholder="Search for products" />
          <select className="form-select flex-shrink-0" style={{width: '10.5rem'}}>
            <option>All categories</option>
            <option>Cameras</option>
            <option>Computers</option>
            <option>Data Storage</option>
            <option>Headphones</option>
            <option>Home Music</option>
            <option>Printers</option>
            <option>Smartphones</option>
            <option>TV, Video, Audio</option>
            <option>Video Games</option>
            <option>Wearables</option>
          </select>
        </div>
        {/* Toolbar*/}
        <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-tool navbar-stuck-toggler" href="#"><span className="navbar-tool-tooltip">Toggle menu</span>
            <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-menu" /></div></a><a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
            <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user" /></div>
            <div className="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>
          <div className="navbar-tool dropdown ms-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="shop-cart.html"><span className="navbar-tool-label">4</span><i className="navbar-tool-icon ci-cart" /></a><a className="navbar-tool-text" href="shop-cart.html"><small>My Cart</small>$1,247.00</a>
            {/* Cart dropdown*/}
            <div className="dropdown-menu dropdown-menu-end">
              <div className="widget widget-cart px-3 pt-2 pb-3" style={{width: '20rem'}}>
                <div style={{height: '15rem'}} data-simplebar data-simplebar-auto-hide="false">
                  <div className="widget-cart-item pb-2 border-bottom">
                    <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                    <div className="d-flex align-items-center"><a className="d-block flex-shrink-0" href="shop-single-v2.html"><img src="img/shop/cart/widget/05.jpg" width={64} alt="Product" /></a>
                      <div className="ps-2">
                        <h6 className="widget-product-title"><a href="shop-single-v2.html">Bluetooth Headphones</a></h6>
                        <div className="widget-product-meta"><span className="text-accent me-2">$259.<small>00</small></span><span className="text-muted">x 1</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-cart-item py-2 border-bottom">
                    <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                    <div className="d-flex align-items-center"><a className="d-block flex-shrink-0" href="shop-single-v2.html"><img src="img/shop/cart/widget/06.jpg" width={64} alt="Product" /></a>
                      <div className="ps-2">
                        <h6 className="widget-product-title"><a href="shop-single-v2.html">Cloud Security Camera</a></h6>
                        <div className="widget-product-meta"><span className="text-accent me-2">$122.<small>00</small></span><span className="text-muted">x 1</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-cart-item py-2 border-bottom">
                    <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                    <div className="d-flex align-items-center"><a className="d-block flex-shrink-0" href="shop-single-v2.html"><img src="img/shop/cart/widget/07.jpg" width={64} alt="Product" /></a>
                      <div className="ps-2">
                        <h6 className="widget-product-title"><a href="shop-single-v2.html">Android Smartphone S10</a></h6>
                        <div className="widget-product-meta"><span className="text-accent me-2">$799.<small>00</small></span><span className="text-muted">x 1</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-cart-item py-2 border-bottom">
                    <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                    <div className="d-flex align-items-center"><a className="d-block flex-shrink-0" href="shop-single-v2.html"><img src="img/shop/cart/widget/08.jpg" width={64} alt="Product" /></a>
                      <div className="ps-2">
                        <h6 className="widget-product-title"><a href="shop-single-v2.html">Android Smart TV Box</a></h6>
                        <div className="widget-product-meta"><span className="text-accent me-2">$67.<small>00</small></span><span className="text-muted">x 1</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                  <div className="fs-sm me-2 py-2"><span className="text-muted">Subtotal:</span><span className="text-accent fs-base ms-1">$1,247.<small>00</small></span></div><a className="btn btn-outline-secondary btn-sm" href="shop-cart.html">Expand cart<i className="ci-arrow-right ms-1 me-n1" /></a>
                </div><a className="btn btn-primary btn-sm d-block w-100" href="checkout-details.html"><i className="ci-card me-2 fs-base align-middle" />Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/* Search*/}
          <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
            <input className="form-control rounded-start" type="text" placeholder="Search for products" />
          </div>
          {/* Departments menu*/}
          <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i className="ci-menu align-middle mt-n1 me-2" />Departments</a>
              <ul className="dropdown-menu">
                <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-laptop opacity-60 fs-lg mt-n1 me-2" />Computers &amp; Accessories</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                      <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Computers</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Laptops &amp; Tablets</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Desktop Computers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Computer External Components</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Computer Internal Components</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Networking Products (NAS)</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Single Board Computers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Desktop Barebones</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column py-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Accessories</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Monitors</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Bags, Cases &amp; Sleeves</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Batteries</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Charges &amp; Adapters</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cooling Pads</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Mounts</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Replacement Screens</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Security Locks</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Stands</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="img/shop/departments/07.jpg" alt="Computers & Accessories" /></a>
                        <div className="fs-sm mb-3">Starting from <span className="fw-medium">$149.<small>80</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-mobile opacity-60 fs-lg mt-n1 me-2" />Smartphones &amp; Tablets</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-md-nowrap px-2">
                      <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                        <div className="widget widget-links mb-3">
                          <h6 className="fs-base mb-3">Smartphones</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Apple iPhone</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Android Smartphones</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Phablets</a></li>
                          </ul>
                        </div>
                        <div className="widget widget-links">
                          <h6 className="fs-base">Tablets</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Apple iPad</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Android Tablets</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Tablets with Keyboard</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column py-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Accessories</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Accessory Kits</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Batteries &amp; Battery Packs</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cables</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Car Accessories</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Charges &amp; Power Adapters</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">FM Transmitters</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Lens Attachments</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Mounts &amp; Stands</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Repair Kits</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Replacement Parts</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Styluses</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="img/shop/departments/09.jpg" alt="Smartphones & Tablets" /></a>
                        <div className="fs-sm mb-3">Starting from <span className="fw-medium">$127.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-monitor opacity-60 fs-lg mt-n1 me-2" />TV, Video &amp; Audio</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-md-nowrap px-2">
                      <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Television &amp; Video</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">TV Sets</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Home Theater Systems</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">DVD Players &amp; Recorders</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Blue-ray Players &amp; Recorders</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">HD DVD Players &amp; Recorders</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">DVD-VCR Combos</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">DTV Converters</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">AV Receivers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">AV Amplifiers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Projectors</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Projection Screens</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Satelite Television</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-0 pb-4 py-sm-4 px-3">
                        <div className="widget widget-links">
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">TV-DTD Combos</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Sound Systems</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Home Cinema Systems</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Streaming Media Players</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">VCRs</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Video Glasses</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Lens Attachments</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="img/shop/departments/08.jpg" alt="TV, Video & Audio" /></a>
                        <div className="fs-sm mb-3">Starting from <span className="fw-medium">$78.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-camera opacity-60 fs-lg mt-n1 me-2" />Cameras, Photo &amp; Video</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-md-nowrap px-2">
                      <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Cameras &amp; Lenses</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Point &amp; Shoot Digital Cameras</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">DSLR Cameras</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Mirrorless Cameras</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Body Mounted Cameras</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Camcorders</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Camcorder Lenses</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Camera Lenses</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Macro &amp; Ringlight Flashes</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Shoe Mount Flashes</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Tripods &amp; Monopods</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Video Studio</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column py-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Accessories</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Bags &amp; Cases</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Binoculars &amp; Scopes</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Batteries &amp; Chargers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cables &amp; Cords</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Camcorder Accessories</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cleaning Equipment</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Protector Foils</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Filters &amp; Accessories</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Remote Controls</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Rain Covers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Viewfinders</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="img/shop/departments/10.jpg" alt="Cameras, Photo & Video" /></a>
                        <div className="fs-sm mb-3">Starting from <span className="fw-medium">$210.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-earphones opacity-60 fs-lg mt-n1 me-2" />Headphones</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-md-nowrap px-2">
                      <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Headphones</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Earbud Headphones</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Over-Ear Headphones</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">On-Ear Headphones</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Bluetooth Headphones</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Sports &amp; Fitness Headphones</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Noise-Cancelling Headphones</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column py-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Accessories</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cases &amp; Sleeves</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cables &amp; Cords</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Ear Pads</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Repair Kits</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cleaning Equipment</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="img/shop/departments/11.jpg" alt="Headphones" /></a>
                        <div className="fs-sm mb-3">Starting from <span className="fw-medium">$35.<small>99</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-watch opacity-60 fs-lg mt-n1 me-2" />Wearable Electronics</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-md-nowrap px-2">
                      <div className="mega-dropdown-column py-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Gadgets</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Smartwatches</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Fitness Trackers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Smart Glasses</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Rings</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Virtual Reality</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Clips, Arm &amp; Wristbands</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Accessories</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="img/shop/departments/12.jpg" alt="Wearable Electronics" /></a>
                        <div className="fs-sm mb-3">Starting from <span className="fw-medium">$79.<small>50</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-printer opacity-60 fs-lg mt-n1 me-2" />Printers &amp; Ink</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-md-nowrap px-2">
                      <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                        <div className="widget widget-links mb-3">
                          <h6 className="fs-base mb-3">By type</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">All-in-One</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Copying</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Faxing</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Photo Printing</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Printing Only</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Scanning</a></li>
                          </ul>
                        </div>
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Scanners</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Business Card Scanners</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Document Scanners</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Flatbed &amp; Photo Scanners</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Slide &amp; Negative Scanners</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column py-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base">Printers</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Dot Matrix Printers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Inkjet Printers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Label Printers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Laser Printers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Photo Printers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Wide Format Printers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Plotter Printers</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="img/shop/departments/13.jpg" alt="Printers & Ink" /></a>
                        <div className="fs-sm mb-3">Starting from <span className="fw-medium">$54.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-joystick opacity-60 fs-lg mt-n1 me-2" />Video Games</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-md-nowrap px-2">
                      <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Games &amp; Hardware</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Video Games</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">PlayStation 4</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">PlayStation 3</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Xbox One</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Xbox 360</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Nintendo Switch</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Wii U</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Wii</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">PC</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Mac</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Nintendo 3DS &amp; 2DS</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Nintendo DS</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-0 pb-4 py-sm-4 px-3">
                        <div className="widget widget-links">
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">PlayStation Vita</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Sony PSP</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Retro Gaming</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Microconsoles</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Accessories</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Digital Games</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="img/shop/departments/14.jpg" alt="Video Games" /></a>
                        <div className="fs-sm mb-3">Starting from <span className="fw-medium">$19.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-speaker opacity-60 fs-lg mt-n1 me-2" />Speakers &amp; Home Music</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-md-nowrap px-2">
                      <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Speakers</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Bluetooth Speakers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Bookshelf Speakers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Ceiling &amp; In-Wall Speakers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Center-Channel Speakers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Floorstanding Speakers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Outdoor Speakers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Satellite Speakers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Sound Bars</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Subwoofers</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Surround Sound Systems</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column py-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Home Audio</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Home Theater</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Wireless &amp; Streaming Audio</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Stereo System Components</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Compact Radios &amp; Stereos</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Home Audio Accessories</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="img/shop/departments/16.jpg" alt="Speakers & Home Music" /></a>
                        <div className="fs-sm mb-3">Starting from <span className="fw-medium">$43.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-server opacity-60 fs-lg mt-n1 me-2" />HDD/SSD Data Storage</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-md-nowrap px-2">
                      <div className="mega-dropdown-column py-4 px-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Data Storage</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">External Hard Drives</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">External Solid State Drives</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">External Zip Drives</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Floppy &amp; Tape Drives</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Internal Hard Drives</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Internal Solid State Drives</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Network Attached Storage</a></li>
                            <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">USB Flash Drives</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="img/shop/departments/15.jpg" alt="HDD/SSD Data Storage" /></a>
                        <div className="fs-sm mb-3">Starting from <span className="fw-medium">$21.<small>60</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1" /></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          {/* Primary menu*/}
          <ul className="navbar-nav">
            <li className="nav-item dropdown active"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
              <ul className="dropdown-menu">
                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-fashion-store-v1.html"><span className="d-block text-heading">Fashion Store v.1</span><small className="d-block text-muted">Classic shop layout</small></a>
                  <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-fashion-store-v1.html" style={{width: 250}}><img src="img/home/preview/th01.jpg" alt="Fashion Store v.1" /></a></div>
                </li>
                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-electronics-store.html"><span className="d-block text-heading">Electronics Store</span><small className="d-block text-muted">Slider + Promo banners</small></a>
                  <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-electronics-store.html" style={{width: 250}}><img src="img/home/preview/th03.jpg" alt="Electronics Store" /></a></div>
                </li>
                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-marketplace.html"><span className="d-block text-heading">Marketplace</span><small className="d-block text-muted">Multi-vendor, digital goods</small></a>
                  <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-marketplace.html" style={{width: 250}}><img src="img/home/preview/th04.jpg" alt="Marketplace" /></a></div>
                </li>
                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-grocery-store.html"><span className="d-block text-heading">Grocery Store</span><small className="d-block text-muted">Full width + Side menu</small></a>
                  <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-grocery-store.html" style={{width: 250}}><img src="img/home/preview/th06.jpg" alt="Grocery Store" /></a></div>
                </li>
                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-food-delivery.html"><span className="d-block text-heading">Food Delivery Service</span><small className="d-block text-muted">Food &amp; Beverages delivery</small></a>
                  <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-food-delivery.html" style={{width: 250}}><img src="img/home/preview/th07.jpg" alt="Food Delivery Service" /></a></div>
                </li>
                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-fashion-store-v2.html"><span className="d-block text-heading">Fashion Store v.2</span><small className="d-block text-muted">Slider + Featured categories</small></a>
                  <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-fashion-store-v2.html" style={{width: 250}}><img src="img/home/preview/th02.jpg" alt="Fashion Store v.2" /></a></div>
                </li>
                <li className="dropdown position-static mb-0"><a className="dropdown-item py-2" href="home-single-store.html"><span className="d-block text-heading">Single Product Store</span><small className="d-block text-muted">Single product / mono brand</small></a>
                  <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-single-store.html" style={{width: 250}}><img src="img/home/preview/th05.jpg" alt="Single Product / Brand Store" /></a></div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
              <div className="dropdown-menu p-0">
                <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                  <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                    <div className="widget widget-links mb-4">
                      <h6 className="fs-base mb-3">Shop layouts</h6>
                      <ul className="widget-list">
                        <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a></li>
                      </ul>
                    </div>
                    <div className="widget widget-links">
                      <h6 className="fs-base mb-3">Marketplace</h6>
                      <ul className="widget-list">
                        <li className="widget-list-item"><a className="widget-list-link" href="marketplace-category.html">Category Page</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="marketplace-single.html">Single Item Page</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="marketplace-vendor.html">Vendor Page</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="marketplace-cart.html">Cart</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="marketplace-checkout.html">Checkout</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                    <div className="widget widget-links">
                      <h6 className="fs-base mb-3">Shop pages</h6>
                      <ul className="widget-list">
                        <li className="widget-list-item"><a className="widget-list-link" href="shop-categories.html">Shop Categories</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="shop-single-v1.html">Product Page v.1</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="shop-single-v2.html">Product Page v.2</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="shop-cart.html">Cart</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="checkout-details.html">Checkout - Details</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="checkout-shipping.html">Checkout - Shipping</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="checkout-payment.html">Checkout - Payment</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="checkout-review.html">Checkout - Review</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="checkout-complete.html">Checkout - Complete</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="order-tracking.html">Order Tracking</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="comparison.html">Product Comparison</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                    <div className="widget widget-links mb-4">
                      <h6 className="fs-base mb-3">Grocery store</h6>
                      <ul className="widget-list">
                        <li className="widget-list-item"><a className="widget-list-link" href="grocery-catalog.html">Product Catalog</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="grocery-single.html">Single Product Page</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="grocery-checkout.html">Checkout</a></li>
                      </ul>
                    </div>
                    <div className="widget widget-links">
                      <h6 className="fs-base mb-3">Food Delivery</h6>
                      <ul className="widget-list">
                        <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-category.html">Category Page</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-single.html">Single Item (Restaurant)</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-cart.html">Cart (Your Order)</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-checkout.html">Checkout (Address &amp; Payment)</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Account</a>
              <ul className="dropdown-menu">
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop User Account</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="account-orders.html">Orders History</a></li>
                    <li><a className="dropdown-item" href="account-profile.html">Profile Settings</a></li>
                    <li><a className="dropdown-item" href="account-address.html">Account Addresses</a></li>
                    <li><a className="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                    <li><a className="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                    <li><a className="dropdown-item" href="account-tickets.html">My Tickets</a></li>
                    <li><a className="dropdown-item" href="account-single-ticket.html">Single Ticket</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Vendor Dashboard</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="dashboard-settings.html">Settings</a></li>
                    <li><a className="dropdown-item" href="dashboard-purchases.html">Purchases</a></li>
                    <li><a className="dropdown-item" href="dashboard-favorites.html">Favorites</a></li>
                    <li><a className="dropdown-item" href="dashboard-sales.html">Sales</a></li>
                    <li><a className="dropdown-item" href="dashboard-products.html">Products</a></li>
                    <li><a className="dropdown-item" href="dashboard-add-new-product.html">Add New Product</a></li>
                    <li><a className="dropdown-item" href="dashboard-payouts.html">Payouts</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="account-signin.html">Sign In / Sign Up</a></li>
                <li><a className="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
              <ul className="dropdown-menu">
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Navbar Variants</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="navbar-1-level-light.html">1 Level Light</a></li>
                    <li><a className="dropdown-item" href="navbar-1-level-dark.html">1 Level Dark</a></li>
                    <li><a className="dropdown-item" href="navbar-2-level-light.html">2 Level Light</a></li>
                    <li><a className="dropdown-item" href="navbar-2-level-dark.html">2 Level Dark</a></li>
                    <li><a className="dropdown-item" href="navbar-3-level-light.html">3 Level Light</a></li>
                    <li><a className="dropdown-item" href="navbar-3-level-dark.html">3 Level Dark</a></li>
                    <li><a className="dropdown-item" href="home-electronics-store.html">Electronics Store</a></li>
                    <li><a className="dropdown-item" href="home-marketplace.html">Marketplace</a></li>
                    <li><a className="dropdown-item" href="home-grocery-store.html">Side Menu (Grocery)</a></li>
                  </ul>
                </li>
                <li className="dropdown-divider" />
                <li><a className="dropdown-item" href="about.html">About Us</a></li>
                <li><a className="dropdown-item" href="contacts.html">Contacts</a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Help Center</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="help-topics.html">Help Topics</a></li>
                    <li><a className="dropdown-item" href="help-single-topic.html">Single Topic</a></li>
                    <li><a className="dropdown-item" href="help-submit-request.html">Submit a Request</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">404 Not Found</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="404-simple.html">404 - Simple Text</a></li>
                    <li><a className="dropdown-item" href="404-illustration.html">404 - Illustration</a></li>
                  </ul>
                </li>
                <li className="dropdown-divider" />
                <li><a className="dropdown-item" href="sticky-footer.html">Sticky Footer Demo</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
              <ul className="dropdown-menu">
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog List Layouts</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="blog-list-sidebar.html">List with Sidebar</a></li>
                    <li><a className="dropdown-item" href="blog-list.html">List no Sidebar</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Blog Grid Layouts</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="blog-grid-sidebar.html">Grid with Sidebar</a></li>
                    <li><a className="dropdown-item" href="blog-grid.html">Grid no Sidebar</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Single Post Layouts</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="blog-single-sidebar.html">Article with Sidebar</a></li>
                    <li><a className="dropdown-item" href="blog-single.html">Article no Sidebar</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Docs / Components</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="docs/dev-setup.html">
                    <div className="d-flex">
                      <div className="lead text-muted pt-1"><i className="ci-book" /></div>
                      <div className="ms-2"><span className="d-block text-heading">Documentation</span><small className="d-block text-muted">Kick-start customization</small></div>
                    </div></a></li>
                <li className="dropdown-divider" />
                <li><a className="dropdown-item" href="components/typography.html">
                    <div className="d-flex">
                      <div className="lead text-muted pt-1"><i className="ci-server" /></div>
                      <div className="ms-2"><span className="d-block text-heading">Components<span className="badge bg-info ms-2">40+</span></span><small className="d-block text-muted">Faster page building</small></div>
                    </div></a></li>
                <li className="dropdown-divider" />
                <li><a className="dropdown-item" href="docs/changelog.html">
                    <div className="d-flex">
                      <div className="lead text-muted pt-1"><i className="ci-edit" /></div>
                      <div className="ms-2"><span className="d-block text-heading">Changelog<span className="badge bg-success ms-2">v2.1</span></span><small className="d-block text-muted">Regular updates</small></div>
                    </div></a></li>
                <li className="dropdown-divider" />
                <li><a className="dropdown-item" href="mailto:support@createx.studio">
                    <div className="d-flex">
                      <div className="lead text-muted pt-1"><i className="ci-help" /></div>
                      <div className="ms-2"><span className="d-block text-heading">Support</span><small className="d-block text-muted">support@createx.studio</small></div>
                    </div></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>




        // <>
        //     <AppBar position="fixed" className={classes.appBar} color="inherit">
        //         <Toolbar>
        //             <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
        //                 <img src={logo} alt="TIMMYSHOP" height="25px" className={classes.image} /> TimmyShop
        //             </Typography>
        //             <div className={classes.grow} />
        //             { location.pathname === '/' && (
        //                 <div className={classes.button}>
        //                     <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
        //                         <Badge badgeContent={totalItems} color="secondary">
        //                             <ShoppingCartRounded />
        //                         </Badge>
        //                     </IconButton>
        //                 </div>
        //             )}
        //         </Toolbar>
        //     </AppBar>
        //     {renderMobileMenu}
        // </>
    );
};

export default PrimarySearchBar;
