import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const token = localStorage.getItem("token");
   const location = useLocation();

   if (token) {
      return children;
   }

   
   return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>;
};

export default PrivateRoute;
