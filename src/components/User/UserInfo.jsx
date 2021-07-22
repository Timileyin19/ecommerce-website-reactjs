import React from 'react';
import User from '../../assests/img/user.png';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserInfo = () => {
    return (
        <div className="d-sm-flex justify-content-between align-items-center bg-secondary p-4 rounded-3 mb-grid-gutter">
          <div className="d-flex align-items-center">
            <div className="img-thumbnail rounded-circle position-relative flex-shrink-0">
                <span className="badge bg-warning position-absolute end-0 mt-n2" data-bs-toggle="tooltip" title="Reward points">352</span>
                <img className="rounded-circle" src={User} width={90} alt="John Doe" /></div>
            <div className="ps-3">
              <h3 className="fs-base mb-0">Registered Username</h3>
              <span className="text-accent fs-sm">emailhere@outlook.com</span>
            </div>
          </div>
          <Link className="btn btn-light btn-sm btn-shadow mt-3 mt-sm-0" to="/profile">
              <FaRegEdit className="me-2" /> Edit profile
            </Link>
        </div>
    )
}

export default UserInfo
