import React from 'react';
import ReactDOM from 'react-dom';
import Home from './view/Home/Home';
import SweetsPage from './view/SweetsPage/SweetsPage';
import SweetsSinglePage from './view/SweetsSinglePage/SweetsSinglePage';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/sweetspage",
      element: <SweetsPage/>,
    },
    {
      path: "/sweet/page/:id",
      element: <SweetsSinglePage/>,
    },

  ])

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>
        <RouterProvider router={router} />
    </>
);