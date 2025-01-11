import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './router/router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Component/Provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <HelmetProvider>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
     </HelmetProvider>
     </AuthProvider>
  </StrictMode>,
)
