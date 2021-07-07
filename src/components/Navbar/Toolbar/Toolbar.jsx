import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaMapMarkerAlt } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";

const Toolbar = () => {
    return (
        <div className="topbar topbar-dark bg-dark">
        <div className="container">
          <div>
            <div className="topbar-text text-nowrap d-none d-md-inline-block border-start border-light ps-3 ms-3">
                <span className="text-muted me-1">Available 24/7 at</span>
                <Link className="topbar-link" to="tel:+2348108927010">+2348108927010</Link>
            </div>
          </div>
          <div className="topbar-text dropdown d-md-none ms-auto">
              <Link className="topbar-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Wishlist / Compare / Track</Link>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to="/"><FaRegHeart className="text-muted me-2" />Wishlist (3)</Link></li>
              <li><Link className="dropdown-item" to="/"><BiGitCompare className="text-muted me-2" />Compare (3)</Link></li>
              <li><Link className="dropdown-item" to="/"><FaMapMarkerAlt className="text-muted me-2" />Order tracking</Link></li>
            </ul>
          </div>
          <div className="d-none d-md-block ms-3 text-nowrap">
              <Link className="topbar-link d-none d-md-inline-block" to="/"><FaRegHeart className="mt-n1" /> Wishlist (3)</Link>
              <Link className="topbar-link ms-3 ps-3 border-start border-light d-none d-md-inline-block" to="/"><BiGitCompare className="mt-n1" /> Compare (3)</Link>
              <Link className="topbar-link ms-3 border-start border-light ps-3 d-none d-md-inline-block" to="/"><FaMapMarkerAlt className="mt-n1" /> Order tracking</Link>
        </div>
        </div>
      </div>
      
    )
}

export default Toolbar;
