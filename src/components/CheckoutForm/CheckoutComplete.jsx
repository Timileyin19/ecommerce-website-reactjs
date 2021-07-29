import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const CheckoutComplete = ({ onEmptyCart }) => {
    const orderId = "23p2038xVas37937";
    useEffect(() => {
        onEmptyCart();
    }, [onEmptyCart])
    

    return (
        <div className="container pb-5 mb-sm-4">
            <div className="pt-5">
                <div className="card py-3 mt-sm-3">
                <div className="card-body text-center">
                    <h2 className="h4 pb-3">Thank you for your order!</h2>
                    <p className="fs-sm mb-2">Your order has been placed and will be processed as soon as possible.</p>
                    <p className="fs-sm mb-2">Make sure you make note of your order number, which is <span className="fw-medium">{orderId}</span></p>
                    <p className="fs-sm">You will be receiving an email shortly with confirmation of your order. <u>You can now:</u></p>
                    <Link className="btn btn-secondary mt-3 me-3" to="/shop">Go back shopping</Link>
                    <Link className="btn btn-primary mt-3" to="/"><FaHome />&nbsp;Home Page</Link>
                </div>
                </div>
            </div>
        </div>

    )
}

export default CheckoutComplete
