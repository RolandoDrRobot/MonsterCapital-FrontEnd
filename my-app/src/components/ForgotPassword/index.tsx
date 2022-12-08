import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function ForgotPassword() {
  return (
    <>
      <div className="forgot-password d-flex align-items-center">
        <div className="d-flex justify-content-center">
          <form className="reset-password-form" id="reset-password-form">
            <input className="mb-4" placeholder="Email Address" type="email" />
            <input className="mb-4" placeholder="What's your name?" type="text" />
            <button className="main-button mb-4">Reset Password</button>
            <Link to="/" className="text-button gray text-center d-block">Go back</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;
