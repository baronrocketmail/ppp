import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Specific from "./Specific";
import Root from "./Root";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Inital() {
    return null;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {index:true, element: <img width = "100%" src ={"https://storage.googleapis.com/2022fundraising-website/825/825%206k.png"}/>},
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
