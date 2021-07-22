import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import Spinner from '../Utility/Spinner';
import PageTitle from '../Utility/PageTitle';
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

     // note that useEffect method is called whenever the State change 
     useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
      }, [currentPage]);

    const classes = useStyles();

    if (!products.length) return <Spinner />

    return (
        <>
        <div className="bg-dark pt-4 pb-5">
            <PageTitle prevPage="Shop" prevPageLink="/shop" title="Product Page" heading="Products Page" />
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
                    <Link className="page-link" to="#" onClick={goToPreviousPage}>
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
                    <Link className="page-link" to="#" aria-label="Next" onClick={goToNextPage}>Next <FaAngleRight className="ms-2" /> 
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
