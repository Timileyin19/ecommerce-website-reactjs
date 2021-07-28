import React, { useState, useEffect } from 'react';
import Spinner from '../../Utility/Spinner';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

const PromoBanner = ({ products }) => {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');
    const [product, setProduct] = useState('');
    

    const getRandomProduct = () => {
        setProduct(products[Math.floor(Math.random() * products.length)]);
    }
    
    
    const updateCountdown = () => {
        const currentYear = new Date().getFullYear();
        const promoEndTime = new Date(`December 31 ${currentYear + 10} 00:00:00`);
        const currentTime = new Date();
        const diff = promoEndTime - currentTime;
      
        setHour(Math.floor(diff / 1000 / 60 / 60) % 24);
        setMinute(Math.floor(diff / 1000 / 60) % 60);
        setSecond(Math.floor(diff / 1000) % 60);
      }

      setInterval(updateCountdown, 1000);

      useEffect(() => {
          getRandomProduct();
      }, [products])
      

    return (
        <>{
            product ? (
                <section className="container mt-4 mb-grid-gutter">
                    <div className="bg-faded-info rounded-3 py-4">
                        <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="px-4 pe-sm-0 ps-sm-5">
                            <span className="badge bg-danger">Limited Offer</span>
                            <h3 className="mt-4 mb-1 text-body fw-light">All new</h3>
                            <h2 className="mb-1">{product.name}</h2>
                            <p className="h5 text-body fw-light">at discounted price. Hurry up!</p>
                            <div className="countdown py-2 h4" data-countdown="07/01/2021 07:00:00 PM">
                                <div className="countdown-hours"><span className="countdown-value" /><span className="countdown-label text-muted">{hour} <small>&nbsp;Hours</small> </span></div>
                                <div className="countdown-minutes"><span className="countdown-value" /><span className="countdown-label text-muted">{minute} <small>&nbsp;Minutes</small> </span></div>
                                <div className="countdown-seconds"><span className="countdown-value" /><span className="countdown-label text-muted">{second} <small>&nbsp;Seconds</small> </span></div>
                            </div>
                            <Link className="btn btn-accent" to="/shop">View offers&nbsp;
                                <FiArrowRight className="fs-ms ms-1" /></Link>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <img src={product.media.source} alt={product.name} /></div>
                        </div>
                    </div>
                </section>

            ) : <Spinner />
        } </>
        

    )
}

export default PromoBanner;
