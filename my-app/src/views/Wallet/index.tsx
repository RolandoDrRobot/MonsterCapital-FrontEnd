import CoraWallet from '../../components/CoraWallet/index';
import RecentTransactions from '../../components/RecentTransactions/index';
import './main.css';

function Wallet() {
  return (
    <>
      <div className="wallet">
        <CoraWallet />
        <RecentTransactions />
      </div>
    </>
  )
}

export default Wallet;
