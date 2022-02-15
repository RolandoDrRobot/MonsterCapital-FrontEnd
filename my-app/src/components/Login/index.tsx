import { Link } from 'react-router-dom';
import bullIcon from '../../assets/img/bull-market.svg';
import bearIcon from '../../assets/img/bear-market.svg';
import './main.css';

function Login() {
  return (
    <>
      <div className='login'>
        <img src={bullIcon} className="bull" />
        <img src={bearIcon} className="bear" />
        <form>
          <input placeholder="Email Address" type="text" />
          <input placeholder="Password" type="password" />
          <p className="main-button">Login</p>
          <div className="d-flex justify-content-center my-3">
            <Link to="/newuser" className="text-button yellow">New user?</Link>
            <Link to="/forgotpassword" className="text-button gray">Forgot password?</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;
