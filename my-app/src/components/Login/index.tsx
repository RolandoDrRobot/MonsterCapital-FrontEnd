import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { globalContext } from '../../hooks/appContext';
import bullIcon from '../../assets/img/bull-market.svg';
import bearIcon from '../../assets/img/bear-market.svg';
import './main.css';

function Login() {
  const { 
    loginStatus,
    setLoginStatus,
    setEmail,
    setName
   } = React.useContext(globalContext);

  const submitLogin = async (email: string, password: string) => {
    await axios.post('http://localhost:443/login', { email: email, password: password }).then((response) => {
      setLoginStatus(response.data.status);
      setEmail(response.data.email);
      setName(response.data.name);
    });
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;          
    
    submitLogin(email, password);
  }

  return (
    <>
      <div className="login">
        <img src={bullIcon} className="bull" />
        <img src={bearIcon} className="bear" />
        <form onSubmit={onSubmitForm}>
          <input name="email" placeholder="Email Address" type="email" required />
          <input name="password" placeholder="Password" type="password" required />
          <button type="submit" className="main-button">Login</button>
          <div className="d-flex justify-content-center my-3">
            <Link to="/newuser" className="text-button yellow">New user?</Link>
            <Link to="/forgotpassword" className="text-button gray">Forgot password?</Link>
          </div>
          <span className="alert-text">{loginStatus}</span>
        </form>
      </div>
    </>
  )
}

export default Login;
