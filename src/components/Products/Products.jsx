import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import Spinner from '../Utility/Spinner';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    if (!products.length) return <Spinner />

    return (
        <>
        <div className="bg-dark pt-4 pb-5">
            <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
                <div className="d-lg-flex justify-content-between pb-3">
                <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                        <li className="breadcrumb-item">
                            <Link className="text-nowrap" to="/">
                                <FiHome />&nbsp;Home</Link>
                        </li>
                        <li className="breadcrumb-item text-nowrap">
                            <Link to="#"> &#62;&nbsp; Shop</Link>
                        </li>
                        <li className="breadcrumb-item text-nowrap active" aria-current="page">&#62;&nbsp; Product Page</li>
                    </ol>
                    </nav>
                </div>
                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                    <h1 className="h3 text-light mb-0">Products Page</h1>
                </div>
                </div>
            </div>
            </div>



        <div className="container pb-5 mb-2 mb-md-4">
        <div className="bg-light shadow-lg rounded-3 p-4 mt-n5 mb-4">
            <div className="d-flex justify-content-between align-items-center">
            <div class="dropdown me-2">
                <Link class="btn btn-outline-secondary" to="#">
                    <FiHome class="me-2" />Shop Page
                </Link>
            </div>
                <div className="d-flex">
                    <Link className="nav-link-style me-3" to="#">
                        &#60;&nbsp;
                    </Link><span className="fs-md">1 / 5</span>
                    <Link className="nav-link-style ms-3" to="#">
                        &#62;
                    </Link>
                </div>
            </div>
        </div>

        <div className="row pt-3 mx-n2">
            { products.map((product) => (
               <Product key={product.id} product={product} onAddToCart={onAddToCart} /> 
            )) }
        </div>

        </div>
        </>








        // <main className={classes.content}>
        //     <div className={classes.toolbar} />
        //     <Grid container justify="center" spacing={4}>
        //         {products.map((product) => (
        //             <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
        //                  <Product product={product} onAddToCart={onAddToCart} />
        //             </Grid>
        //         ))}
        //     </Grid>
        // </main>
    )
}

export default Products;
