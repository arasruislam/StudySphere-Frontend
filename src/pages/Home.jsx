import { useContext } from "react";
import Hero from "../Components/Sections/Hero";
import Loader from "./Loader";
import { AuthContext } from "../Layouts/Primary";
import { useFetch } from "../hooks/useFetch";

const Home = () => {


   return (
      <>
         {/* Hero section */}
         <Hero />
      </>
   );
};

export default Home;
