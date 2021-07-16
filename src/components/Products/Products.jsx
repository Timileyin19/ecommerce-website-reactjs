import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import Spinner from '../Utility/Spinner';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Products = ({ products, onAddToCart }) => {
    // Use for Pagination Sake
    const dataLimit = 4;
    const pageLimit = 3;
    const pages = Math.round(products.length / dataLimit);
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1); 
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
     }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return products.slice(startIndex, endIndex);
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
     };

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
                    <Link className={`nav-link-style me-3 ${currentPage === 1 ? 'disabled' : ''}`} to="#" onClick={goToPreviousPage}>
                        &#60;&nbsp;
                    </Link><span className="fs-md">{`${currentPage} / ${pages}`}</span>
                    <Link className={`nav-link-style ms-3 ${currentPage === pages ? 'disabled' : ''}`} to="#" onClick={goToNextPage}>
                        &#62;
                    </Link>
                </div>
            </div>
        </div>

        <div className="row pt-3 mx-n2">
            { getPaginatedData().map((product, index) => (
                <Product key={index} product={product} onAddToCart={onAddToCart} />
            )) }
        </div>
        <hr className="my-3" />

        <nav className="d-flex justify-content-between pt-2" aria-label="Page navigation">
            <ul className="pagination">
                <li className="page-item">
                    <Link className="page-link" to="#">
                        <FaAngleLeft className="me-2" /> Prev
                    </Link>
                </li>
            </ul>
            <ul className="pagination">
                <li className="page-item d-sm-none"><span className="page-link page-link-static">{`${currentPage} / ${pages}`}</span></li>

                {getPaginationGroup().map((item, index) => (
                    <li className={`page-item ${currentPage === item ? 'active' : null} d-none d-sm-block`} key={index} onClick={changePage}>
                        <Link className="page-link" to="#">{item}</Link>
                    </li>
                ))}
            </ul>
            <ul className="pagination">
                <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">Next <FaAngleRight className="ms-2" /> 
                    </Link>
                </li>
            </ul>
            </nav>


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
