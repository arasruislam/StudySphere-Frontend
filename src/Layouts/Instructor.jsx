import React, { createContext, useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Container from "../Components/Container/Container";
import Loader from "../pages/Loader";
import Sidebar from "../pages/Instructor/Sidebar";
import { useFetch } from "../hooks/useFetch";

export const AuthContext = createContext(null);

const Instructor = () => {
   // const [userData, setUserData] = useState([]);
   const navigation = useNavigation();
   const user_id = localStorage.getItem("instructor_id");
   const token = localStorage.getItem("token");

   const [userData] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/instructor/list/${user_id}`,
   });

   return (
      <>
         <AuthContext.Provider value={{ userData, token, user_id }}>
            <section className="min-h-screen grid lg:grid-cols-[1fr,4fr] relative">
               <Sidebar />

               <div className="py-20 md:py-12 px-2 md:px-10">
                  <Outlet />
               </div>
            </section>
         </AuthContext.Provider>
      </>
   );
};

export default Instructor;
