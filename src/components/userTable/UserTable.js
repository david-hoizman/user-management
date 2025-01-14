import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser } from '../../api'; 
import { Table, TableBody, TableCell, TableContainer as MuiTableContainer, TableHead, TableRow, Paper, Modal, Button } from '@mui/material';
import { Container, TableContainer, StyledButton } from './userTableStyles';
import AddUser from './../addUser/AddUser';
import UserForm from '../userForm/UserForm';
import { toast } from 'react-toastify';  


const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);  
  const [userToDelete, setUserToDelete] = useState(null); 

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data || response);
      setLoading(false);
    } catch (err) {
      setError('Error loading users');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


const handleDelete = async () => {
  if (userToDelete) {
    try {
      await deleteUser(userToDelete._id);
      setUsers(users.filter((user) => user._id !== userToDelete._id));
      setOpenDeleteModal(false);  
      setUserToDelete(null);
      toast.success("User deleted successfully!"); 
    } catch (err) {
      setError('Error deleting user');
      toast.error("Failed to delete user");  
    }
  }
};


  const handleEdit = (user) => {
    setCurrentUser(user); 
    setOpenEditUser(true);  
  };

  const handleUserAdded = () => {
    fetchUsers();
  };

const handleUpdate = async (updatedUser) => {
    try {
      await updateUser(updatedUser._id, updatedUser);
      
      setUsers(users.map(user => user._id === updatedUser._id ? updatedUser : user));
      
      setOpenEditUser(false);
      
      toast.success("User updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    } catch (err) {
      setError('Error updating user');
      
      toast.error("Error updating user", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };
  

  const openDeleteConfirmation = (user) => {
    setUserToDelete(user);  
    setOpenDeleteModal(true);  
  };

  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
    setUserToDelete(null);  
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <StyledButton onClick={() => setOpenAddUser(true)} variant="contained" color="primary">Add User</StyledButton>
      <TableContainer component={Paper}>
        <Table aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' , fontSize: '16px'}}>Username</TableCell>
              <TableCell style={{ fontWeight: 'bold' , fontSize: '16px'}}>Full Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' , fontSize: '16px'}}>Email</TableCell>
              <TableCell style={{ fontWeight: 'bold' , fontSize: '16px'}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <StyledButton style={{ minWidth: '89px' }} onClick={() => handleEdit(user)} variant="outlined" color="primary">Edit</StyledButton>
                  <StyledButton onClick={() => openDeleteConfirmation(user)} variant="outlined" color="secondary">Delete</StyledButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={openAddUser} onClose={() => setOpenAddUser(false)}>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
          <AddUser onClose={() => setOpenAddUser(false)} onUserAdded={handleUserAdded} />
        </div>
      </Modal>

      <Modal open={openEditUser} onClose={() => setOpenEditUser(false)}>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
          <UserForm 
            onSubmit={handleUpdate}  
            initialData={currentUser}  
          />
        </div>
      </Modal>

      <Modal open={openDeleteModal} onClose={closeDeleteModal}>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
          <h3>Are you sure you want to delete this user?</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button onClick={closeDeleteModal} variant="outlined" color="primary">Cancel</Button>
            <Button onClick={handleDelete} variant="contained" color="secondary">Delete</Button>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default UserTable;
