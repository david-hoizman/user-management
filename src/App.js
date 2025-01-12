// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Login from './components/login/Login';
// import Dashboard from './components/dashboard/Dashboard';
// import AddUser from './components/addUser/AddUser';
// import Home from './components/home/home';
// import { ToastContainer } from 'react-toastify';
// // import UserTable from './components/userTable/UserTable';

// const App = () => (
//   <Router>
//     <AuthProvider>
//       <Routes>
//         {/* Redirect "/" to "/login" */}
//         <Route path="/" element={<Home />} />  {/* דף הבית */}
//         {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-user" element={<AddUser />} />
//         {/* <Route path="/users" element={<UserTable />} /> */}
        
//       </Routes>
//     </AuthProvider>
//   </Router>
// );

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';  // ייבוא של ToastContainer ו-toast
// import 'react-toastify/dist/ReactToastify.css';  // ייבוא הסגנונות של react-toastify

// import Login from './components/login/Login';
// import Dashboard from './components/dashboard/Dashboard';
// import AddUser from './components/addUser/AddUser';
// import Home from './components/home/home';

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/add-user" element={<AddUser />} />
//     </Routes>
//     <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
//   </Router>
// );

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // ייבוא של AuthProvider
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
