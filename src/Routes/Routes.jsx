import { createBrowserRouter } from "react-router-dom";
import Primary from "../Layouts/Primary";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Tuition from "../pages/Tuition";

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
            path: "/tuitions/:page",
            element: <Tuition />,
         },
      ],
   },
]);

export default router;
