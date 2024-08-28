import Container from "../Components/Container/Container";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Loader from "../pages/Loader";

const Primary = () => {
   const navigation = useNavigation();

   return (
      <>
         <Header />
         <Container>
            <div className="min-h-[calc(100vh-124px)] pt-24 mb-8">
               {navigation.state === "loading" ? <Loader /> : <Outlet />}
               {/* <Outlet /> */}
            </div>
         </Container>
         <Footer />
      </>
   );
};

export default Primary;
