import { createBrowserRouter } from "react-router-dom";
import Primary from "../Layouts/Primary";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Tuition from "../pages/Tuition";
import TuitionDetails from "../Components/Sections/Tuition/TuitionDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import TuitionHistory from "../pages/TuitionHistory";
import Review from "../pages/Review";
import ChangePassword from "../pages/ChangePassword";
import Contact from "../pages/Contact";
import InstructorRoutes from "./InstructorRoutes";
import Instructor from "../Layouts/Instructor";
import Statistics from "../pages/Instructor/Statistics";
import AddTuition from "../pages/Instructor/AddTuition";
import InstructorLogin from "../pages/Instructor/InstructorLogin";
import InstructorSignUp from "../pages/Instructor/InstructorSignUp";
import ManageTuition from "../pages/Instructor/ManageTuition";
import All_Application from "../pages/Instructor/All_Application";
import About from "../pages/About";

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
                  `https://studysphere-dnn6.onrender.com/api/tuitions/all/${params.id}`
               ),
         },
         // login & sign up
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/instructor_login",
            element: <InstructorLogin />,
         },
         {
            path: "/instructor_signUp",
            element: <InstructorSignUp />,
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
            path: "/about",
            element: <About />,
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
                  `https://studysphere-dnn6.onrender.com/api/tuitions/all/${params.id}`
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
   {
      path: "/instructor",
      element: (
         <InstructorRoutes>
            <Instructor />
         </InstructorRoutes>
      ),
      children: [
         {
            path: "/instructor/dashboard",
            element: (
               <InstructorRoutes>
                  <Statistics />
               </InstructorRoutes>
            ),
         },
         {
            path: "/instructor/add_tuition",
            element: (
               <InstructorRoutes>
                  <AddTuition />
               </InstructorRoutes>
            ),
         },
         {
            path: "/instructor/manage_tuition",
            element: (
               <InstructorRoutes>
                  <ManageTuition />
               </InstructorRoutes>
            ),
         },
         {
            path: "/instructor/all_applications",
            element: (
               <InstructorRoutes>
                  <All_Application />
               </InstructorRoutes>
            ),
         },
      ],
   },
]);

export default router;
