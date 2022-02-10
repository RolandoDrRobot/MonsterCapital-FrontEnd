import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/img/home.png';
import newsIcon from '../../assets/img/news.png';
import investIcon from '../../assets/img/invest.png';
import stakeIcon from '../../assets/img/stake.svg';
import settingsIcon from '../../assets/img/settings.png';
import './main.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="button">
          <img src={homeIcon} />
          Home
        </Link>
        <Link to="/news" className="button">
          <img src={newsIcon} />
          News
        </Link>
        <Link to="/invest" className="button">
          <img src={investIcon} />
          Invest
        </Link>
        <Link to="/stake" className="button">
          <img src={stakeIcon} />
          Stake
        </Link>
        <Link to="/settings" className="button">
          <img src={settingsIcon} />
          Settings
        </Link>
      </div>
    </>
  )
}

export default Navbar;
