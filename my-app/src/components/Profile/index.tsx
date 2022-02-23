
import React from 'react';
import { globalContext } from '../../hooks/appContext';
import profileIcon from '../../assets/img/monkey.png';
import './main.css';

function Profile() {
  const {
    name,
    email
  } = React.useContext(globalContext);

  return (
    <>
      <div className="profile text-center">
        <img src={profileIcon} className="mb-3" alt="" />
        <div>
          <h3>{name}</h3>
          <p className="mb-0">{email}</p>
        </div>
      </div>
    </>
  )
}

export default Profile;
