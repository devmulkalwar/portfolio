import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Projects from "./Pages/Projects.jsx";
import Error from "./Pages/Error.jsx";
import Resume from "./Pages/Resume.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/resume", element: <Resume /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
