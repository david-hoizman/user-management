import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';  
import { getUsers } from '../../api';
import UserTable from '../userTable/UserTable';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { handleLogout } from '../../utils/logout';  

const Dashboard = () => {
  const { logout } = useContext(AuthContext);  // גישה לפונקציית logout מתוך הקונטקסט
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box className="header-box">
        <Typography variant="h4" component="h2" className="title">
          User Management
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
      </Box>

      <Grid container spacing={2} className="button-container">
        <Grid item>
          <Button variant="contained" color="secondary" onClick={logout}>
            Logout
          </Button>
        </Grid>
      </Grid>

      <UserTable users={users} />
    </Container>
  );
};

export default Dashboard;
