import React from 'react';
import articlePic from '../../assets/img/post-team.jpg';
import { Link } from 'react-router-dom';
import './main.css';

function Meetings () {

  return (
    <>
      <div className="new">
        <Link className='button' to="/article">
          <img src={articlePic} alt="" />
          <h5>Sky Station</h5>
        </Link>
      </div>
      <div className="new">
        <Link className='button' to="/article">
          <img src={articlePic} alt="" />
          <h5>Spaceship</h5>
        </Link>
      </div>
      <div className="new">
        <Link className='button' to="/article">
          <img src={articlePic} alt="" />
          <h5>Mystic Cave</h5>
        </Link>
      </div>
      <div className="new">
        <Link className='button' to="/article">
          <img src={articlePic} alt="" />
          <h5>Creadore Room</h5>
        </Link>
      </div>
    </>
  )
}

export default Meetings;