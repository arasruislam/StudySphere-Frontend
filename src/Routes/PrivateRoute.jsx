import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const navigate = useNavigate()
   const token = localStorage.getItem("token");

   if (token) {
      return children;
   }

   return <navigate to="/login" />;
};

export default PrivateRoute;
