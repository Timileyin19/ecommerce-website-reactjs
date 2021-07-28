import React from 'react';
import DetailsForm from '../DetailsForm';


const Checkout = ({ cart }) => {
    return (
        <>
        <DetailsForm cart={cart} />
        </>
    );
};

export default Checkout;