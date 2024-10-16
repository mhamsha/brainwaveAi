import React from "react";
import ReactDOM from "react-dom/client";
// import {  Route, BrowserRouter as Router } from "react-router-dom";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Layout from "./Layout.jsx";
import App from "./App.jsx";

// declaring the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Router> */}
    {/* <App /> */}
    {/* </Router> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
