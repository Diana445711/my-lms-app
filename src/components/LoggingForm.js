import React, { useState, useContext, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayStatus from './DisplayStatus';
import Header from "./Header";
import Footer from "./Footer";
import '../App.css';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    username: '',
    error: ''
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState({ type: '', text: '' });
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (message.type === 'success') {
      const timer = setTimeout(() => navigate('/courses'), 2000);
      return () => clearTimeout(timer);
    }
  }, [message, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (!formData.username || !formData.password) {
        setMessage({
            type: 'error', 
            text: 'Username and password are required'
        });
        return;
    }
    
    if (formData.password.length < 8) {
        setMessage({
            type: 'error',
            text: 'Password must be at least 8 characters'
        });
        return;
    }
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const matchedUser = users.find(
          (user) =>
            user.username === formData.username &&
            user.email === formData.password
        );

        if (matchedUser) {
          setMessage({
            type: 'success',
            text: 'Login successful! Redirecting...',
          });
          setAuth({
            isAuthenticated: true,
            username: matchedUser.username,
            error: '',
          });
        } else {
          setMessage({
            type: 'error',
            text: 'Invalid username or password',
          });
        }
      } catch (error) {
        setMessage({
          type: 'error',
          text: 'Login failed. Please try again',
        });
      }
  };

  return (
    <div className="login-page">

      <form className="login-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Username/Email"
        value={formData.username}
        onChange={(e) => setFormData({ 
            ...formData, 
            username: e.target.value 
        })}
        />
    <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({
            ...formData,
            password: e.target.value
        })}
    />
    <button type="submit">Login</button>
    <a href="#" className="forgot-password">Forgot Password?</a>
    {message.text && (
    <DisplayStatus type={message.type} message={message.text} />
    )}
    </form>

    </div>
  );
};

export default LoginForm;