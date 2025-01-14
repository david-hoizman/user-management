import React, { useState } from 'react';
import { addUser } from '../../api';  
import UserForm from '../userForm/UserForm';  
import { toast } from 'react-toastify';


const AddUser = ({ onClose, onUserAdded }) => {  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  


const handleSubmit = async (userData) => {
    setLoading(true);  
    try {
      await addUser(userData);  
      toast.success("User added successfully!");  
  
      onUserAdded();  
      onClose(); 
    } catch (err) {
      console.error("Error adding user", err);
      setError("Failed to add user");
      toast.error("Failed to add user");  
    } finally {
      setLoading(false); 
    }
  };
  

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Add User</h2>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>} 
      <UserForm onSubmit={handleSubmit} /> 
    </div>
  );
};

export default AddUser;
