import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { commerce } from './api/commerce';

import { Navbar, Products , Cart, Checkout, SigninModal, Landing, ProductDetails, PaymentMethods, CheckoutComplete, Footer } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fectchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, {
      quantity });

      setCart(response.cart);
  }

  const handleRemoveFromCart = async (lineItemId) => {
      const response = await commerce.cart.remove(lineItemId);

      setCart(response.cart);
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch(error) {
      setErrorMessage(error.data.error.message);
    }
  };

  const handleRemoveFromCartWithItemName = (item_name) => {
    let item_id;
    let newItemName = item_name.slice(0, -1);
    cart.line_items.map((item) => {
      if (item.name === newItemName) {
        item_id = item.id
      }
    })
    if (item_id) {
      handleRemoveFromCart(item_id);
    }
  }

  

  useEffect(() => {
    fetchCart();
    fectchProducts();
  }, []);

  return (
    <main className="page-wrapper">
      <Router>
        <SigninModal />
        <Navbar cart={cart} handleRemoveFromCartWithItemName={handleRemoveFromCartWithItemName} />
        <Switch>
        <Route exact path="/">
            <Landing products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/shop">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/product/:id">
            <ProductDetails addToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>

          {/* checkout URLs */}
          <Route exact path="/checkout">
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
          <Route exact path="/checkout/payment">
              <PaymentMethods cart={cart} />
          </Route>
          <Route exact path="/checkout/complete">
              <CheckoutComplete onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path='*'>
              { 'Not found page' }
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
