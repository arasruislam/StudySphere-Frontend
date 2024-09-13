import { FaUserPlus } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { IoVideocamOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import CountUp from "react-countup";
import { useFetch } from "../../hooks/useFetch";

const CountInfo = () => {
   const [students] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/student/list/`,
   });
   const [instructor] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/instructor/list/`,
   });
   const [tuitions] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/tuitions/all/`,
   });
   const [applications] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/tuitions/applications/`,
   });

   return (
      <>
         <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex gap-4 items-center bg-gray-100 shadow-lg p-4">
               {/* icon */}
               <FaUserPlus
                  size={50}
                  className="bg-[#3990D8] text-white p-3 rounded"
               />
               {/* info */}
               <div>
                  <CountUp
                     className="font-bold text-2xl"
                     delay={1}
                     end={students.length}
                     duration={5}
                  />
                  <p>Registered Students</p>
               </div>
            </div>
            <div className="flex gap-4 items-center bg-gray-100 shadow-lg p-4">
               {/* icon */}
               <TfiWrite
                  size={50}
                  className="bg-[#3990D8] text-white p-3 rounded"
               />
               {/* info */}
               <div>
                  <CountUp
                     className="font-bold text-2xl"
                     delay={1}
                     end={applications.length}
                     duration={5}
                  />
                  <p>Total Applications</p>
               </div>
            </div>
            <div className="flex gap-4 items-center bg-gray-100 shadow-lg p-4">
               {/* icon */}
               <IoVideocamOutline
                  size={50}
                  className="bg-[#3990D8] text-white p-3 rounded"
               />
               {/* info */}
               <div>
                  <CountUp
                     className="font-bold text-2xl"
                     delay={1}
                     end={tuitions.length}
                     duration={5}
                  />
                  <p>Live Tuition Available</p>
               </div>
            </div>
            <div className="flex gap-4 items-center bg-gray-100 shadow-lg p-4">
               {/* icon */}
               <PiUsersThree
                  size={50}
                  className="bg-[#3990D8] text-white p-3 rounded"
               />
               {/* info */}
               <div>
                  <CountUp
                     className="font-bold text-2xl"
                     delay={1}
                     end={instructor.length}
                     duration={5}
                  />
                  <p>Registered Instructor</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default CountInfo;
