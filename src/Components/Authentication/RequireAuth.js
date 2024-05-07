import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Components/Authentication/Auth';

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth?.isLoggedIn) {
    return (
      <Navigate to="/login" state={{ path: location.pathname }}></Navigate>
    );
  }
  return children;
};
