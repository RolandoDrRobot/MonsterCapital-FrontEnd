
import React from 'react';
import { globalContext } from '../../hooks/appContext';
import profileIcon from '../../assets/img/profile.png';
import './main.css';

function Profile() {
  const {
    name,
    email
  } = React.useContext(globalContext);

  return (
    <>
      <div className="profile d-flex justify-content-around align-items-center">
        <img src={profileIcon} />
        <div>
          <span>{name}</span>
          <span>{email}</span>
        </div>
      </div>
    </>
  )
}

export default Profile;
