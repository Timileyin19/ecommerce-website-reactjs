import React from 'react';
import { Container, Typography, Button, Grid  } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Spinner from '../Utility/Spinner';




import CartItem from './CartItem/CartItem';
import useStyles from './styles';

function Cart({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
    const classes = useStyles();

    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, 
            <Link className={classes.link} to="/">
                start adding items
            </Link>
        </Typography>
    );

    if (!cart.line_items) return <Spinner />;

    const renderCart = () => (
        <>
            <Grid container spacing={3}>
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
            </div>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Shopping Cart</Typography>
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container> 
    );
};

export default Cart
