import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home';
import AppliedJobs from './Root/Header/AppliedJobs/AppliedJobs';
import ErrorPage from './ErrorPage/ErrorPage';
import JobDetail from './Home/FeaturesJob/JobDetails/JobDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('/public/jobs.json')
      },
      {
        path:'/job/:id',
       element:<JobDetail></JobDetail>,
       loader:()=>fetch('/public/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
