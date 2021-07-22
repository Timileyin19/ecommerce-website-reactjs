import React from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PageTitle = ({ prevPage, prevPageLink, title, heading }) => {
    return (
        <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
            <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                    <li className="breadcrumb-item">
                        <Link className="text-nowrap" to="/">
                            <FiHome /> Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item text-nowrap">
                        <Link to={prevPageLink}>&#62;&nbsp; {prevPage} </Link>
                    </li>
                    <li className="breadcrumb-item text-nowrap active" aria-current="page">&#62;&nbsp; {title}</li>
                </ol>
            </nav>
            </div>
            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0"> {heading} </h1>
            </div>
        </div>
        </div>
    )
}

export default PageTitle
