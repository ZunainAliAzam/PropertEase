# PropertEase

**PropertEase** is a comprehensive real estate management platform designed to simplify and streamline property listings, user management, and communication between buyers and sellers. The project is split into two main components: the frontend, built with **React** and **SCSS**, and the backend, powered by **Node.js**, **Express**, **Prisma ORM**, and **MongoDB**.

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Installation](#installation)
6. [Running the Project](#running-the-project)
7. [API Endpoints](#api-endpoints)
8. [Contributing](#contributing)
9. [License](#license)

## Features
- **Property Listings**: Manage property listings with detailed descriptions, pricing, and availability.
- **User Authentication**: Secure login and registration system with JSON Web Tokens (JWT).
- **Responsive Design**: Frontend built with React and SCSS to provide a mobile-first, responsive user experience.
- **Database Management**: Backend database operations managed with Prisma ORM and MongoDB.

## Project Structure
The project is divided into two main directories:

- **Frontend**: Contains the user interface components, styles, and views.
  - **React**: Handles the dynamic UI with components and state management.
  - **SCSS**: Manages custom styling for a clean, modern interface.
  
- **Backend**: Manages the server-side functionality and API routes.
  - **Node.js**: Provides the runtime environment for building server-side applications.
  - **Express**: Handles the routing and server-side logic.
  - **Prisma ORM**: Manages the database interactions with MongoDB.
  - **MongoDB**: Stores the project’s data, such as users and property listings.

## Tech Stack
### Frontend:
- React
- SCSS

### Backend:
- Node.js
- Express
- Prisma ORM
- MongoDB
- JSON Web Tokens (JWT) for authentication

## Getting Started
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud-based)
  
### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/propertease.git
   cd PropertEase
   ```

2. Navigate to the **frontend** and **backend** directories, and install the necessary dependencies.

#### Frontend:
```bash
cd frontend
npm install
```

#### Backend:
```bash
cd backend
npm install
```

### Environment Variables
Set up the `.env` file in the **backend** folder with the following variables:
- `PORT` - The port number (default: 3000)
- `JWT_SECRET` - Your secret key for JWT
- `DATABASE_URL` - MongoDB connection string

### Running the Project

#### Frontend:
```bash
cd frontend
npm start
```

#### Backend:
```bash
cd backend
npm run dev
```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:8800`.

### API Endpoints
Here are the major API routes for the backend:

- **User Routes**:
  - POST `/api/auth/register` - Register a new user.
  - POST `/api/auth/login` - Log in with username and password.
  - POST `/api/auth/logout` - Log out the user.

- **Property Routes**:
  - GET `/api/properties` - Get a list of properties.
  - POST `/api/properties` - Create a new property (Admin only).
  - DELETE `/api/properties/:id` - Delete a property (Admin only).

## Contributing
Feel free to contribute by submitting issues, feature requests, or pull requests.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License.
