import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Utility/Spinner';
import { FiTrash2, FiCreditCard, FiShoppingCart } from 'react-icons/fi';
import { FaAngleLeft } from 'react-icons/fa';
import PageTitle from '../Utility/PageTitle';
import CartItem from './CartItem/CartItem';

function Cart({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <>
        <section className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
                <h2 className="h6 text-light mb-0">Products</h2>
                <Link className="btn btn-outline-primary btn-sm ps-2" to="/shop">
                    <FaAngleLeft className="me-2"/>Start shopping
                </Link>
            </div>
            <h6>Your Cart is empty, click the button above to start Shopping.</h6>
        </section>
        <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
        <div className="bg-white rounded-3 shadow-lg p-4">
            <div className="py-2 px-xl-2">
                <div className="text-center mb-4 pb-3 border-bottom">
                    <h2 className="h6 mb-3 pb-1">Subtotal</h2>
                    <h3 className="fw-normal">₦ 0.00</h3>
                </div>
                <Link className="btn btn-primary btn-shadow d-block w-100 mt-4" to="/shop">
                    <FiShoppingCart className="fs-lg me-2" />Start Shopping
                </Link>
            </div>
        </div>
        </aside>

</>
        // <Typography variant="subtitle1">You have no items in your shopping cart, 
        //     <Link className={classes.link} to="/">
        //         start adding items
        //     </Link>
        // </Typography>
    );

    if (!cart.line_items) return <Spinner />;

    const renderCart = () => (
        <>
         <section className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
                <h2 className="h6 text-light mb-0">Products</h2>
                <Link className="btn btn-outline-primary btn-sm ps-2" to="/shop">
                    <FaAngleLeft className="me-2" /> Continue shopping
                </Link>
            </div>
            { cart.line_items.map((item, index) => (
                <CartItem key={index} item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
            )) }
            <button className="btn btn-outline-accent btn-outline-accent2 d-block mt-4" type="button" onClick={handleEmptyCart}>
                <FiTrash2 className="fs-base me-2" />Empty cart
            </button>
        </section>
        <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
        <div className="bg-white rounded-3 shadow-lg p-4">
            <div className="py-2 px-xl-2">
                <div className="text-center mb-4 pb-3 border-bottom">
                    <h2 className="h6 mb-3 pb-1">Subtotal</h2>
                    <h3 className="fw-normal">{cart.subtotal.formatted_with_symbol}</h3>
                </div>
                <Link className="btn btn-primary btn-shadow d-block w-100 mt-4" to="/checkout">
                    <FiCreditCard className="fs-lg me-2" />Proceed to Checkout
                </Link>
            </div>
        </div>
        </aside>
            {/* <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                       <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>
                        Empty Cart
                    </Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">
                        Checkout
                    </Button>
                </div>
            </div> */}
        </>
    );

    return (
        <>
        <PageTitle prevPage="Shop" prevPageLink="/shop" title="Cart" heading="Your Cart"  />
        

       <div className="container pb-5 mb-2 mb-md-4">
            <div className="row">
                {!cart.line_items.length ? renderEmptyCart() : renderCart()}
            </div>
        </div>


        </>


















        // <Container>
        //     <div className={classes.toolbar} />
        //     <Typography className={classes.title} variant="h3" gutterBottom>Shopping Cart</Typography>
        //     {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        // </Container> 
    );
};

export default Cart
