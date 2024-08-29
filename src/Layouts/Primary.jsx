import Container from "../Components/Container/Container";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Loader from "../pages/Loader";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const Primary = () => {
   const [userData, setUserData] = useState([]);
   const navigation = useNavigation();
   const user_id = localStorage.getItem("user_id");
   const token = localStorage.getItem("token");

   useEffect(() => {
      fetch(
         `https://studysphere-dnn6.onrender.com/accounts/?user_id=${user_id}`
      )
         .then((res) => res.json())
         .then((data) => setUserData(data[0]));
   }, []);

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
