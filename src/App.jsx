import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './App.css'
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Weather from "./pages/Weather";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/weather",
        element: <Weather />
      }
    ]
  }
]);

function Router() {


  return (
    <RouterProvider router={router} />
  )
}

export default Router
