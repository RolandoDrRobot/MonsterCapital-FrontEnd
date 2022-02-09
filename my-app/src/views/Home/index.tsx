import React from 'react';
import { Link } from 'react-router-dom';
import bullIcon from '../../assets/img/bull-market.svg';
import bearIcon from '../../assets/img/bear-market.svg';
import './main.css';

function Home() {

  const [showNewUserModal, setShowNewUserModal] = React.useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = React.useState(false);

  return (
    <>
      <div className="home d-flex align-items-center justify-content-center">
        <div className='login'>
          <img src={bullIcon} className="bull" />
          <img src={bearIcon} className="bear" />
          <form>
              <input placeholder="Username" type="text" />
              <input placeholder="Password" type="password" />
              <p className="button">Login</p>
              <div className="d-flex justify-content-center my-3">
                <button className="new-user" 
                  onClick={e => {
                    e.preventDefault();
                    setShowNewUserModal(true);
                  }}>New user?</button>
                <button className="forgot-password" 
                  onClick={e => {
                    e.preventDefault();
                    setShowForgotPasswordModal(true);
                  }}>Forgot password?</button>
              </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Home;
