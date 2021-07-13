import React from 'react'
import Spinner from '../Utility/Spinner';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckSquare, FiShoppingCart  } from "react-icons/fi";


const QuickViewModal = ({ product }) => {

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
        let val = `<select className="form-select me-3" onChange={updateQuantity} style={{width: '5rem'}}>;`
        for(let i = 1; i <= product.inventory.available; i++) {
           val += `<option value=${i}>${i}</option>`
        }
        val += '</select>';
        return val;
    }

    const updateQuantity = (e) => {
        console.log(e.target.value)
    }

    const getProductDescAsText = (htmlText) => {
        let firstStep = htmlText.slice(3)
        let normalOutput = firstStep.slice(0, -4)
        return normalOutput;
    }

    const getId = (i) => {
        let my_i = Number(i);
        if (my_i === 1) return 'second';
        else if (my_i === 0) return 'first'
        else if (my_i === 2) return 'third';
        else if (my_i === 3) return 'fourth';
        else if (my_i === 4) return 'fifth';
        else if (my_i === 5) return 'sixth';
        else return 'no_id_for_you';
    }

    return (
        <>
            { product.hasOwnProperty('id') ? (
                <div className="modal-quick-view modal fade" id="quick-view-electro" tabIndex={-1}>
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title product-title">
                        <Link to="/shop" data-bs-toggle="tooltip" data-bs-placement="right" title="Go to product page">{product.name}
                          <FiArrowRight className="fs-lg ms-2" />
                        </Link>
                        </h4>
                      <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        {/* Product gallery*/}
                        <div className="col-lg-7 pe-lg-0">
                          <div className="product-gallery">
                            <div className="product-gallery-preview order-sm-2">
                              <div className="product-gallery-preview-item active" id="first">
                                  <img className="image-zoom" src={product.assets[0].url} data-zoom={product.assets[0].url} alt={product.name} />
                                <div className="image-zoom-pane" />
                              </div>
                              { product.assets.length > 1 ? (
                                  <> { product.assets.map((asset, index) => {
                                      if (index !== 0) {
                                        <div className="product-gallery-preview-item" id={getId(index)}>
                                        <img className="image-zoom" src={asset.url} data-zoom={asset.url} alt={product.name} />
                                      <div className="image-zoom-pane" />
                                        </div> 
                                      }
                                  }) } </>
                              ) : null }
                            </div>
                            <div className="product-gallery-thumblist order-sm-1">
                                { product.assets.length > 0 ? (
                                    <>
                                    { product.assets.map((asset, index) => {
                                        if (index === 0) {
                                            <Link className="product-gallery-thumblist-item active" to="#first">
                                                <img src={asset.url} alt={product.name} />
                                            </Link>
                                        } else {
                                            <Link className="product-gallery-thumblist-item" to={'#' + getId(index)}>
                                                <img src={asset.url} alt={product.name} />
                                            </Link>
                                        }
                                    }) }
                                    </>
                                ) : null }
                            </div>
                          </div>
                        </div>
                        {/* Product details*/}
                        <div className="col-lg-5 pt-4 pt-lg-0 image-zoom-pane">
                          <div className="product-details ms-auto pb-3">
                            <div className="h3 fw-normal text-accent mb-3 me-1">{ product.price.formatted_with_symbol }</div>
                            <div className="fs-sm mb-4">
                                <span className="text-heading fw-medium me-1">{product.categories.length > 1 ? 'Categories:' : 'Category:'}</span>
                                <span className="text-muted" id="colorOptionText">{ displayCategories(product.categories) }</span>
                            </div>
                            <div className="position-relative me-n4 mb-3">
                                { product.active ? ( 
                                    <div className="product-badge product-available mt-n1">
                                        <FiCheckSquare />Product available
                                    </div>
                                ) : null }
                            </div>
                            <div className="d-flex align-items-center pt-2 pb-4">
                              
                                  { product.inventory.managed ? (
                                        <>{ setUpSelectDropdown() }</>
                                  ) : (
                                   <div className="mb-3">
                                    <label htmlFor="text-input" className="form-label">Quantitty</label>
                                    <input className="form-select me-3" type="number" onChange={updateQuantity} defaultValue="1" />
                                    </div>

                                  ) }
                                
                              <button className="btn btn-primary btn-shadow d-block w-100" type="button">
                                  <FiShoppingCart className="fs-lg me-2" />Add to Cart
                                </button>
                            </div>
                            <h5 className="h6 mb-3 py-2 border-bottom">
                                <i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2" />Product info</h5>
                            <p className="fs-sm mb-2"> { getProductDescAsText(product.description) } </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            ) : <Spinner /> }

        </>
    )
}

export default QuickViewModal
