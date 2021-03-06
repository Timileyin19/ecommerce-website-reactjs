import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FiMenu, FiUser, 
    FiShoppingCart, FiArrowRightCircle, 
    FiCreditCard
 } from "react-icons/fi";
import Toolbar from './Toolbar/Toolbar';
import CartDropdown from './CartDropdown/CartDropdown';

import logo from '../../assests/LogoDark.png';

const PrimarySearchBar = ({ cart, handleRemoveFromCartWithItemName }) => {
    const [subtotal, setSubtotal] = useState(null);

    useEffect(() => {
      const setItemSubtotal = () => {
        for(let key in cart) {
          if (cart.hasOwnProperty(key))  {
            setSubtotal(cart.subtotal.formatted_with_symbol);
          } else {
            setSubtotal('₦0.00')
    
          }
        }
      }
      setItemSubtotal();
    }, [cart])
    

    return (
         <header className="shadow-sm">
        <Toolbar />
  {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
  <div className="navbar-sticky bg-light">
    <div className="navbar navbar-expand-lg navbar-light">
      <div className="container">
          <Link className="navbar-brand d-none d-sm-block me-3 flex-shrink-0" to="/">
              <img src={logo} width={142} alt="TeamTech" />
        </Link>
        <Link className="navbar-brand d-sm-none me-2" to="/">
            <img src={logo} width={74} alt="TeamTech" />
        </Link>
        {/* Search*/}
        <div className="input-group d-none d-lg-flex flex-nowrap mx-4">
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3" />
          <input className="form-control rounded-start w-100" type="text" placeholder="Search for products" />
          <select className="form-select flex-shrink-0" style={{width: '10.5rem'}}>
            <option>All categories</option>
            <option>Phone Accessories</option>
            <option>Electronics</option>
            <option>Home Gadget</option>
          </select>
        </div>
        <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <Link className="navbar-tool navbar-stuck-toggler" to="#"><span className="navbar-tool-tooltip">Toggle menu</span>
                <div className="navbar-tool-icon-box">
                    <FiMenu className="navbar-tool-icon" />
                </div>
            </Link>
            <Link className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" to="#signin-modal" data-bs-toggle="modal">
              <div className="navbar-tool-icon-box">
                  <FiUser className="navbar-tool-icon" />
              </div>
              <div className="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div>
            </Link>
          <div className="navbar-tool dropdown ms-3">
              <Link className="navbar-tool-icon-box bg-secondary dropdown-toggle" to="/cart">
                  { cart.total_items ? (<span className="navbar-tool-label"> { cart.total_items } </span>) : null }
                  <FiShoppingCart className="navbar-tool-icon" />
                </Link>
                <Link className="navbar-tool-text" to="/cart"><small>My Cart</small>
                 { cart.hasOwnProperty('id') ? (<>{cart.subtotal.formatted_with_symbol}</>) : '₦0.00' } 
                </Link> 
            {/* Cart dropdown*/}
            <div className="dropdown-menu dropdown-menu-end">
              <div className="widget widget-cart px-3 pt-2 pb-3" style={{width: '20rem'}}>
                <div data-simplebar data-simplebar-auto-hide="false">
                  { cart.line_items ? ( cart.line_items.map((product) => (
                      <CartDropdown key={product.id} product={product} handleRemoveFromCartWithItemName={handleRemoveFromCartWithItemName} />
                  )) ) : null }
                  </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                  <div className="fs-sm me-2 py-2">
                      <span className="text-muted">Subtotal:</span>
                      { cart.hasOwnProperty('id') ? <span className="text-accent fs-base ms-1">{cart.subtotal.formatted_with_symbol}</span> : '₦0.00' }
                    </div>
                    <Link className="btn btn-outline-secondary btn-sm" to="/cart">Expand cart
                        <FiArrowRightCircle className="ms-1 me-n1" />
                    </Link>
                </div>
                    <Link className="btn btn-primary btn-sm d-block w-100" to="/checkout">
                        <FiCreditCard className="me-2 fs-base align-middle" />Checkout
                    </Link>
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
          <div className="input-group d-lg-none my-3">
              <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3" />
            <input className="form-control rounded-start" type="text" placeholder="Search for products" />
          </div>
          {/* Categories menu*/}
          <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
          </ul>
          {/* Primary menu*/}
          <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
             </li>
            <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link" to="/">Account</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">About Us</Link>
             </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Blog</Link>
             </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Contact Us</Link>
             </li> */}
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>
    );
};

export default PrimarySearchBar;
