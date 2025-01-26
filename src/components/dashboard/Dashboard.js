import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';  
import { getUsers } from '../../api';
import UserTable from '../userTable/UserTable';
import { AppBar, Toolbar,Container, Typography, Grid, Button, Box } from '@mui/material';
import { handleLogout } from '../../utils/logout';  
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);  
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsers();
        setUsers(data);
      } catch (err) {
        const token = localStorage.getItem('token');
        if (token) {
          setError('Failed to fetch users');
          console.error('Error fetching users:', err);
        } else {
          navigate('/login');
        }
        
        
      }
    };

    fetchUsers();
  }, []);

  return (
   
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            User Management
          </Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        {error && (
          <Typography color="error" style={{ marginBottom: "10px" }}>
            {error}
          </Typography>
        )}

        <UserTable users={users} />
      </Container>
    </div>
  );
};

export default Dashboard;
