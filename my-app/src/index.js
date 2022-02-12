import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './views/Home/index.js';
import Invest from './views/Invest/index.tsx';
import News from './views/News/index.tsx';
import Wallet from './views/Wallet/index.tsx';
import Stake from './views/Stake/index.tsx';
import Header from './components/Header/index.tsx';
import Navbar from './components/Navbar/index.tsx';
import NewUser from './components/NewUser/index.tsx';
import ForgotPassword from './components/ForgotPassword/index.tsx';
import Article from './components/Article/index.tsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <div id="content">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/invest' element={<Invest/>}/>
          <Route exact path='/news' element={<News/>}/>
          <Route exact path='/stake' element={<Stake/>}/>
          <Route exact path='/wallet' element={<Wallet/>}/>
          <Route exact path='/newuser' element={<NewUser/>}/>
          <Route exact path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route exact path='/article' element={<Article/>}/>
        </Routes>
      </div>
      <Navbar/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
