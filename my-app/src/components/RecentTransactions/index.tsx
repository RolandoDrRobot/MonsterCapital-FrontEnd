import sendIcon from '../../assets/img/send.png';
import receiveIcon from '../../assets/img/receive.png';
import loadingIcon from '../../assets/img/loading.png';
import './main.css';

function RecentTransactions() {
  return (
    <>
      <div className="transactions">
        <h4>Recent transactions</h4>

        <div className="transaction d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img className="send-receive-pic" src={loadingIcon} alt="" />
            </div>
            <div>
              <span>Sending</span><br />
              <span>to: 0x3432...4342</span>
            </div>
          </div>
          <div className="">
            <span>200</span>
          </div>
        </div>

        <div className="transaction d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img className="send-receive-pic" src={receiveIcon} alt="" />
            </div>
            <div>
              <span>Received</span><br />
              <span>to: 0x3432...4342</span>
            </div>
          </div>
          <div className="">
            <span>30</span>
          </div>
        </div>

        <div className="transaction d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img className="send-receive-pic" src={sendIcon} alt="" />
            </div>
            <div>
              <span>Sent</span><br />
              <span>to: 0x3432...4342</span>
            </div>
          </div>
          <div className="">
            <span>15</span>
          </div>
        </div><div className="transaction d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img className="send-receive-pic" src={receiveIcon} alt="" />
            </div>
            <div>
              <span>Received</span><br />
              <span>to: 0x3432...4342</span>
            </div>
          </div>
          <div className="">
            <span>200</span>
          </div>
        </div>

        <div className="transaction d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img className="send-receive-pic" src={sendIcon} alt="" />
            </div>
            <div>
              <span>Sent</span><br />
              <span>to: 0x3432...4342</span>
            </div>
          </div>
          <div className="">
            <span>200</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentTransactions;
