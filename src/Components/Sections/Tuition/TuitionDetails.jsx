import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Layouts/Primary";
import { useFetch } from "../../../hooks/useFetch";
import default_img from "../../../Assets/default.jpg";
import { BsInfoCircle } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import InstructorDetails from "./InstructorDetails";
import TuitionInfo from "./TuitionInfo";
import ReviewPerTuition from "./ReviewPerTuition";
import { IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { RiVideoOnLine } from "react-icons/ri";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const TuitionDetails = () => {
   const [tabIndex, setTabIndex] = useState(0);
   const { userData, token, user_id } = useContext(AuthContext);
   const tuition = useLoaderData();
   const navigate = useNavigate();

   const [instructor] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/instructor/list/${tuition.instructor}`,
   });

   // data fetching
   // const [applications] = useFetch({
   //    url: "http://127.0.0.1:8000/tuitions/applications/",
   // });
   // const [instructorData] = useFetch({
   //    url: `http://127.0.0.1:8000/accounts/?user_id=${tuition.instructor.id}`,
   // });

   

   return (
      <>
         <div className="mb-6">
            <img
               src={tuition?.image || default_img}
               alt=""
               className="w-full h-72 rounded object-cover"
            />
         </div>
         <div className="flex flex-col-reverse lg:flex-row gap-4 items-start justify-start">
            {/* left bar */}
            <div className="w-full lg:w-9/12 rounded space-y-4">
               <div className="shadow rounded-sm px-4 py-2 bg-white">
                  <InstructorDetails
                     instructor={instructor}
                     tuition={tuition}
                  />
               </div>

               {/* tabs */}
               <div className="shadow rounded-sm bg-white">
                  <div className="flex items-center overflow-x-auto overflow-y-hidden  flex-nowrap border-b">
                     <button
                        onClick={() => setTabIndex(0)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                           tabIndex === 0
                              ? "border-[#3990D8] border-b-2"
                              : "border-none text-gray-300 hover:text-gray-500"
                        } border-gray-400 `}
                     >
                        <BsInfoCircle size={20} />
                        <span>Details</span>
                     </button>
                     <button
                        onClick={() => setTabIndex(1)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                           tabIndex === 1
                              ? "border-[#3990D8] border-b-2"
                              : "border-none  text-gray-300 hover:text-gray-500"
                        } border-gray-400`}
                     >
                        <BiMessageRounded size={20} />
                        <span>Reviews</span>
                     </button>
                  </div>

                  {/* outlet */}
                  <div className="mt-4 px-4 py-2">
                     {tabIndex === 0 ? (
                        <TuitionInfo tuition={tuition} />
                     ) : (
                        <ReviewPerTuition tuition={tuition} />
                     )}
                  </div>
               </div>
            </div>
            {/* right bar */}
            <div className="w-full lg:w-3/12 shadow rounded-sm bg-white px-4 py-2">
               <p className="text-center">
                  Hello! You can have my teaching services direct at
               </p>

               <div className="my-4 space-y-2 border-t border-b py-2">
                  <div className="flex items-center gap-4">
                     <IoHomeOutline size={20} className="text-blue-500" />{" "}
                     <span>My Home</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <IoLocationOutline size={20} className="text-blue-500" />{" "}
                     <span>Student's Home</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <RiVideoOnLine size={20} className="text-blue-500" />{" "}
                     <span>Online</span>
                  </div>
               </div>

               <div className="mt-2">
                  <h3 className="text-xl font-bold mb-2">Contact details</h3>

                  <div className="flex items-center gap-4 mb-2">
                     <FaPhoneAlt size={20} className="text-blue-500" />{" "}
                     <span>{instructor?.phone}</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <FaRegEnvelope size={20} className="text-blue-500" />{" "}
                     <span>{instructor?.user?.email}</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default TuitionDetails;
