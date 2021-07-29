import React from 'react';
import { Link } from 'react-router-dom';
import { FiEye,
    FiShoppingCart
 } from "react-icons/fi";


const Product = ({ product, onAddToCart }) => {

    const handleAddToCart = () => onAddToCart(product.id, 1);

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

    return (
      <>
    <div className="col-lg-3 col-md-4 col-sm-6 px-2">
      <div className="card product-card">
        <div className="product-card-actions d-flex align-items-center"></div>
        <Link className="card-img-top d-block overflow-hidden" to="/shop">
            <img src={product.media.source} alt={product.name} /> </Link>
        <div className="card-body py-2">
          { 
            product.categories ? (
              <Link className="product-meta d-block fs-xs pb-1" to="#"> { displayCategories(product.categories) } </Link>
            ) : null
          }
            <h3 className="product-title fs-sm">
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h3>
          <div className="d-flex justify-content-between">
            <div className="product-price">
                <span className="text-accent">{product.price.formatted_with_symbol}</span>
            </div>
          </div>
        </div>
        <div className="card-body card-body-hidden">
          <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button" onClick={handleAddToCart}>
              <FiShoppingCart className="fs-sm me-1" />Add to Cart
            </button>
          <div className="text-center">
              <Link className="nav-link-style fs-ms" to={`/product/${product.id}`}>
                  <FiEye className="align-middle me-1" /> View Details
                </Link>
            </div>
        </div>
      </div>
    </div>


</>
    );
};

export default Product;
