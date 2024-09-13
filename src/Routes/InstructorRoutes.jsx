import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const InstructorRoutes = ({ children }) => {
   const token = localStorage.getItem("token");
   const role = localStorage.getItem("role");
   const location = useLocation();

   if (token && role === "instructor") {
      return children;
   }

   return (
      <Navigate to="/" state={{ from: location }} replace={true}></Navigate>
   );
};

export default InstructorRoutes;
