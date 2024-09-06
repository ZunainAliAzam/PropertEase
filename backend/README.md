# PropertEase - Backend

The backend of **PropertEase** provides APIs for property management, user authentication, and more. This backend uses **Node.js**, **Express**, **Prisma ORM**, and **MongoDB** to deliver a secure and scalable solution for handling data and business logic.

## Features
- **Authentication**: User login and registration with JWT for secure sessions.
- **Property Management**: Create, update, and delete property listings.
- **RESTful API**: Structured API endpoints for user and property management.
- **Prisma ORM**: Manage MongoDB operations in a type-safe manner.

## Tech Stack
- **Node.js**: JavaScript runtime for server-side applications.
- **Express**: Fast and lightweight web framework for building APIs.
- **Prisma ORM**: Database ORM for type-safe database access.
- **MongoDB**: NoSQL database for storing property listings and user data.
- **JWT**: For secure authentication and user session management.

## Project Structure
```
/backend
  ├── /controllers  # Handle business logic (auth, property)
  ├── /routes       # Define API routes
  ├── /lib          # Prisma client setup
  ├── /middleware   # Middleware for authentication, error handling
  ├── /models       # Define database schema with Prisma
  ├── .env          # Environment variables
  ├── app.js        # Main server file
  ├── package.json
  └── README.md
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/propertease-backend.git
   cd propertease-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following:
   ```bash
   PORT=8800
   JWT_SECRET=your_jwt_secret
   DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/propertease
   ```

4. **Set up Prisma:**
   Generate the Prisma client for database access:
   ```bash
   npx prisma generate
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

The backend server will run on `http://localhost:8800`.

## API Endpoints

### Auth Routes:
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login a user.
- `POST /api/auth/logout` - Logout a user.

### Property Routes:
- `GET /api/properties` - Get all properties.
- `POST /api/properties` - Create a new property (Admin).
- `DELETE /api/properties/:id` - Delete a property (Admin).

## Database Setup

This project uses **MongoDB** as the database and **Prisma ORM** to interact with it. You’ll need to provide your MongoDB connection string in the `.env` file under `DATABASE_URL`.

## Scripts

- `npm run dev`: Runs the app in development mode with **nodemon**.
- `npm start`: Runs the app in production mode.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License.

---

Let me know if you'd like any additional changes!