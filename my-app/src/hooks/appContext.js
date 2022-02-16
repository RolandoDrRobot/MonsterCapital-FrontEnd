import * as React from 'react';

const globalContext = React.createContext();

// Provider in your app
function GlobalContextProvider(props) {
  const [loginStatus, setLoginStatus] = React.useState('Welcome to Coravida!');
  const [email, setEmail] = React.useState('anyemail@gmail.com');

  return (
    <globalContext.Provider value={{
        loginStatus,
        setLoginStatus,
        email,
        setEmail
      }}>
      {props.children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalContextProvider };
