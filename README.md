# User Management System

## Description
This is a User Management System built with React on the client-side, connected to an API for user authentication and management. The system allows users to view a list of users, add new users, edit user details, and delete users. It also includes a login system that authenticates users via JWT tokens.

## Features
- **User Dashboard**: View a list of all users in a table format.
- **User Management**: Add, edit, and delete users.
- **Authentication**: Secure login system using JWT tokens.
- **State Management**: Context API is used for state management.
- **Basic Styling**: The app is styled using CSS.

## Frontend (React)
### Pages and Components
- **Login**: A form for logging in using a username and password.
- **Dashboard**: Displays a list of users, with options to add, edit, or delete users.
- **Add/Edit User**: Forms to add or edit user information (Username, Full Name, Email, Password).

### State Management
- React's Context API is used for global state management.

### Tools and Libraries Used:
- React
- React Router for routing
- React Toastify for displaying notifications (toasts)
- Axios for HTTP requests
- JWT for authentication

## Backend (API)
The API is responsible for handling user management operations and authentication. It is built with Node.js and Express.

### Endpoints:
- `POST /api/auth/login`: Authenticate user and return a JWT token.
- `GET /api/users`: Retrieve a list of all users.
- `GET /api/users/:id`: Retrieve user details by ID.
- `POST /api/users`: Add a new user.
- `PUT /api/users/:id`: Update an existing user.
- `DELETE /api/users/:id`: Delete a user.

### Authentication
- JWT tokens are used for authentication. Include the token in the `Authorization` header for requests that require access to user data.

## Database
The database stores user information and uses a MongoDB-like schema:
- **_id**: Unique identifier for the user.
- **username**: User's unique username.
- **fullName**: User's full name.
- **email**: User's email address.
- **password**: User's encrypted password.
- **createdAt**: Timestamp for user creation.

## Setup and Installation

### Prerequisites
- Node.js
- MongoDB (for backend)

### Installing Dependencies
1. Clone this repository:
   ```bash
   git clone https://github.com/david-hoizman/user-management.git
