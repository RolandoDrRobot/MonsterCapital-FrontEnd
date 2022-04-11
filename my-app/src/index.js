import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import alertOptions from './utils/alertOptions';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalContextProvider } from './hooks/appContext';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import './index.css';

import ConnectOnPageLoad from './components/ConnectOnPageLoad/index';
import Home from './views/Home/index';
import Invest from './views/Invest/index';
import News from './views/News/index';
import Wallet from './views/Wallet/index';
import Stake from './views/Stake/index';
import NftRoom from './views/NftRoom/index';
import NftCollection from './components/NftCollection/index';
import NftOwner from './components/NftOwner/index';
import NftDetails from './components/NftDetails/index';
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
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <GlobalContextProvider>
          <Router>
            <ConnectOnPageLoad />
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
                <Route path='/nftroom' element={<NftRoom/>}/>
                <Route path='/nftroom/:tokenId' element={<NftDetails/>}/>
                <Route path='/nftcollection' element={<NftCollection/>}/>
                <Route path='/nftowner/:ownerAddress' element={<NftOwner/>}/>
              </Routes>
            </div>
            <Navbar/>
          </Router>
        </GlobalContextProvider>
      </Web3ReactProvider>
    </AlertProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
