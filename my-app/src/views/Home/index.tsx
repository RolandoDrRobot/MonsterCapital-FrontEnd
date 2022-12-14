
import React from 'react';
import Homescreen from '../../components/Homescreen/index';
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
        {loginStatus === 'granted' ? <Settings /> : <Homescreen/> }
      </div>
    </>
  )
}

export default Home;
