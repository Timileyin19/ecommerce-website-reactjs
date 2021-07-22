import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({ cart }) => {
    return (
        <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
        <div className="bg-white rounded-3 shadow-lg p-4 ms-lg-auto">
          <div className="py-2 px-xl-2">
            <div className="widget mb-3">
              <h2 className="widget-title text-center">Order summary</h2>
              { cart.line_items.length ? (
                  <> { cart.line_items.map((item) => (
                    <div className="d-flex align-items-center pb-2 border-bottom">
                        <Link className="d-block flex-shrink-0" to={`/product/${item.product_id}`}>
                            <img src={item.media.source} width={64} alt={item.name} />
                        </Link>
                        <div className="ps-2">
                            <h6 className="widget-product-title"><Link to={`/product/${item.product_id}`}>{item.name}</Link></h6>
                            <div className="widget-product-meta">
                                <span className="text-accent me-2">{item.price.formatted_with_symbol}</span>
                                <span className="text-muted">x {item.quantity}</span>
                            </div>
                        </div>
                    </div>
                  )) } </>
              ) : 'Cart is empty' }
            </div>
            <ul className="list-unstyled fs-sm pb-2 border-bottom">
                <li className="d-flex justify-content-between align-items-center">
                    <span className="me-2">Subtotal:</span><span className="text-end">{cart.subtotal.formatted_with_symbol}</span>
                </li>
                <li className="d-flex justify-content-between align-items-center"><span className="me-2">Taxes:</span><span className="text-end">₦00.00</span></li>
                <li className="d-flex justify-content-between align-items-center"><span className="me-2">Discount:</span><span className="text-end">—</span></li>
            </ul>

            <h3 className="fw-normal text-center my-4">{cart.subtotal.formatted_with_symbol}</h3>
          </div>
        </div>
      </aside>
    )
}

export default OrderSummary
