import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { commerce } from '../../../api/commerce';
import Spinner from '../../Utility/Spinner';
import { FiHome, FiVideo, FiCheckSquare, FiFacebook,
    FiAlertTriangle, FiShoppingCart, FiTwitter, FiInstagram } 
from "react-icons/fi";
import Product from './Product';

const ProductDetails = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    

    const fetchProduct = async () => {
        const le = await commerce.products.retrieve(id);
        setProduct(le);
    }

    const displayCategories = (categories) => {
        let outputText = '';
        if (categories.length > 1) {
            for(let i = 0; i < categories.length; i++) {
               if (i !== (categories.length - 1)) {
                outputText += categories[i].name + ', '; 
               } else {
                outputText += categories[i].name;   
               }  
            }
        } else {
            outputText += categories[0].name;  
        }
        return outputText;
    }

    

    const setUpSelectDropdown = () => {
        let val = ``
        for(let i = 1; i <= product.inventory.available; i++) {
           val += `<option value=${i}>${i}</option>`
        }
        return { __html: val };
    }

    const updateQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const getProductDescAsText = (htmlText) => {
        let firstStep = htmlText.slice(3)
        let normalOutput = firstStep.slice(0, -4)
        return normalOutput;
    }

    const handleAddToCart = (e) => {
        e.preventDefault()
        addToCart(id, quantity);
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);

    return (
        <>
            { product.hasOwnProperty('id') ? (
                 <div>
  <div className="page-title-overlap bg-dark pt-4">
    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
      <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
            <li className="breadcrumb-item">
                <Link className="text-nowrap" to="/">
                    <FiHome />&nbsp; Home
                </Link>
            </li>
            <li className="breadcrumb-item text-nowrap">
                &#62; &nbsp;
                <Link to="/shop"> Shop</Link>
            </li>
            <li className="breadcrumb-item text-nowrap active" aria-current="page">
                &#62; &nbsp;
                {product.name}
            </li>
          </ol>
        </nav>
      </div>
      <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
        <h1 className="h3 text-light mb-2">{product.name}</h1>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="bg-light shadow-lg rounded-3">
      {/* Tabs*/}
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
            <Link className="nav-link py-4 px-sm-4 active" to="#general" data-bs-toggle="tab" role="tab">
                General <span className="d-none d-sm-inline">Info</span> 
            </Link>
        </li>
      </ul>
      <div className="px-4 pt-lg-3 pb-3 mb-5">
        <div className="tab-content px-lg-3">
          {/* General info tab*/}
          <div className="tab-pane fade show active" id="general" role="tabpanel">
            <div className="row">
              {/* Product gallery*/}
              <div className="col-lg-7 pe-lg-0">
                <div className="product-gallery">
                  <div className="product-gallery-preview order-sm-2">
                    <div className="product-gallery-preview-item active" id="first">
                        <img className="image-zoom" height='905px' width='764px' src={product.assets[0].url} data-zoom={product.assets[0].url} alt={product.name} />
                      <div className="image-zoom-pane" />
                    </div>
                    {
                        product.assets[1] ? (
                            <div className="product-gallery-preview-item" id="second">
                                <img className="image-zoom" height='905px' width='764px' src={product.assets[1].url} data-zoom={product.assets[1].url} alt={product.name} />
                                <div className="image-zoom-pane" />
                            </div> 
                        ) : null

                    }
                    {
                        product.assets[2] ? (
                            <div className="product-gallery-preview-item" id="third">
                                <img className="image-zoom" height='905px' width='764px' src={product.assets[2].url} data-zoom={product.assets[1].url} alt={product.name} />
                                <div className="image-zoom-pane" />
                            </div> 
                        ) : null

                    }
                  </div>
                  <div className="product-gallery-thumblist order-sm-1">
                    <Link className="product-gallery-thumblist-item active" to="#first">
                        <img src={product.assets[0].url} height='156px' width='156px' alt={product.name} />
                    </Link>
                    {
                        product.assets[1] ? (
                            <Link className="product-gallery-thumblist-item" to="#second">
                                <img src={product.assets[1].url} height='156px' width='156px' alt={product.name} />
                            </Link> 
                        ) : null
                    }
                    {
                        product.assets[2] ? (
                            <Link className="product-gallery-thumblist-item" to="#third">
                                <img src={product.assets[2].url} height='156px' width='156px' alt={product.name} />
                            </Link> 
                        ) : null
                    }
                    {
                        product.assets[3] ? (
                            <Link className="product-gallery-thumblist-item" to="#fourth">
                                <img src={product.assets[3].url} height='156px' width='156px' alt={product.name} />
                            </Link> 
                        ) : null
                    }
                  
                        <Link className="product-gallery-thumblist-item video-item" to="#">
                            <div className="product-gallery-thumblist-item-text">
                                <FiVideo /> Video
                            </div>
                        </Link>
                    </div>
                </div>
              </div>
              {/* Product details*/}
              <div className="col-lg-5 pt-4 pt-lg-0">
                <div className="product-details ms-auto pb-3">
                  <div className="h3 fw-normal text-accent mb-3 me-1">{ product.price.formatted_with_symbol }</div>
                  <div className="fs-sm mb-4">
                      <span className="text-heading fw-medium me-1">{product.categories.length > 1 ? 'Categories:' : 'Category:'}</span>
                      <span className="text-muted" id="colorOption">{ displayCategories(product.categories) }</span>
                    </div>
                  <div className="position-relative me-n4 mb-3">
                    { product.active ? ( 
                        <div className="product-badge product-available mt-n1">
                            <FiCheckSquare />Product available
                        </div>
                    ) : (
                        <div className="product-badge product-available mt-n1">
                            <FiAlertTriangle />Out of Stock
                        </div>
                    ) }
                  </div>
                  <div className="d-flex align-items-center pt-2 pb-4 mt-5">
                    { product.inventory.managed ? (
                        <select className="form-select me-3" onChange={updateQuantity} style={{width: '5rem'}} dangerouslySetInnerHTML={setUpSelectDropdown()}></select>
                        ) : (
                        <div className="mb-3">
                            <label className="form-label" htmlFor="Quantity">Quantity:</label>
                            <input className="me-3" type="number" onChange={updateQuantity} defaultValue="1" />
                        </div>
                        ) }
                        <button className="btn btn-primary btn-shadow d-block w-100" onClick={handleAddToCart} type="button">
                            <FiShoppingCart className="cfs-lg me-2" /> Add to Cart
                        </button>
                  </div>
                  {/* Sharing*/}
                  <label className="form-label d-inline-block align-middle my-2 me-3">Share:</label>
                    <Link className="btn-share btn-twitter me-2 my-2" to="#"><FiTwitter /> Twitter</Link>
                    <Link className="btn-share btn-instagram me-2 my-2" to="#"><FiInstagram /> Instagram</Link>
                    <Link className="btn-share btn-facebook my-2" to="#"><FiFacebook /> Facebook</Link>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  </div>
  {/* Product description*/}
  <div className="container pt-lg-3 pb-4 pb-sm-5">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h2 className="h3 pb-2">Description</h2>
        <p>{ getProductDescAsText(product.description) }</p>
      </div>
    </div>
  </div>
  <hr className="mb-5" />
  {/* Product carousel (You may also like)*/}
  { product.related_products.length > 0 ? (  
      
      <section className="container pt-5">
            <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                <h2 className="h3 mb-0 pt-3 me-2">You May Also Like</h2>
            </div>
            <div className="row pt-2 mx-n2">
                 { product.related_products.map((product) => (
                    <Product product={product} addToCart={addToCart} />
                    )) }
            </div>
        </section>
) : null }  
  </div> ) : <Spinner />  }
        </>
    )
}

export default ProductDetails
