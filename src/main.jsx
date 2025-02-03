import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Bookdetails from './components/Bookdetails/Bookdetails';
import Dashboard from './components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>,
      },
      {
        path:'/book/:bookId',
        element: <Bookdetails/>,
        loader: () => fetch('/booksData.json')
      },
      {
        path:'dashboard',
        element: <Dashboard/>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   
  </StrictMode>,
)
