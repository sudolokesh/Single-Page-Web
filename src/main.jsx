import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router";

import "./index.css";
import Routing from "./Routing.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Login from "./Components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routing />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      { 
        path: "/About", 
        element: <About /> 
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/Login",
        element: <Login/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
