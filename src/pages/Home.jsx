import { useContext } from "react";
import Hero from "../Components/Sections/Hero";
import Loader from "./Loader";
import { AuthContext } from "../Layouts/Primary";
import { useFetch } from "../hooks/useFetch";
import CountInfo from "../Components/Sections/CountInfo";
import HomeTuition from "../Components/Sections/HomeTuition";
import Testimonials from "../Components/Sections/Testimonials";
import BecameAInstructor from "../Components/Sections/BecameAInstructor";

const Home = () => {
   return (
      <>
         {/* Hero section */}
         <Hero />

         {/* count information */}
         <CountInfo />

         {/* home tuition */}
         <HomeTuition />

         {/* Testimonials */}
         <Testimonials />

         {/* Became A Instructor */}
         <BecameAInstructor />
      </>
   );
};

export default Home;
