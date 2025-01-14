
import React from 'react';
import Dashboard from '../dashboard/Dashboard'; 
import { Navigate } from 'react-router-dom';

const Home = () => {
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" />;
    }
  return (
    <div>
      <Dashboard /> 
    </div>
  );
};

export default Home;
