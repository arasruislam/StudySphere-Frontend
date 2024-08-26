import Container from "../Components/Container/Container";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Primary = () => {
   return (
      <>
         <Header />
         <Container>
            <div className="min-h-[calc(100vh-124px)] pt-24 mb-8 z-0">
               <Outlet />
            </div>
         </Container>
         <Footer />
      </>
   );
};

export default Primary;
