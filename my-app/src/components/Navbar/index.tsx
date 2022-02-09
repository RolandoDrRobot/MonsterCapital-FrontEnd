import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div>
          <Link className="button" to="/">Home</Link>
          <Link className="button" to="/news">News</Link>
          <Link className="button" to="/invest">Invest</Link>
          <Link className="button" to="/stake">Stake</Link>
          <Link className="button" to="/settings">Settings</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
