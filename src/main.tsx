import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { App } from './app/App';
import { Register } from './routes/authentication/register/Register';
import { Login } from './routes/authentication/login/Login';
import { Product } from './routes/product/Product';
import { Account } from './routes/account/Account';
import { Profile } from './routes/profile/Profile';
import { CreateVenue } from './routes/create-venue/CreateVenue';
import { UserManagement } from './routes/user-management/UserManagement';
import { UpdateVenue } from './routes/update-venue/UpdateVenue';
import { SearchResults } from './routes/search-results/SearchResults';
import './index.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'sign-in',
        element: <Login />,
      },
      {
        path: '/venue/:id',
        element: <Product />,
      },

      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/create-venue',
        element: <CreateVenue />,
      },
      {
        path: '/manage-venues/:name',
        element: <UserManagement />,
      },
      {
        path: '/update-venue/:id',
        element: <UpdateVenue />,
      },
      {
        path: '/search',
        element: <SearchResults />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
