import React from 'react';


import Hero from './Components/Hero';
import TrendingProducts from './Components/TrendingProducts';
import PromoBanner from './Components/PromoBanner';
import InfoCard from './Components/InfoCard';

const Landing = ({ products, onAddToCart }) => {
    
    return (
        <>
            <Hero />
            <TrendingProducts products={products} onAddToCart={onAddToCart} />
            <PromoBanner products={products} />
            <InfoCard />
        </>
    )
}

export default Landing
