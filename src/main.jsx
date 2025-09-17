import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './Login';
import ForgotPassword from './pages/ForgotPassword';
import SetPassword from './pages/SetPassword';
import PrivacyPolicy from "./legal/PrivacyPolicy";
import TermsOfUse from "./legal/TermsOfUse";

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/auth/forgot-password', element: <ForgotPassword /> },
  { path: '/auth/set-password', element: <SetPassword /> },
  { path: '/legal/privacy', element: <PrivacyPolicy /> },
  { path: '/legal/terms', element: <TermsOfUse /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
