import React from 'react';


import Hero from './Components/Hero';
import TrendingProducts from './Components/TrendingProducts';

const Landing = ({ products, onAddToCart }) => {
    
    return (
        <>
            <Hero />
            <TrendingProducts products={products} onAddToCart={onAddToCart} />
        </>
    )
}

export default Landing
