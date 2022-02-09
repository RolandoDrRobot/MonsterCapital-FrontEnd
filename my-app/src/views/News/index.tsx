import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function News() {
  return (
    <>
      <div className="news">
        <div>
          <Link className="button mb-3" to="/login">Login</Link>
          <Link className="button" to="/newuser">Create New User</Link>
        </div>
      </div>
    </>
  )
}

export default News;
