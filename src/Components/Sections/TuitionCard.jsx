import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const TuitionCard = ({ tuition }) => {
   return (
      <>
         <div
            className="max-w-md p-4 rounded-md shadow-md hover:scale-105 transition-all bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900 flex flex-col justify-between"
         >
            <LazyLoad once={true}>
               <img
                  src={tuition?.image}
                  alt=""
                  className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500 shadow-md"
               />
            </LazyLoad>
            <div className="mt-6 mb-2 flex-1">
               <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">
                  {tuition?.level}
               </span>
               <h2 className="text-xl font-semibold tracking-wide">
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
