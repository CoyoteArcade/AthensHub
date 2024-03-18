import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import Home from './routes/Home.jsx';
import Register from './routes/Register.jsx';
import Subjects from './routes/Subjects.jsx';
import Login from './routes/Login.jsx';
import Course from './routes/Course.jsx';
import About from './routes/About.jsx';
import { theme } from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/subjects',
        element: <Subjects />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/courses/:courseId',
        element: <Course />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='light' theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
