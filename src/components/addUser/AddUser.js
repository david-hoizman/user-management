import React, { useState } from 'react';
import { addUser } from '../../api';  // ודא שאתה מייבא את הפונקציה בצורה נכונה
import UserForm from '../userForm/UserForm';  // ייבוא קומפוננטת ה-UserForm
import { toast } from 'react-toastify';


const AddUser = ({ onClose, onUserAdded }) => {  // הוספתי את ה-onClose להורדת החלון אחרי הוספה
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // טיפול בטעינה

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
    setLoading(true);  // סימון טעינה
    try {
      await addUser(userData);  // הוספת המשתמש
      toast.success("User added successfully!");  // הצגת טוסט אחרי הוספה
  
      onUserAdded();  // קריאה לעדכון הרשימה בקומפוננטה העליונה
      onClose();  // סגירת החלון
    } catch (err) {
      console.error("Error adding user", err);
      setError("Failed to add user");
      toast.error("Failed to add user");  // הצגת טוסט במקרה של שגיאה
    } finally {
      setLoading(false);  // סיום טעינה
    }
  };
  

  return (
    <div>
      <h2>Add User</h2>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}  {/* הצגת טקסט טעינה */}
      <UserForm onSubmit={handleSubmit} />  {/* העברת הפונקציה כ-prop */}
    </div>
  );
};

export default AddUser;
