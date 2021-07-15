import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiInstagram } from "react-icons/fi";

const InfoCard = () => {
    return (
        <section className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-md-6">
                    <Link className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary" to="/">
                        <div className="card-body text-center">
                            <FiEdit className="h3 mt-2 mb-4 text-primary" />
                        <h3 className="h5 mb-1">Read the blog</h3>
                        <p className="text-muted fs-sm">Latest electronics, tech news and trends</p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-accent" to="/">
                        <div className="card-body text-center">
                            <FiInstagram className="h3 mt-2 mb-4 text-accent" />
                        <h3 className="h5 mb-1">Follow on Instagram</h3>
                        <p className="text-muted fs-sm">#teamtechshop</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default InfoCard
