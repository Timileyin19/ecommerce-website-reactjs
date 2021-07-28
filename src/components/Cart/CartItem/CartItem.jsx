import React from 'react';
import { Link } from 'react-router-dom';
import { FiXCircle } from 'react-icons/fi';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const handleUpdateCartQty = (lineItemId, newQuantity) => {
        onUpdateCartQty(lineItemId, newQuantity);
    }

    const handleRemoveFromCart = (lineItemId) => {
        onRemoveFromCart(lineItemId);
    }


    return (
        <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom">
            <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
                <Link className="d-inline-block flex-shrink-0 mx-auto me-sm-4" to="#">
                    <img src={item.media.source} width={160} alt={item.name} />
                </Link>
            <div className="pt-2">
                <h3 className="product-title fs-base mb-2">{item.name}</h3>
                <div className="fs-sm"><span className="text-muted me-2">Permalink:</span>{item.permalink}</div>
                <div className="fs-lg text-accent pt-2">{item.line_total.formatted_with_symbol}</div>
            </div>
            </div>
            <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style={{maxWidth: '9rem'}}>
            <label className="form-label" htmlFor="quantity1">Quantity</label>
            <input className="form-control" type="number" id="quantity1" min={1} onChange={(e) => handleUpdateCartQty(item.id, e.target.value)} value={item.quantity} />
            <button className="btn btn-link px-0 text-danger" type="button" onClick={() => handleRemoveFromCart(item.id)}>
                <FiXCircle className="me-2" /><span className="fs-sm">Remove</span>
            </button>
            </div>
        </div>
    );
};

export default CartItem;
