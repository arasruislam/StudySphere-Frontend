import React from "react";
import { Link } from "react-router-dom";

const TuitionCard = ({ tuition }) => {
   return (
      <>
         <Link to={`/tuitions/${tuition.id}`} className="max-w-md p-6 rounded-md shadow-md hover:scale-105 transition-all bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
            <img
               src={tuition?.image}
               alt=""
               className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500 shadow-md"
            />
            <div className="mt-6 mb-2">
               <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">
                  Quisque
               </span>
               <h2 className="text-xl font-semibold tracking-wide">
                  {tuition?.title}
               </h2>
            </div>
            <p className="text-gray-100 dark:text-gray-800">
               Mauris et lorem at elit tristique dignissim et ullamcorper elit.
               In sed feugiat mi. Etiam ut lacinia dui.
            </p>
         </Link>
      </>
   );
};

export default TuitionCard;
