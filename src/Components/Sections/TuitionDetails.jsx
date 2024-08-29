import moment from "moment";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import toast from "react-hot-toast";
import { AuthContext } from "../../Layouts/Primary";
import { useFetch } from "../../hooks/useFetch";
import axios from "axios";

const TuitionDetails = () => {
   const { userData, token, user_id } = useContext(AuthContext);
   const UserSingleData = useLoaderData();
   const tuition = UserSingleData.results[0];

   // data fetching
   const [applications] = useFetch({
      url: "https://studysphere-dnn6.onrender.com/tuitions/applications/",
   });

   console.log(applications);
   // console.log(tuition);
   // console.log(userData);

   const handleApplyTuition = async () => {
      if (!token) return toast.error("Sorry! Your are not logged in user");
      const isExits = applications.find(
         (application) => application.tuition === tuition.id
      );
      if (isExits) return toast.error("Already enrolled.");

      try {
         const response = await fetch(
            "https://studysphere-dnn6.onrender.com/tuitions/applications/",
            {
               method: "POST",
               headers: {
                  Authorization: `Token ${token}`,
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  user: user_id,
                  tuition: tuition.id,
               }),
            }
         );

         if (!response.ok) {
            throw new Error("Something went wrong");
         }

         const data = await response.json();
         console.log("Application successful:", data);
         // সফল হলে UI আপডেট করতে পারেন
      } catch (error) {
         console.error("Error applying for tuition:", error.message);
         // ত্রুটি হলে error message দেখাতে পারেন
      }

      // fetch("https://studysphere-dnn6.onrender.com/tuitions/applications/", {
      //    method: "POST",
      //    headers: {
      //       Authorization: `Token ${token}`,
      //       "Content-Type": "application/json",
      //    },
      //    body: JSON.stringify({
      //       user: user_id,
      //       tuition: tuition.id,
      //    }),
      // })
      //    .then((res) => res.json())
      //    .then((data) => console.log(data));
   };

   return (
      <>
         <div className="p-2 mx-auto sm:p-10 md:p-16 bg-gray-800 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-6xl mx-auto overflow-hidden rounded">
               <LazyLoad once={true}>
                  <img
                     src={tuition?.image}
                     alt="tuition image"
                     className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500"
                  />
               </LazyLoad>
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
                  {tuition?.availability ? (
                     <button
                        onClick={handleApplyTuition}
                        className="btn btn-warning"
                     >
                        Apply Now
                     </button>
                  ) : (
                     <button className="btn btn-warning" disabled>
                        Apply Now
                     </button>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default TuitionDetails;
