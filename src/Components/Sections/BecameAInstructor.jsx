import React from 'react';
import { Link } from 'react-router-dom';

const BecameAInstructor = () => {
   return (
      <>
         <div className="mt-20 shadow-md border border-[#3890d8] rounded p-4 border-opacity-20">
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4">
               <h1 className="text-2xl border-r-2 pr-4">
                  Want to Become <br />
                  <span className="font-bold text-4xl">INSTRUCTOR</span>
               </h1>
               <h2>
                  Be a master <br />
                  <Link
                     to={`/instructor_signUp`}
                     className="ms-8 font-bold text-[#3890d8] underline"
                  >
                     to grow faster
                  </Link>
               </h2>
            </div>
         </div>
      </>
   );
};

export default BecameAInstructor;