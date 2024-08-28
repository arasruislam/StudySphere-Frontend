import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes';
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
   <>
      <RouterProvider router={router} />
      <Toaster />
   </>
);
