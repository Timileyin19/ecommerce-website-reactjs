import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { FiHome, FiPocket, FiCreditCard } from 'react-icons/fi';
import Spinner from '../../Utility/Spinner';

import Cards_alt from '../../../assests/img/cards-alt.png';

import { commerce } from '../../../api/commerce';
import useStyles from './styles';
import DetailsForm from '../DetailsForm';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping Address', 'Payment details'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({})
    const [item, setItem] = useState({});

    

    const classes = useStyles();
    const history = useHistory();

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

                    setCheckoutToken(token);
                } catch {
                    if (activeStep !== steps.length) history.push('/');
                }
            };

            generateToken();
        }
    }, [cart, activeStep, history]);

    const submitData = (data) => {
        setShippingData(data);

        nextStep();
    };

    let Confirmation = () => (order.customer ? (
        <>
            <div>
                <Typography variant="h5">
                    Thank you for your Purchase, {order.customer.firstname} { order.customer.lastname }!
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">
                Back to home
            </Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    ));

    if (error) {
        Confirmation = () => (
            <>
                <Typography variant="h5">
                    Error: {error} 
                </Typography>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">
                    Back to home
                </Button>
            </>
        );
    }

    const Form = () => ((activeStep === 0) ? 
        <AddressForm checkoutToken={checkoutToken} submitData={submitData} /> : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />);



    return (
        <>
        <DetailsForm cart={cart} />
            {/* <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        { steps.map((label, index) => (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    { activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form /> }
                </Paper>
            </main> */}
        </>
    );
};

export default Checkout;