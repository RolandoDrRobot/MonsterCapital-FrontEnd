
import React from 'react';
import { globalContext } from '../../hooks/appContext';
import logoutPic from '../../assets/img/logout.png';
import './main.css';

import './main.css';

function Logout() {
  const {
    setLoginStatus,
    setEmail,
    setName
  } = React.useContext(globalContext);

  function logout() {
    setLoginStatus('');
    setEmail('');
    setName('');
  }

  return (
    <>
      <div className="logout d-flex justify-content-center">
        <button onClick={logout}>
          <img src={logoutPic} alt="" />
          <span>Logout</span>
        </button>
      </div>
      
    </>
  )
}

export default Logout;
