import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/img/home.png';
import newsIcon from '../../assets/img/news.png';
import investIcon from '../../assets/img/invest.png';
import stakeIcon from '../../assets/img/stake.png';
import walletIcon from '../../assets/img/coin.png';
import './main.css';
import Monkey from '../Monkey';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Monkey />
        <Link to="/" className="button">
          <img src={homeIcon} alt="" />
          Home
        </Link>
        <Link to="/news" className="button">
          <img src={newsIcon} alt="" />
          News
        </Link>
        <Link to="/invest" className="button">
          <img src={investIcon} alt="" />
          Invest
        </Link>
        <Link to="/stake" className="button">
          <img src={stakeIcon} alt="" />
          Stake
        </Link>
        <Link to="/wallet" className="button">
          <img src={walletIcon} alt="" />
          Wallet
        </Link>
      </div>
    </>
  )
}

export default Navbar;
