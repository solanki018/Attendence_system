// useAuthRedirect.js
import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in", { replace: true });
    }
  }, [isAuthenticated, navigate]);
};

export default useAuthRedirect;
