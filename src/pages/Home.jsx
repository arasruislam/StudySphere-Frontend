import { useContext } from "react";
import Hero from "../Components/Sections/Hero";
import Loader from "./Loader";
import { AuthContext } from "../Layouts/Primary";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
   const data = useFetch({
      url: "https://studysphere-dnn6.onrender.com/tuitions/applications/20/",
   });
   console.log(data);

   return (
      <>
         {/* Hero section */}
         <Hero />
      </>
   );
};

export default Home;
