import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  
import { ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import AddUser from './components/addUser/AddUser';
import Home from './components/home/home';

const App = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </AuthProvider>

    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
  </Router>
);

export default App;
