import { Link } from 'react-router-dom';
import './main.css';

function NewUser() {
  return (
    <>
      <div className="new-user d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <form className="new-user-form" id="new-user-form">
            <input placeholder="Email Address" type="email" />
            <input placeholder="New Password" type="password" />
            <input placeholder="What's your name?" type="text" />
            <button className="main-button">Create User</button>
            <Link to="/" className="text-button gray text-center d-block">Go back</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewUser;
