// import axios from 'axios';

// const API_URL = 'https://server-n42x.onrender.com/api';

// const api = axios.create({
//   baseURL: API_URL,
// });

// // api.interceptors.request.use((config) => {
// //   const token = localStorage.getItem('token');
// //   if (token) {
// //     config.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return config;
// // });
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response && error.response.status === 401) {
//         // אם יש שגיאה 401, יש בעיה עם הטוקן (אולי לא חוקי)
//         console.error("Unauthorized - Token invalid or expired");
//       }
//       return Promise.reject(error);
//     }
//   );
  

// export const login = (credentials) => api.post('/auth/login', credentials);
// export const getUsers = () => api.get('/users');
// export const getUserById = (id) => api.get(`/users/${id}`);
// export const addUser = (userData) => api.post('/users', userData);
// export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
// export const deleteUser = (id) => api.delete(`/users/${id}`);
import axios from 'axios';

const API_URL = 'https://server-n42x.onrender.com/api';
// const token = localStorage.getItem('token');

// יצירת מופע של axios עם base URL
const api = axios.create({
  baseURL: API_URL,
});

// אינטרספטור על בקשות לפני שליחה
api.interceptors.request.use((config) => {
  // אם יש טוקן ב-localStorage, הוסף אותו לכותרת Authorization
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// אינטרספטור על תגובות של הבקשות
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // אם יש שגיאה 401, כנראה שיש בעיה עם הטוקן
      console.error("Unauthorized - Token invalid or expired");
    }
    return Promise.reject(error);
  }
);

// פונקציות לשליחת בקשות API
export const login = (credentials) => api.post('/auth/login', credentials);
export const getUsers = () => api.get('/users');
export const getUserById = (id) => api.get(`/users/${id}`);
export const addUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);