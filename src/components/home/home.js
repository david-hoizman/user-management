// import React from 'react';
// import UserTable from '../userTable/UserTable';  // נניח שזו טבלת המשתמשים

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Dashboard</h1>
//       <UserTable />  {/* הצגת רשימת המשתמשים */}
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import Dashboard from '../dashboard/Dashboard'; // ייבוא הדשבורד

const Home = () => {
  return (
    <div>
      {/* <h1>Welcome to the Home Page</h1> */}
      <Dashboard />  {/* הצגת הדשבורד בתוך דף הבית */}
    </div>
  );
};

export default Home;
