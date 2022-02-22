import * as React from 'react';
import { useLocalStorage } from './useLocalStorage';

const globalContext = React.createContext();

// Provider in your app
function GlobalContextProvider(props) {
  const [loginStatus, setLoginStatus] = useLocalStorage('loginStatus', '');
  const [email, setEmail] = useLocalStorage('email', 'anyemail@gmail.com');
  const [name, setName] = useLocalStorage('name', 'John Doe');

  return (
    <globalContext.Provider value={{
        loginStatus,
        setLoginStatus,
        email,
        setEmail,
        name,
        setName
      }}>
      {props.children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalContextProvider };
