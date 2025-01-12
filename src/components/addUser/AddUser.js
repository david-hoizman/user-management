import React, { useState } from 'react';
import { addUser } from '../../api';  
import UserForm from '../userForm/UserForm';  
import { toast } from 'react-toastify';


const AddUser = ({ onClose, onUserAdded }) => {  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  

//   const handleSubmit = async (userData) => {
//     setLoading(true);  // סימון טעינה
//     try {
//       await addUser(userData);  // הוספת המשתמש
//       alert("User added successfully!");

//       onUserAdded();  // קריאה לעדכון הרשימה בקומפוננטה העליונה
//       onClose();  // סגירת החלון
//     } catch (err) {
//       console.error("Error adding user", err);
//       setError("Failed to add user");
//       alert("Failed to add user");
//     } finally {
//       setLoading(false);  // סיום טעינה
//     }
//   };

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
      <h2>Add User</h2>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>} 
      <UserForm onSubmit={handleSubmit} /> 
    </div>
  );
};

export default AddUser;
