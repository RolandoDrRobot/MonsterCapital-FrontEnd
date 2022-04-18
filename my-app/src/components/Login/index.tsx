import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { globalContext } from '../../hooks/appContext';
import Loading from '../../components/Loading/index';
import './main.css';

function Login() {
  let [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { 
    loginStatus,
    setLoginStatus,
    setEmail,
    setName
   } = React.useContext(globalContext);

  const submitLogin = async (email: string, password: string) => {
    setIsLoading(true);
    await axios.post('http://localhost:443/login', { email: email, password: password }).then((response) => {
      setLoginStatus(response.data.status);
      setEmail(response.data.email);
      setName(response.data.name);
    }).then(() => {
      setIsLoading(false);
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
        <form onSubmit={onSubmitForm}>
          <input name="email" placeholder="Email Address" type="email" required />
          <input name="password" placeholder="Password" type="password" required />
          <button type="submit" className="main-button">Login</button>
          <div className="d-flex justify-content-center mt-3">
            <Link to="/newuser" className="text-button yellow">New user?</Link>
            <Link to="/forgotpassword" className="text-button gray">Forgot password?</Link>
          </div>
          <span className="alert-text mt-2">{loginStatus}</span>
        </form>
        { isLoading === true ? <Loading /> : <></> }
      </div>
    </>
  )
}

export default Login;
