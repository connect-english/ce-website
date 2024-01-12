import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import StudentReferralScheme from "../pages/StudentReferralScheme";
import AdditionalServices from "../pages/AdditionalServices";
import ContactUs from "../pages/ContactUs";



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
        },
        {
            path:'/Student-Referral-Scheme',
            element:<StudentReferralScheme />
        },
        {
            path:'/Additional-Services',
            element:<AdditionalServices />
        },
        {
            path:'/contact-us',
            element:<ContactUs />
        }
      ]
    },
]);


export default router;