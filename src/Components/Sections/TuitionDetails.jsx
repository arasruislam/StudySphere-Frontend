import moment from "moment";
import React from "react";
import { useLoaderData } from "react-router-dom";
// import { GoCheckCircleFill } from "react-icons/go";
import { MdCancel, MdCheckCircle } from "react-icons/md";

const TuitionDetails = () => {
   const data = useLoaderData();
   const tuition = data.results[0];

   return (
      <div className="p-2 mx-auto sm:p-10 md:p-16 bg-gray-800 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
         <div className="flex flex-col max-w-6xl mx-auto overflow-hidden rounded">
            <img
               src={tuition?.image}
               alt="tuition image"
               className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500"
            />
            <div className="p-6 pb-12 m-4 mx-auto self-center -mt-16 space-y-6 shadow-sm lg:max-w-4xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 dark:bg-gray-50">
               <div className="space-y-2">
                  <a
                     rel="noopener noreferrer"
                     href="#"
                     className="inline-block text-2xl font-semibold sm:text-3xl"
                  >
                     {tuition?.title}
                  </a>
                  <div className="text-xs text-gray-400 dark:text-gray-600 flex items-center gap-4">
                     <p>
                        <strong>Published:</strong>{" "}
                        {moment(tuition?.created_at).format("Do MMM, YYYY")}{" "}
                     </p>
                     <p>
                        <strong>Last update:</strong>{" "}
                        {moment(tuition?.updated_at).endOf("day").fromNow()}
                     </p>
                  </div>
               </div>
               <div className="text-justify text-gray-100 dark:text-gray-800">
                  <p>{tuition?.description}</p>
               </div>

               {/* other information */}
               <div className="border-t pt-4">
                  <div className="space-y-4">
                     <p className="flex">
                        <span className="flex-1">Subject</span>{" "}
                        <span className="flex-1">: {tuition?.subject}</span>
                     </p>
                     <p className="flex">
                        <span className="flex-1">Level</span>{" "}
                        <span className="flex-1">: {tuition?.level}</span>
                     </p>
                     <p className="flex">
                        <span className="flex-1">Available</span>
                        <span className="flex-1 flex items-center gap-1">
                           :{" "}
                           {tuition?.availability === true ? (
                              <MdCheckCircle size={20} color="#3890d8" />
                           ) : (
                              <MdCancel size={20} color="#e74c3c " />
                           )}
                        </span>
                     </p>
                  </div>
               </div>

               {/* apply button */}
               <button className="btn btn-warning">Apply Now</button>
            </div>
         </div>
      </div>
   );
};

export default TuitionDetails;
