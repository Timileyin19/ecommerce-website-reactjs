import React from 'react';
import { Link } from 'react-router-dom';

const CartDropdown = ({ product, handleRemoveFromCartWithItemName }) => {

    
const onRemoveFromCart = (item_name) => {
    handleRemoveFromCartWithItemName(item_name)
} 
    

function page_click(e) {
    if (e.path[1].parentElement.classList[0] === 'widget-cart-item') {
      let myText = e.path[1].parentElement.innerText;
      let newText = myText.split('₦');
      let nameOfItem = newText[0].substring(2);
      onRemoveFromCart(nameOfItem)
  }
}
window.onclick = page_click;

    return (
        <div className="widget-cart-item pb-2 border-bottom">
            <button className="btn-close text-danger" type="button" aria-label="Remove">
                <span aria-hidden="true">×</span>
            </button>
            <div className="d-flex align-items-center">
                <Link className="d-block flex-shrink-0" to="/cart">
                    <img src={product.media.source} width={64} alt="Product" />
                </Link>
                <div className="ps-2">
                <h6 className="widget-product-title">
                    <Link to="/cart">{product.product_name}</Link></h6>
                <div className="widget-product-meta">
                    <span className="text-accent me-2">{product.price.formatted_with_symbol}</span>
                    <span className="text-muted">x {product.quantity}</span></div>
                </div>
            </div>
        </div>
    )
}

export default CartDropdown
