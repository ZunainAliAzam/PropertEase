# PropertEase - Frontend

This repository contains the frontend code for **PropertEase**, a real estate management platform that provides an intuitive interface for users to browse property listings and manage their accounts.

## Features
- **Responsive Design**: Built using React and SCSS to ensure a seamless experience across devices.
- **Property Listings**: Users can browse properties with detailed information.
- **User Authentication**: Secure login and registration functionality integrated with the backend API.
- **Modern UI/UX**: Clean, user-friendly design with custom styles using SCSS.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **SCSS**: A powerful CSS preprocessor for modular and maintainable styles.
- **Axios**: HTTP client for making API requests to the backend.

## Project Structure
```
/frontend
  ├── /public
  ├── /src
      ├── /components  # Reusable components like Navbar, Footer
      ├── /pages       # Main pages (Home, Listings, etc.)
      ├── /styles      # SCSS files for styling
      ├── /hooks       # Custom hooks for managing state or data fetching
      └── /services    # API services for connecting to the backend
  ├── package.json
  └── README.md
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/propertease-frontend.git
   cd propertease-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the project root and add the backend API URL:
   ```bash
   REACT_APP_API_URL=http://localhost:8800/api
   ```

4. **Run the development server:**
   ```bash
   npm start
   ```

The application will run on `http://localhost:3000`.

## Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.

## Folder Breakdown
- **Components**: Contains reusable components like forms, buttons, and navigation bars.
- **Pages**: Main views or pages, such as the homepage, property listings, and user account pages.
- **Styles**: SCSS files for styling the components and pages.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License.