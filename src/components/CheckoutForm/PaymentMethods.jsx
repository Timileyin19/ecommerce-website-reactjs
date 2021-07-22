import React from 'react';
import PageTitle from '../Utility/PageTitle';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegUserCircle, FaRegCreditCard, FaBitcoin, FaGifts, FaAngleRight, FaAngleLeft   } from 'react-icons/fa';
import Cards from '../../assests/img/cards-alt.png';
import OrderSummary from './OrderSummary';

const PaymentMethods = ({ cart }) => {
    return (
        <>
            <PageTitle prevPage="Shop" prevPageLink="/shop" title="Checkout" heading="Checkout" />

            <div className="container pb-5 mb-2 mb-md-4">
  <div className="row">
    <section className="col-lg-8">
      {/* Steps*/}
      <div className="steps steps-light pt-2 pb-3 mb-5">
          <Link className="step-item active" to="/cart">
              <div className="step-progress"><span className="step-count">1</span></div>
              <div className="step-label"><FiShoppingCart /> Cart</div>
          </Link>
          <Link className="step-item active" to="/checkout">
              <div className="step-progress"><span className="step-count">2</span></div>
              <div className="step-label"><FaRegUserCircle /> Details</div>
          </Link>
          <Link className="step-item active current" to="/checkout/payment">
              <div className="step-progress"><span className="step-count">3</span></div>
              <div className="step-label"><FaRegCreditCard /> Payment</div>
          </Link>
      </div>
      {/* Payment methods accordion*/}
      <h2 className="h6 pb-3 mb-2">Choose payment method</h2>
      <div className="accordion mb-2" id="payment-method">
        <div className="accordion-item">
          <h3 className="accordion-header">
            <Link className="accordion-button" to="#card" data-bs-toggle="collapse"><FaRegCreditCard className="fs-lg me-2 mt-n1 align-middle" />Pay with Credit Card</Link>
          </h3>
          <div className="accordion-collapse collapse show" id="card" data-bs-parent="#payment-method">
            <div className="accordion-body">
              <p className="fs-sm">We accept following credit cards:&nbsp;&nbsp;<img className="d-inline-block align-middle" src={Cards} width={187} alt="Cerdit Cards" /></p>
              <div className="credit-card-wrapper" />
              <form className="credit-card-form row">
                <div className="mb-3 col-sm-6">
                  <input className="form-control" type="text" name="number" placeholder="Card Number" required />
                </div>
                <div className="mb-3 col-sm-6">
                  <input className="form-control" type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className="mb-3 col-sm-3">
                  <input className="form-control" type="text" name="expiry" placeholder="MM/YY" required />
                </div>
                <div className="mb-3 col-sm-3">
                  <input className="form-control" type="text" name="cvc" placeholder="CVC" required />
                </div>
                <div className="col-sm-6">
                  <button className="btn btn-outline-primary d-block w-100 mt-0" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <Link className="accordion-button collapsed" to="#paypal" data-bs-toggle="collapse"><FaBitcoin className="me-2 align-middle" />Pay with Bitcoin</Link></h3>
          <div className="accordion-collapse collapse" id="paypal" data-bs-parent="#payment-method">
            <div className="accordion-body fs-sm">
              <p><span className="fw-medium">Bitcoin</span> - worldwide formost cryprocurrency</p>
              <form className="row needs-validation" method="post" noValidate>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input className="form-control" type="email" placeholder="E-mail" required />
                    <div className="invalid-feedback">Please enter valid email address</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input className="form-control" type="password" placeholder="Password" required />
                    <div className="invalid-feedback">Please enter your password</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <Link className="nav-link-style" to="#">Forgot password?</Link>
                    <button className="btn btn-primary" type="submit">Log In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <Link className="accordion-button collapsed" to="#points" data-bs-toggle="collapse">
              <FaGifts className="me-2" /> Redeem Reward Points
            </Link>
          </h3>
          <div className="accordion-collapse collapse" id="points" data-bs-parent="#payment-method">
            <div className="accordion-body">
              <p>You currently have<span className="fw-medium">&nbsp;384</span>&nbsp;Reward Points to spend.</p>
              <div className="form-check d-block">
                <input className="form-check-input" type="checkbox" id="use_points" />
                <label className="form-check-label" htmlFor="use_points">Use my Reward Points to pay for this order.</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation (desktop)*/}
      <div className="d-none d-lg-flex pt-4">
        <div className="w-50 pe-3">
          <Link className="btn btn-secondary d-block w-100" to="/checkout"><FaAngleLeft className="mt-sm-0 me-1" /><span className="d-none d-sm-inline">Back to Checkout Details</span><span className="d-inline d-sm-none">Back</span></Link></div>
        <div className="w-50 ps-2"><Link className="btn btn-primary d-block w-100" to="/checkout/complete"><span className="d-none d-sm-inline">Submit</span><span className="d-inline d-sm-none">Submit Order</span><FaAngleRight className="mt-sm-0 ms-1" /></Link></div>
      </div>
    </section>
    
    <OrderSummary cart={cart} />
  </div>
  {/* Navigation (mobile)*/}
  <div className="row d-lg-none">
    <div className="col-lg-8">
      <div className="d-flex pt-4 mt-3">
        <div className="w-50 pe-3">
          <Link className="btn btn-secondary d-block w-100" to="/checkout"><FaAngleLeft className="mt-sm-0 me-1" /><span className="d-none d-sm-inline">Back to Checkout Details</span><span className="d-inline d-sm-none">Back</span></Link>
        </div>
        <div className="w-50 ps-2">
          <Link className="btn btn-primary d-block w-100" to="/checkout/complete"><span className="d-none d-sm-inline">Submit Order</span><span className="d-inline d-sm-none">Submit Order</span><FaAngleRight className="mt-sm-0 ms-1" /></Link>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default PaymentMethods;
