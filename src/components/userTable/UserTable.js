import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser } from '../../api'; 
import { Table, TableBody, TableCell, TableContainer as MuiTableContainer, TableHead, TableRow, Paper, Modal, Button } from '@mui/material';
import { Container, TableContainer, StyledButton } from './userTableStyles';
import AddUser from './../addUser/AddUser';
import UserForm from '../userForm/UserForm';
import { toast } from 'react-toastify';  // הוסף את ייבוא הטוסט


const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);  // סטייט למעקב אחר פתיחת מודל המחיקה
  const [userToDelete, setUserToDelete] = useState(null);  // סטייט למעקב אחרי המשתמש שיש למחוק

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

//   const handleDelete = async () => {
//     if (userToDelete) {
//       try {
//         await deleteUser(userToDelete._id);
//         setUsers(users.filter((user) => user._id !== userToDelete._id));
//         setOpenDeleteModal(false);  // סגירת המודל אחרי המחיקה
//         setUserToDelete(null);  // ניקוי המשתמש למחיקה
//       } catch (err) {
//         setError('Error deleting user');
//       }
//     }
//   };

const handleDelete = async () => {
  if (userToDelete) {
    try {
      await deleteUser(userToDelete._id);
      setUsers(users.filter((user) => user._id !== userToDelete._id));
      setOpenDeleteModal(false);  // סגירת המודל אחרי המחיקה
      setUserToDelete(null);  // ניקוי המשתמש למחיקה
      toast.success("User deleted successfully!");  // טוסט להצלחה
    } catch (err) {
      setError('Error deleting user');
      toast.error("Failed to delete user");  // טוסט במקרה של שגיאה
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

//   const handleUpdate = async (updatedUser) => {
//     try {
//       await updateUser(updatedUser._id, updatedUser);
//       setUsers(users.map(user => user._id === updatedUser._id ? updatedUser : user));
//       setOpenEditUser(false);
//     } catch (err) {
//       setError('Error updating user');
//     }
//   };

const handleUpdate = async (updatedUser) => {
    try {
      // ניסיון לעדכן את המשתמש
      await updateUser(updatedUser._id, updatedUser);
      
      // עדכון הרשימה המקומית
      setUsers(users.map(user => user._id === updatedUser._id ? updatedUser : user));
      
      // סגירת המודל
      setOpenEditUser(false);
      
      // הצגת טוסט הצלחה
      toast.success("User updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    } catch (err) {
      setError('Error updating user');
      
      // הצגת טוסט שגיאה
      toast.error("Error updating user", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };
  

  const openDeleteConfirmation = (user) => {
    setUserToDelete(user);  // שמירת המשתמש שברצוננו למחוק
    setOpenDeleteModal(true);  // פתיחת המודל לאישור המחיקה
  };

  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
    setUserToDelete(null);  // ניקוי המשתמש למחיקה אם לא מחקנו
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
              <TableCell>Username</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <StyledButton onClick={() => handleEdit(user)} variant="outlined" color="primary">Edit</StyledButton>
                  <StyledButton onClick={() => openDeleteConfirmation(user)} variant="outlined" color="secondary">Delete</StyledButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal עבור הוספת משתמש */}
      <Modal open={openAddUser} onClose={() => setOpenAddUser(false)}>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
          <AddUser onClose={() => setOpenAddUser(false)} onUserAdded={handleUserAdded} />
        </div>
      </Modal>

      {/* Modal עבור עריכת משתמש */}
      <Modal open={openEditUser} onClose={() => setOpenEditUser(false)}>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
          <UserForm 
            onSubmit={handleUpdate}  
            initialData={currentUser}  
          />
        </div>
      </Modal>

      {/* Modal עבור אישור מחיקה */}
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
