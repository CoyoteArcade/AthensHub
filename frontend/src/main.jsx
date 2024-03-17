import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'
import Register from './routes/Register.jsx'
import Subjects from './routes/Subjects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/subjects",
        element: <Subjects />,
      },
      {
        path: "/login",
        element: <h1>Login</h1>,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses/:courseId",
        element: <h1>Course</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
