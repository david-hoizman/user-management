// פונקציית logout שמבצעת את ההתנתקות, ללא שימוש ב-`useContext`
export const handleLogout = () => {
    localStorage.removeItem('token'); 
    window.location.href = '/login';
  };
  