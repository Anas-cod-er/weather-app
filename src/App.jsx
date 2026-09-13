import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/home",
    element: <Home></Home>
  }
]);

function Router() {


  return (
    <RouterProvider router={router} />
  )
}

export default Router
