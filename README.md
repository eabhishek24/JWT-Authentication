JWT Authentication A simple and secure JWT (JSON Web Token) based authentication system built with Node.js and Express. 

Features
User registration and login Password hashing with bcrypt Token-based authentication with JWT Protected routes using JWT middleware Secure environment variable management

Getting Started Prerequisites

Node.js (v14+ recommended) npm or yarn MongoDB or any database setup (if applicable)

Installation

Clone the repository: bashgit clone https://github.com/eabhishek24/JWT-Authentication.git cd JWT-Authentication

Install dependencies: bashnpm install

Create a .env file in the root directory and add your environment variables: envPORT=3000 MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret_key

Start the server: bashnpm start

Usage

Register a new user by sending a POST request to /register with user details Login using /login to receive a JWT token Access protected routes by providing the token in the Authorization header as Bearer

├── controllers/      # Route controllers
├── middlewares/      # Authentication middleware
├── models/           # Database models
├── routes/           # API routes
├── app.js            # Express app setup
├── package.json
└── README.md

Screenshorts
![image](https://github.com/user-attachments/assets/3dd3819e-bdca-4401-a2bc-d1cb182142ba)
![image](https://github.com/user-attachments/assets/d819e70d-486a-4787-ba6d-0978ad19cf41)


Node.js Express.js MongoDB / Mongoose bcrypt JSON Web Token (JWT)

Contributing Feel free to fork the repo and submit pull requests. For major changes, please open an issue first. License This project is licensed under the MIT License.

Made with ❤️ by Abhishek Dubey
