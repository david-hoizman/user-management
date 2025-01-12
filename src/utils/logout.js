// פונקציית logout שמבצעת את ההתנתקות, ללא שימוש ב-`useContext`
export const handleLogout = () => {
    localStorage.removeItem('token'); // מסיר את הטוקן מה-localStorage
    window.location.href = '/login';  // מפנה את המשתמש לדף ההתחברות
  };
  