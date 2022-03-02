import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalContextProvider } from './hooks/appContext';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import './index.css';

import Home from './views/Home/index';
import Invest from './views/Invest/index';
import News from './views/News/index';
import Wallet from './views/Wallet/index';
import Stake from './views/Stake/index';
import Header from './components/Header/index';
import Navbar from './components/Navbar/index';
import NewUser from './components/NewUser/index';
import ForgotPassword from './components/ForgotPassword/index';
import Article from './components/Article/index';

function getLibrary(provider) {
  return new Web3(provider)
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <GlobalContextProvider>
        <Router>
          <Header/>
          <div id="content">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/invest' element={<Invest/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/stake' element={<Stake/>}/>
              <Route path='/wallet' element={<Wallet/>}/>
              <Route path='/newuser' element={<NewUser/>}/>
              <Route path='/forgotpassword' element={<ForgotPassword/>}/>
              <Route path='/article' element={<Article/>}/>
            </Routes>
          </div>
          <Navbar/>
        </Router>
      </GlobalContextProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
