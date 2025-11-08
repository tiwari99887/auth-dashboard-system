# User Authentication & Dashboard System

Backend REST API using Node.js, Express, MongoDB, Mongoose, JWT.

## Features
- User registration and login (JWT-based)
- Password hashing with bcrypt
- Protected/user/admin routes
- User profile & dashboard
- Admin dashboard & user management
- Input validation & error handling

## Tech Stack
- Node.js, Express.js, MongoDB, Mongoose
- JWT, bcryptjs
- express-validator, dotenv

## Setup

1. **Clone the repo**

git clone https://github.com/tiwari99887/auth-dashboard-system.git
cd auth-dashboard-system

2. **Install dependencies**

npm install


3. **Configure environment**
- Copy `.env.example` to `.env`
- Fill in your MongoDB URI and JWT secret

4. **Start development server**

npm run dev


API runs on `http://localhost:5000`

## Endpoints
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `GET /api/user/dashboard` - User dashboard (protected)
- `GET /api/user/profile` - Get user profile (protected)
- `PUT /api/user/profile` - Update profile (protected)
- `GET /api/admin/dashboard` - Admin dashboard (admin only)
- `GET /api/admin/users` - Get all users (admin only)
- `DELETE /api/admin/users/:id` - Delete user (admin only)
- Plus: Email verification, password reset (bonus features)

## Author
Shivam Tiwari  
[GitHub Repo](https://github.com/tiwari99887/auth-dashboard-system)

