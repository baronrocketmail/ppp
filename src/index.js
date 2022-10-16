import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Specific from "./Specific";
import Root from "./Root";
import HomePage from "./HomePage";


const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {index:true, element: <HomePage/>},
            {
                path: "/:id",
                element: <Specific/>
            }
        ]
    },

])

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
