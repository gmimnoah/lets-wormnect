import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Uniswap from "./uniswap";
import ThemePlayground from "./themePlayground";
import reportWebVitals from './reportWebVitals';
import "allotment/dist/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><a href="/uniswap">uniswap</a> | coming soon...</div>,
  },
  {
    path: "/uniswap",
    element: <Uniswap />
  },
  {
    path: "/theme-playground",
    element: <ThemePlayground />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
