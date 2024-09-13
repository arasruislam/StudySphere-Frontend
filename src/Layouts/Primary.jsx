import Container from "../Components/Container/Container";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Loader from "../pages/Loader";
import { createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const AuthContext = createContext(null);

const Primary = () => {
   // const [userData, setUserData] = useState([]);
   const navigation = useNavigation();
   const user_id = JSON.parse(localStorage.getItem("student_id"));
   const token = localStorage.getItem("token");

   const [userData] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/student/list/${user_id}`,
   });

   return (
      <>
         <AuthContext.Provider value={{ userData, token, user_id }}>
            <Header />
            <Container>
               <div className="min-h-[calc(100vh-124px)] pt-24 mb-8">
                  {navigation.state === "loading" ? <Loader /> : <Outlet />}
                  {/* <Outlet /> */}
               </div>
            </Container>
            <Footer />
         </AuthContext.Provider>
      </>
   );
};

export default Primary;
