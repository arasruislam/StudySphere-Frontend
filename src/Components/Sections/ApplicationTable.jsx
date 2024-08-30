import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const ApplicationTable = ({ filteredApplication }) => {
   const tuitions = useFetch({
      url: `https://studysphere-dnn6.onrender.com/tuitions/list/`,
   });
   console.log(tuitions[0].results);
   const getTuitionTitle = (tuitionId) => {
      const tuition = tuitions[0].results?.find((t) => t.id === tuitionId);
      return tuition ? tuition.title : "N/A";
   };

   return (
      <div className="mx-auto dark:text-gray-800">
         <h2 className="mb-4 text-2xl font-semibold leading-tight">
            All Applied Tuitions
         </h2>
         <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
               <thead className="bg-gray-300 text-center">
                  <tr className="text-left">
                     <th className="p-3">No.</th>
                     <th className="p-3">Title</th>
                     <th className="p-3">Apply At</th>
                     <th className="p-3">Level</th>
                     <th className="p-3">Status</th>
                     <th className="p-3">Review</th>
                  </tr>
               </thead>
               <tbody>
                  {filteredApplication.map((application, idx) => (
                     <tr
                        key={application.id}
                        className="border-b border-opacity-20  border-gray-300 bg-gray-50"
                     >
                        <td className="p-3">
                           <p>{idx + 1}</p>
                        </td>
                        <td className="p-3">
                           <p>{getTuitionTitle(application.tuition)}</p>
                        </td>
                        <td className="p-3">
                           <p>
                              {moment(application?.applied_at)
                                 .startOf("hour")
                                 .fromNow()}
                           </p>
                        </td>
                        <td className="p-3">level</td>
                        <td className="p-3 text-right flex flex-wrap gap-2">
                           {application.is_approved ? (
                              <>
                                 <span className="px-3 py-1 font-semibold rounded-md bg-[#3890d8] text-[#3890d8] bg-opacity-15">
                                    <span>Approved</span>
                                 </span>
                              </>
                           ) : (
                              <span className="px-3 py-1 font-semibold rounded-md bg-[#FFC338] text-[#FFC338] bg-opacity-15">
                                 <span>Pending</span>
                              </span>
                           )}
                        </td>
                        <td className="p-3">
                           {application.is_approved ? (
                              <Link
                                 to="/"
                                 className="btn border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#47a8f6] hover:border-[#47a8f6] text-white btn-sm"
                              >
                                 Submit Review
                              </Link>
                           ) : (
                              <Link
                                 to="/"
                                 className="btn border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#47a8f6] hover:border-[#47a8f6] text-white btn-sm"
                                 disabled
                              >
                                 Submit Review
                              </Link>
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
