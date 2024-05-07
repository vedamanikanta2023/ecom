import { useDispatch, useSelector } from 'react-redux';
import { app } from '../actions/appActions';

const { createContext, useState, useContext } = require('react');

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isUserLoggedIn = useSelector((state) => state.app.isLoggedIn);
  const dispatch = useDispatch();

  const [isLoggedIn, setLoggedIn] = useState(isUserLoggedIn);

  const login = (val) => {
    dispatch(app(val));
    setLoggedIn(val);
  };

  const logout = () => {
    dispatch(app(false));
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
