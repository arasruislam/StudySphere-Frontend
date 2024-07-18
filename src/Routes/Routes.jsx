import { createBrowserRouter } from "react-router-dom";
import Primary from "../Layouts/Primary";
import Home from "../pages/Home/Home";
// import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Primary />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
