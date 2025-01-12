
// import React, { useEffect, useState } from 'react';
// import { getUsers } from '../../api';
// import UserTable from '../userTable/UserTable';
// import { Container, Typography, Grid, Button, Box } from '@mui/material';
// import { handleLogout } from '../../utils/logout';
// import './dashboard.css';  // ייבוא קובץ העיצוב

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);  // הסטייט שמחזיק את המשתמשים
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // פונקציה לטעינת המשתמשים
//     const fetchUsers = async () => {
//       try {
//         const { data } = await getUsers();  // מבצע קריאה לשרת
//         setUsers(data);  // מעדכן את הסטייט של המשתמשים
//       } catch (err) {
//         setError('Failed to fetch users');
//         console.error('Error fetching users:', err);
//       }
//     };

//     fetchUsers();  // קריאה לפונקציה טוענת את המשתמשים בעת טעינת העמוד
//   }, []);  // [] גורם לקריאה לקרות רק פעם אחת בזמן שהקומפוננטה נטענת

//   return (
//     <Container maxWidth="lg">
//       <Box className="header-box">
//         <Typography variant="h4" component="h2" className="title">
//           User Management
//         </Typography>
//         {error && <Typography color="error">{error}</Typography>}  {/* הצגת שגיאה במקרה וקרה */}
//       </Box>

//       {/* שורת כפתורים עבור פעולות ניהול */}
//       <Grid container spacing={2} className="button-container">
//         <Grid item>
//           {/* <Button variant="contained" color="primary">
//             Add User
//           </Button> */}
//         </Grid>
//         <Grid item>
//         <Button variant="contained" color="secondary" onClick={handleLogout}>
//       Logout
//     </Button>
//           {/* <Button variant="outlined" color="secondary">
//             Export Users
//           </Button> */}
//         </Grid>
//       </Grid>

//       <UserTable users={users} />  {/* העברת המשתמשים כ-prop ל-UserTable */}
//     </Container>
//   );
// };

// export default Dashboard;
// import React, { useEffect, useState } from 'react';
// import { getUsers } from '../../api';
// import UserTable from '../userTable/UserTable';
// import { Container, Typography, Grid, Button, Box } from '@mui/material';
// import { handleLogout } from '../../utils/logout'; // וודא שהייבוא נכון
// import './dashboard.css';

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await getUsers();
//         setUsers(data);
//       } catch (err) {
//         setError('Failed to fetch users');
//         console.error('Error fetching users:', err);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <Container maxWidth="lg">
//       <Box className="header-box">
//         <Typography variant="h4" component="h2" className="title">
//           User Management
//         </Typography>
//         {error && <Typography color="error">{error}</Typography>}
//       </Box>

//       <Grid container spacing={2} className="button-container">
//         <Grid item>
//           {/* אפשרות להוסיף משתמשים או כפתור יצוא */}
//         </Grid>
//         <Grid item>
//           <Button variant="contained" color="secondary" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Grid>
//       </Grid>

//       <UserTable users={users} />
//     </Container>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';  // גישה לקונטקסט
import { getUsers } from '../../api';
import UserTable from '../userTable/UserTable';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { handleLogout } from '../../utils/logout';  // מייבא את פונקציית ה-logout (אם יש צורך בה)

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
