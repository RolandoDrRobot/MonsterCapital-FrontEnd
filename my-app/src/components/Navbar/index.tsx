import { Link } from 'react-router-dom';
import homeIcon from '../../assets/img/home.png';
import newsIcon from '../../assets/img/news.png';
import lionIcon from '../../assets/img/lion.png';
import stakeIcon from '../../assets/img/stake.png';
import walletIcon from '../../assets/img/wallet.svg';
import './main.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="button">
          <img src={homeIcon} alt="" />
          Home
        </Link>
        <Link to="/news" className="button">
          <img src={newsIcon} alt="" />
          News
        </Link>
        <Link to="/invest" className="button">
          <img src={lionIcon} alt="" />
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
