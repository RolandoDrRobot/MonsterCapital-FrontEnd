
import React from 'react';
import { globalContext } from '../../hooks/appContext';
import './main.css';

function Logout() {
  const {
    name,
    email
  } = React.useContext(globalContext);

  return (
    <>
    </>
  )
}

export default Logout;
