import React from "react";
import { useFetch } from "../../hooks/useFetch";
import TuitionCard from "./Tuition/TuitionCard";
import { Link } from "react-router-dom";

const HomeTuition = () => {
   const [tuitions] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/tuitions/all/`,
   });
   return (
      <>
         <div className="mt-20">
            <div className="text-center">
               <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  Find Your Perfect Tuition
               </h1>
               <p className="text-sm">
                  Achieve success with guidance from experienced educators.
               </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {tuitions
                  .map((tuition) => (
                     <TuitionCard key={tuition.id} tuition={tuition} />
                  ))
                  .slice(0, 3)}
            </div>

            {/* Center the button */}
            <div className="flex justify-center mt-10">
               <Link
                  to={`/tuitions`}
                  className="btn border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#47a8f6] hover:border-[#47a8f6] text-white"
               >
                  See Details
               </Link>
            </div>
         </div>
      </>
   );
};

export default HomeTuition;
