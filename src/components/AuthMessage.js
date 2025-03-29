import React, { useContext } from 'react';
import { AuthContext } from './LoginForm';
import DisplayStatus from './DisplayStatus';
import '../App.css';

const AuthMessage = () => {
  const { auth } = useContext(AuthContext);

  if (!auth.error && !auth.isAuthenticated) return null;

  return (
    <DisplayStatus
      type={auth.isAuthenticated ? 'success' : 'error'}
      message={auth.error || 'Authentication successful'}
    />
  );
};


export default AuthMessage;