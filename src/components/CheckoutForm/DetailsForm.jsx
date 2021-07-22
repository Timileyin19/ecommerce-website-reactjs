import React, { useEffect, useState } from 'react';
import PageTitle from '../Utility/PageTitle';
import Spinner from '../Utility/Spinner';
import { Link, useHistory } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegUserCircle, FaShippingFast, FaAngleRight, FaRegCreditCard, FaRegCheckCircle, FaAngleLeft } from 'react-icons/fa';
import UserInfo from '../User/UserInfo';
import OrderSummary from './OrderSummary';
import { commerce } from '../../api/commerce';

const DetailsForm = ({ cart }) => {
  const history = useHistory();

  const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const [checkoutToken, setCheckoutToken] = useState(null);

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
}

const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
}

const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince  });

    setShippingOptions(options);
    setShippingOption(options[0].id);
}

useEffect(() => {
      if (cart.id) {
          const generateToken = async () => {
              try {
                  const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

                  setCheckoutToken(token);
              } catch {
                  history.push('/');
              }
          };

          generateToken();
      }
  }, [cart, history]);

useEffect(() => {
  if (checkoutToken)
    fetchShippingCountries(checkoutToken.id);
}, [checkoutToken]);

useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
}, [shippingCountry]);

useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
}, [checkoutToken, shippingSubdivision, shippingCountry]);








    if (!cart.line_items) return <Spinner />;

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
            <Link className="step-item active current" to="/checkout">
                <div className="step-progress"><span className="step-count">2</span></div>
                <div className="step-label"><FaRegUserCircle /> Details</div>
            </Link>
            <Link className="step-item" to="/checkout/payment">
                <div className="step-progress"><span className="step-count">3</span></div>
                <div className="step-label"><FaRegCreditCard /> Payment</div>
            </Link>
        </div>
        
        <UserInfo />
        
        {/* NB: this will be automatically populated with the Registered Details of the user */}
        <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">Shipping address</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="firstname">First Name</label>
              <input className="form-control" type="text" id="firstname" name="firstname" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="lastname">Last Name</label>
              <input className="form-control" type="text" id="lastname" name="lastname" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="email">E-mail Address</label>
              <input className="form-control" type="email" id="email" name="email" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
              <input className="form-control" type="text" id="phoneNumber" name="phoneNumber" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="address1">Address 1</label>
              <input className="form-control" type="text" id="address1" name="address1" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="address2">Address 2</label>
              <input className="form-control" type="text" id="address2" name="address2" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="zipCode">ZIP Code</label>
              <input className="form-control" type="text" id="zipCode" name="zipCode" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <select class="form-select" id="country" name="country" value={shippingCountry} onChange={(e) => setShippingCountry(e.target.value)}>
              <option disabled>Choose option...</option>
                { Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <option key={item.id} value={item.id}>{ item.label }</option>
              ))}
            </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
            <label htmlFor="state" className="form-label">State/Province</label>
            <select class="form-select" id="state" name="state" value={shippingSubdivision} onChange={(e) => setShippingSubdivision(e.target.value)}>
              <option disabled>Choose option...</option>
                { Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <option key={item.id} value={item.id}>{ item.label }</option>
              ))}
            </select>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3">
                <label htmlFor="shipping_options" className="form-label">Shipping Options</label>
                <select class="form-select" id="shipping_options" name="shippingOption" value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                  <option disabled>Choose option...</option>
                    { 
                      shippingOptions
                        .map((option) => ({ id: option.id, label: `${option.description} - (${option.price.formatted_with_symbol})`}))
                        .map((item) => (
                          <option key={item.id} value={item.id}>{ item.label }</option>
                        ))
                      }
                </select>

            </div>
          </div>
        </div>

       
        
        {/* Navigation (desktop)*/}
        <div className="d-none d-lg-flex pt-4 mt-3">
          <div className="w-50 pe-3">
              <Link className="btn btn-secondary d-block w-100" to="/cart">
                  <FiShoppingCart className="mt-sm-0 me-1" />
                  <span className="d-none d-sm-inline">Back to Cart</span>
                  <span className="d-inline d-sm-none">Back</span>
               </Link>
            </div>
          <div className="w-50 ps-2">
              <Link className="btn btn-primary d-block w-100" to="/checkout/payment">
                  <span className="d-none d-sm-inline">Make Payment</span>
                  <span className="d-inline d-sm-none">Next</span>
                  <FaAngleRight className="mt-sm-0 ms-1" />
              </Link>
            </div>
        </div>
      </section>
      
      <OrderSummary cart={cart} />
      
     
    </div>
    {/* Navigation (mobile)*/}
    <div className="row d-lg-none">
      <div className="col-lg-8">
        <div className="d-flex pt-4 mt-3">
          <div className="w-50 pe-3">
              <Link className="btn btn-secondary d-block w-100" to="/cart">
                  <FaAngleLeft className="mt-sm-0 me-1" />
                  <span className="d-none d-sm-inline">Back to Cart</span>
                  <span className="d-inline d-sm-none">Back</span>
                </Link>
            </div>
          <div className="w-50 ps-2">
              <Link className="btn btn-primary d-block w-100" to="/checkout/payment">
                  <span className="d-none d-sm-inline">Make Payment</span>
                  <span className="d-inline d-sm-none">Next</span>
                  <FaAngleRight className="mt-sm-0 ms-1" />
              </Link>
            </div>
        </div>
      </div>
    </div>
  </div>  
        </>
    )
}

export default DetailsForm
