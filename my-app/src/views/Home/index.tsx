
import React from 'react';
import Login from '../../components/Login/index';
import Settings from '../../components/Settings/index';
import { globalContext } from '../../hooks/appContext';
import './main.css';

function Home() {
  const { 
    loginStatus
  } = React.useContext(globalContext);

  return (
    <>
      <div className="home d-flex align-items-center justify-content-center">
        {loginStatus === 'granted' ? <Settings /> : <Login/> }
      </div>
    </>
  )
}

export default Home;
