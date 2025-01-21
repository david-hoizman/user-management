import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { login } from '../../api';
import { toast } from 'react-toastify';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {
  FormContainer,
  LoginTitle,
  ErrorMessage,
  InputField,
  SubmitButton,
} from './loginStyles';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login: loginContext } = useContext(AuthContext);


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(credentials);
      localStorage.setItem('token', data.token);
      loginContext(data.token);
      console.log('Login success:', data);
  
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
  
      if (err.response) {
        setError(err.response.data.message || 'Invalid username or password');
      } else {
        setError('An unexpected error occurred');
      }
  
      toast.error("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };
  
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            User Management
          </Typography>
        </Toolbar>
      </AppBar>

      <FormContainer onSubmit={handleSubmit}>
        <LoginTitle>Login</LoginTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <InputField
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <SubmitButton type="submit">Login</SubmitButton>
      </FormContainer>
    </div>
  );
};

export default Login;
