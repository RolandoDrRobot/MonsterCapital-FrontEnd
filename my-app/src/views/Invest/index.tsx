import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function Invest() {
  return (
    <>
      <div className="invest d-flex align-items-center justify-content-center">
        <div>
          <Link className="button mb-3" to="/login">Login</Link>
          <Link className="button" to="/newuser">Create New User</Link>
        </div>
      </div>
    </>
  )
}

export default Invest;
