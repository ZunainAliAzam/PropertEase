import React from "react";
import HomePage from "./routes/homepage/homePage.jsx";
import ListPage from "./routes/listPage/listPage.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import ProfilePage from "./routes/profilePage/ProfilePage.jsx";
import Register from "./routes/register/Register.jsx";
import Login from "./routes/login/Login.jsx";
import NewPostPage from "./routes/newPostPage/NewPostPage.jsx";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuthLayout } from "./routes/layout/Layout.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: <RequireAuthLayout />,
      children: [
        { path: "/profile", element: <ProfilePage /> },
        { path: "/profile/update", element: <ProfileUpdatePage /> },
        { path: "/add", element: <NewPostPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
