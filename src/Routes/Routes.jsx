import { createBrowserRouter } from "react-router-dom";
import Primary from "../Layouts/Primary";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Tuition from "../pages/Tuition";
import TuitionDetails from "../Components/Sections/TuitionDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import TuitionHistory from "../pages/TuitionHistory";
import Review from "../pages/Review";
import ChangePassword from "../pages/ChangePassword";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Primary />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/tuitions",
            element: <Tuition />,
         },
         {
            path: "/tuitions/:id",
            element: <TuitionDetails />,
            loader: ({ params }) =>
               fetch(
                  `https://studysphere-dnn6.onrender.com/tuitions/list/?id=${params.id}`
               ),
         },
         // login & sign up
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/signUp",
            element: <SignUp />,
         },
         {
            path: "/contact_us",
            element: <Contact />,
         },
         {
            path: "/profile",
            element: (
               <PrivateRoute>
                  <Profile />
               </PrivateRoute>
            ),
         },
         {
            path: "/tuition_history",
            element: (
               <PrivateRoute>
                  <TuitionHistory />
               </PrivateRoute>
            ),
         },
         {
            path: "/review/:id",
            element: (
               <PrivateRoute>
                  <Review />
               </PrivateRoute>
            ),
            loader: ({ params }) =>
               fetch(
                  `https://studysphere-dnn6.onrender.com/tuitions/all/?id=${params.id}`
               ),
         },
         {
            path: "/change_password",
            element: (
               <PrivateRoute>
                  <ChangePassword />
               </PrivateRoute>
            ),
         },
      ],
   },
]);

export default router;
