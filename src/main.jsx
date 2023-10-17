import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// router
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes
import Root from "./routes/root.jsx";
import Home from "./routes/home.jsx";
import Mission from "./routes/mission.jsx";
import Projects from "./routes/projects.jsx";
import Contacts from "./routes/contacts.jsx";
import SingleProject from "./routes/singleProject.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "mission",
        element: <Mission />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "projects/ownex",
        element: <SingleProject name="ownex" />,
      },
      {
        path: "projects/m3",
        element: <SingleProject name="m3" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
