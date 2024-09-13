// import moment from "moment";
// import React from "react";
// import { Link } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
// import toast from "react-hot-toast";

// const ApplicationTable = ({ data }) => {
//    console.log(data);
   
//    const [tuition] = useFetch({
//       url: `https://studysphere-dnn6.onrender.com/api/tuitions/all/${tuition_id}`,
//    });


//    const getTuitionTitle = (tuitionId) => {
//       const tuition = tuitions[0]?.find((t) => t.id === tuitionId);
//       return tuition ? tuition.title : "N/A";
//    };

//    return (
//       <div className="mx-auto dark:text-gray-800 ">
//          <h2 className="mb-4 text-2xl font-semibold leading-tight">
//             All Applied Tuitions
//          </h2>
//          <div className="overflow-x-scroll">
//             <table className="w-full text-xs">
//                <thead className="bg-gray-300 text-center">
//                   <tr className="text-left">
//                      <th className="p-3">No.</th>
//                      <th className="p-3">Title</th>
//                      <th className="p-3">Apply At</th>
//                      <th className="p-3">Class</th>
//                      <th className="p-3">Status</th>
//                      <th className="p-3">Review</th>
//                   </tr>
//                </thead>
//                <tbody>
//                   {data.map((application, idx) => (
//                      <tr
//                         key={application.id}
//                         className="border-b border-opacity-20  border-gray-300 bg-gray-50"
//                      >
//                         <td className="p-3">
//                            <p>{idx + 1}</p>
//                         </td>
//                         <td className="p-3">
//                            <p>{application?.tuition?.title}</p>
//                         </td>
//                         <td className="p-3">
//                            <p>
//                               {moment(application?.applied_at)
//                                  .startOf("hour")
//                                  .fromNow()}
//                            </p>
//                         </td>
//                         <td className="p-3">{application?.tuition?.tuition_class}</td>
//                         <td className="p-3 text-right flex flex-wrap gap-2">
//                            {application.is_approved ? (
//                               <>
//                                  <span className="px-3 py-1 font-semibold rounded-md bg-[#3890d8] text-[#3890d8] bg-opacity-15">
//                                     <span>Approved</span>
//                                  </span>
//                               </>
//                            ) : (
//                               <span className="px-3 py-1 font-semibold rounded-md bg-[#FFC338] text-[#FFC338] bg-opacity-15">
//                                  <span>Pending</span>
//                               </span>
//                            )}
//                         </td>
//                         <td className="p-3">
//                            {application.is_approved ? (
//                               <Link
//                                  to={`/review/${application.tuition}`}
//                                  className="btn border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#47a8f6] hover:border-[#47a8f6] text-white btn-sm"
//                               >
//                                  Submit Review
//                               </Link>
//                            ) : (
//                               <Link
//                                  to="/"
//                                  className="btn border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#47a8f6] hover:border-[#47a8f6] text-white btn-sm"
//                                  disabled
//                               >
//                                  Submit Review
//                               </Link>
//                            )}
//                         </td>
//                      </tr>
//                   ))}
//                </tbody>
//             </table>
//          </div>
//       </div>
//    );
// };

// export default ApplicationTable;


import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import toast from "react-hot-toast";

const ApplicationTable = ({ data }) => {
   const [tuitionDetails, setTuitionDetails] = useState({});

   // Function to fetch tuition details for each application
   const fetchTuitionDetails = async (tuitionId) => {
      const response = await fetch(
         `https://studysphere-dnn6.onrender.com/api/tuitions/all/${tuitionId}`
      );
      const result = await response.json();
      return result;
   };

   // Fetch tuition details for each application
   useEffect(() => {
      const fetchDetails = async () => {
         const details = {};
         for (let application of data) {
            const tuition = await fetchTuitionDetails(application.tuition);
            details[application.id] = tuition;
         }
         setTuitionDetails(details);
      };

      fetchDetails();
   }, [data]);

   return (
      <div className="mx-auto dark:text-gray-800 ">
         <h2 className="mb-4 text-2xl font-semibold leading-tight">
            All Applied Tuitions
         </h2>
         <div className="overflow-x-scroll">
            <table className="w-full text-xs">
               <thead className="bg-gray-300 text-center">
                  <tr className="text-left">
                     <th className="p-3">No.</th>
                     <th className="p-3">Title</th>
                     <th className="p-3">Apply At</th>
                     <th className="p-3">Class</th>
                     <th className="p-3">Status</th>
                     <th className="p-3">Review</th>
                  </tr>
               </thead>
               <tbody>
                  {data.map((application, idx) => (
                     <tr
                        key={application.id}
                        className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                     >
                        <td className="p-3">{idx + 1}</td>
                        <td className="p-3">
                           <p>
                              {tuitionDetails[application.id]?.title ||
                                 "Loading..."}
                           </p>
                        </td>
                        <td className="p-3">
                           <p>
                              {moment(application?.applied_at)
                                 .startOf("hour")
                                 .fromNow()}
                           </p>
                        </td>
                        <td className="p-3">
                           {tuitionDetails[application.id]?.tuition_class ||
                              "Loading..."}
                        </td>
                        <td className="p-3">
                           {application.is_approved ? (
                              <span className="px-3 py-1 font-semibold rounded-md bg-[#3890d8] text-[#3890d8] bg-opacity-15">
                                 Approved
                              </span>
                           ) : (
                              <span className="px-3 py-1 font-semibold rounded-md bg-[#FFC338] text-[#FFC338] bg-opacity-15">
                                 Pending
                              </span>
                           )}
                        </td>
                        <td className="p-3">
                           {application.is_approved ? (
                              <Link
                                 to={`/review/${application.tuition}`}
                                 className="btn border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#47a8f6] hover:border-[#47a8f6] text-white btn-sm"
                              >
                                 Submit Review
                              </Link>
                           ) : (
                              <button
                                 disabled
                                 className="btn border border-gray-400 text-gray-400 cursor-not-allowed btn-sm"
                              >
                                 Submit Review
                              </button>
                           )}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ApplicationTable;
