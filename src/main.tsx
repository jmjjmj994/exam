import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { App } from './app/App';
import { Register } from './routes/authentication/register/Register';
import { Login } from './routes/authentication/login/Login';
import { Product } from './routes/product/Product';
import { Checkout } from './routes/checkout/Checkout';
import { Profile } from './routes/Profile/Profile';
import { CreateVenue } from './routes/create-venue/CreateVenue';
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
        path: '/checkout/:venueId/:dateStart/:dateEnd/:visitors/:price/:name/:image/:city/:country/:address',
        element: <Checkout />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/create-venue',
        element: <CreateVenue />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
