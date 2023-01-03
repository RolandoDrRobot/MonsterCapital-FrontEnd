import React from 'react';
import { Link } from 'react-router-dom';
import nftIcon from '../../assets/img/purpleorb.gif';
import homeIcon from '../../assets/img/developermonster-face.png';
import investIcon from '../../assets/img/orb.gif';
import stakeIcon from '../../assets/img/greenorb.gif';
import walletIcon from '../../assets/img/wallet.png';
import './main.css';

function Navbar() {
  return (
    <>
      <div className="navbar-bottom">
        <div className="container d-flex">
          <Link to="/" className="button">
            <img src={homeIcon} alt="" />
            Home
          </Link>
          <Link to="/nftroom" className="button">
            <img src={nftIcon} alt="" />
            NFTs
          </Link>
          <Link to="/stake" className="button">
            <img src={stakeIcon} alt="" />
            Stake
          </Link>
          <Link to="/invest" className="button">
            <img src={investIcon} alt="" />
            Invest
          </Link>
          <Link to="/wallet" className="button">
            <img src={walletIcon} alt="" />
            Wallet
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
