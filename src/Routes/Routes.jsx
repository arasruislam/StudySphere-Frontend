import { createBrowserRouter } from "react-router-dom";
import Primary from "../Layouts/Primary";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Tuition from "../pages/Tuition";
import TuitionDetails from "../Components/Sections/TuitionDetails";
import Login from "../pages/Login";

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

         {
            path: "/login",
            element: <Login />,
         },
      ],
   },
]);

export default router;
