import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import User_detail from './components/User/User_detail/User_detail.jsx';
import Not_found from './components/Not_found/Not_found.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Not_found></Not_found>,
    children:[
      {
        path:"/About",
        element: <About></About>,
      },
      {
        path:"/Contact",
        element: <Contact></Contact>,
      },
      {
        path:"/Users",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:"/User/:UserID",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.UserID}`),
        element:<User_detail></User_detail>,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
