import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../Products/Product/Product';
import { FiArrowRight } from "react-icons/fi";
import Spinner from '../../Utility/Spinner';

const TrendingProducts = ({ products, onAddToCart }) => {
    const [trendingProducts, setTrendingProducts] = useState([]);

    const generateRandomProducts = () => {
        if (products.length <= 8) {
            setTrendingProducts(products);
        } else {
            let indexArray = [];
            for(let i = 0; i < 8; i++) {
                for (let j = 0; j = 100000; j++) {
                   let randomNum = Math.floor(Math.random() * products.length);
                   if (!(indexArray.includes(randomNum))) {
                        indexArray[i] = randomNum; 
                        break 
                   }
                }  
            }
            let trendyingProd = [];
            for (let k = 0; k < indexArray.length; k++) {
                trendyingProd.push(products[indexArray[k]]);
            }
            setTrendingProducts(trendyingProd);
        }
        
    }

    useEffect(() => {
        generateRandomProducts();
    }, [])

    return (
        <>
        <section className="container pt-5">
                <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                    <h2 className="h3 mb-0 pt-3 me-2">Trending products</h2>
                    <div className="pt-3">
                        <Link className="btn btn-outline-accent btn-sm" to="/shop">More products
                            <FiArrowRight className="ms-1 me-n1" />
                        </Link>
                    </div>
                </div>
                <div className="row pt-2 mx-n2">
                    { trendingProducts.length > 0 ? (trendingProducts.map((product, index) => (
                        <Product key={index} product={product} onAddToCart={onAddToCart} />
                        ))) :  <Spinner /> }
                </div>
            </section>
        </>
    )
}

export default TrendingProducts
