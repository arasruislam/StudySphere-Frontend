import { useFetch } from "../../hooks/useFetch";
import toast from "react-hot-toast";
import moment from "moment";
import React from "react";

const All_Application = () => {
   const instructor_id = localStorage.getItem("instructor_id");
   const token = localStorage.getItem("token");

   const [data, setData] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/tuitions/applications/?instructor=${instructor_id}`,
   });

   const student_id = data[0]?.student;
   const tuition_id = data[0]?.tuition;
   const [student] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/student/list/${student_id}`,
   });
   const [tuition] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/tuitions/all/${tuition_id}`,
   });

   const handleApprovedTuition = async (applicationId) => {
      try {
         // Make a PATCH request to update the application as approved
         const response = await fetch(
            `https://studysphere-dnn6.onrender.com/api/tuitions/applications/${applicationId}/`,
            {
               method: "PATCH",
               headers: {
                  Authorization: `Token ${token}`,
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  is_approved: true,
               }),
            }
         );

         if (response.ok) {
            // If the request is successful, update the local state
            const updatedData = data.map((application) =>
               application.id === applicationId
                  ? { ...application, is_approved: true }
                  : application
            );
            setData(updatedData); // Update the state to reflect the approval
            toast.success("Tuition Approved");
         } else {
            toast.error("Failed to approve the tuition.");
         }
      } catch (error) {
         toast.error("Error approving tuition:", error.message);
      }
   };

   return (
      <div className="mx-auto dark:text-gray-800 p-4">
         <h2 className="mb-4 text-2xl font-semibold leading-tight">
            All Applications
         </h2>
         <div className="overflow-x-auto">
            <table className="min-w-full text-xs md:text-sm">
               <thead className="bg-gray-300 text-center">
                  <tr>
                     <th className="p-3">No.</th>
                     <th className="p-3">Tuition Title</th>
                     <th className="p-3">Application By</th>
                     <th className="p-3">Apply At</th>
                     <th className="p-3">Active</th>
                  </tr>
               </thead>
               <tbody className="text-center">
                  {data && data.length > 0 ? (
                     data.map((application, idx) => (
                        <tr
                           key={application.id}
                           className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                        >
                           <td className="p-3 text-center">{idx + 1}</td>
                           <td className="p-3">
                              <p>{tuition?.title}</p>
                           </td>

                           <td className="p-3 text-center">
                              {student?.user?.first_name}{" "}
                              {student?.user?.last_name}
                           </td>
                           <td className="p-3">
                              <p>
                                 {moment(application?.applied_at)
                                    .startOf("hour")
                                    .fromNow()}
                              </p>
                           </td>
                           <td className="p-3 text-center">
                              {application.is_approved ? (
                                 <button
                                    className="btn border border-gray-400 text-gray-400 cursor-not-allowed btn-sm"
                                    disabled
                                 >
                                    Approved Tuition
                                 </button>
                              ) : (
                                 <button
                                    onClick={() =>
                                       handleApprovedTuition(application.id)
                                    }
                                    className="btn border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#47a8f6] hover:border-[#47a8f6] text-white btn-sm"
                                 >
                                    Approve Tuition
                                 </button>
                              )}
                           </td>
                        </tr>
                     ))
                  ) : (
                     <tr>
                        <td colSpan="6" className="text-center p-3">
                           No applications found.
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default All_Application;
