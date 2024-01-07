import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<ErrorPage />,
      children: [
        {
            path:"/",
            element:<Home />
        },
        {
            path:'/about',
            element:<About />
        }
      ]
    },
]);


export default router;