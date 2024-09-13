import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { useFetch } from "../../../hooks/useFetch";
import default_img from "../../../Assets/default.jpg";
import profile_img from "/profile.png"
import image_404 from "/404.jpg"

const TuitionCard = ({ tuition }) => {
   const [instructorData] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/instructor/list/${tuition.instructor}`,
   });

   return (
      <>
         <div className="max-w-md p-4 rounded-md shadow-md hover:scale-105 transition-all bg-white text-gray-50 dark:text-gray-900 flex flex-col justify-between">
            <LazyLoad once={true}>
               <img
                  src={tuition?.image || image_404}
                  alt=""
                  className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500 shadow-md"
               />
            </LazyLoad>
            {/* instructor information */}
            <div className="mt-4 mb-2 flex items-center gap-2">
               <div className="avatar">
                  <div className="w-12 rounded-full">
                     <img src={instructorData?.profile_img || profile_img} />
                  </div>
               </div>
               <div>
                  <h3 className="font-bold">
                     {instructorData?.user?.first_name}{" "}
                     {instructorData?.user?.last_name}
                  </h3>
                  <p className="text-sm">Instructor</p>
               </div>
            </div>
            <div className="my-2 flex-1">
               <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">
                  {tuition?.level}
               </span>
               <h2 className="text-xl font-bold tracking-wide">
                  {tuition?.title}
               </h2>
               <p className="text-justify text-gray-100 dark:text-gray-800 mt-4">
                  {tuition?.description.slice(0, 100)}...
               </p>
            </div>
            <div className="mt-auto">
               <Link
                  to={`/tuitions/${tuition.id}`}
                  className="btn border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#47a8f6] hover:border-[#47a8f6] text-white mt-2"
               >
                  See Details
               </Link>
            </div>
         </div>
      </>
   );
};

export default TuitionCard;
