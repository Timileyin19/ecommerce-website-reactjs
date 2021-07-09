import React from 'react';
import { FaUnlock, FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignInModal = () => {
    // note that i will integrate firebase signin with the project (Idea from Brad Traversy ClientPanel project)
    return (
   <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header bg-secondary">
        <ul className="nav nav-tabs card-header-tabs" role="tablist">
            <li className="nav-item"><Link className="nav-link fw-medium active" to="#signin-tab" data-bs-toggle="tab" role="tab" aria-selected="true">
                <FaUnlock className="me-2 mt-n1" />Sign in</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link fw-medium" to="#signup-tab" data-bs-toggle="tab" role="tab" aria-selected="false">
                <FaRegUser className="me-2 mt-n1" />Sign up</Link>
            </li>
        </ul>
        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body tab-content py-4">
        <form className="needs-validation tab-pane fade show active" autoComplete="off" noValidate id="signin-tab">
          <div className="mb-3">
            <label className="form-label" htmlFor="si-email">Email address</label>
            <input className="form-control" type="email" id="si-email" placeholder="johndoe@example.com" required />
            <div className="invalid-feedback">Please provide a valid email address.</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="si-password">Password</label>
            <div className="password-toggle">
              <input className="form-control" type="password" id="si-password" required />
              <label className="password-toggle-btn" aria-label="Show/hide password">
                <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator" />
              </label>
            </div>
          </div>
          <div className="mb-3 d-flex flex-wrap justify-content-between">
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="si-remember" />
              <label className="form-check-label" htmlFor="si-remember">Remember me</label>
            </div><Link className="fs-sm" to="#">Forgot password?</Link>
          </div>
          <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Sign in</button>
        </form>
        <form className="needs-validation tab-pane fade" autoComplete="off" noValidate id="signup-tab">
          <div className="mb-3">
            <label className="form-label" htmlFor="su-name">Full name</label>
            <input className="form-control" type="text" id="su-name" placeholder="John Doe" required />
            <div className="invalid-feedback">Please fill in your name.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="su-email">Email address</label>
            <input className="form-control" type="email" id="su-email" placeholder="johndoe@example.com" required />
            <div className="invalid-feedback">Please provide a valid email address.</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="su-password">Password</label>
            <div className="password-toggle">
              <input className="form-control" type="password" id="su-password" required />
              <label className="password-toggle-btn" aria-label="Show/hide password">
                <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator" />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="su-password-confirm">Confirm password</label>
            <div className="password-toggle">
              <input className="form-control" type="password" id="su-password-confirm" required />
              <label className="password-toggle-btn" aria-label="Show/hide password">
                <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator" />
              </label>
            </div>
          </div>
          <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</div>

    )
}

export default SignInModal
