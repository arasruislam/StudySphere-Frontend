import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import moment from "moment";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

const ManageTuition = () => {
   // const [data, setData]= useState([])
   const user_id = localStorage.getItem("instructor_id");
   const token = localStorage.getItem("token");

   const [data, setData] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/tuitions/all/?instructor=${user_id}`,
   });

   const handleDelete = async (id) => {
      try {
         const response = await fetch(
            `https://studysphere-dnn6.onrender.com/api/tuitions/all/${id}/`,
            {
               method: "DELETE",
               headers: {
                  Authorization: `Token ${token}`,
                  "Content-Type": "application/json",
               },
            }
         );

         console.log(response);

         if (response.status === 204) {
            toast.success("Tuition deleted");
            setData(data.filter((tuition) => tuition.id !== id));
         } else {
            toast.error("Failed to delete tuition");
         }
      } catch (error) {  
         console.error("Error:", error);
         toast.error("Something went wrong!");
      }
   };

   return (
      <div className="mx-auto">
         <h2 className="mb-4 text-2xl font-semibold leading-tight">
            All Tuitions
         </h2>
         <div className="overflow-x-scroll">
            <table className="w-full text-xs">
               <thead className="bg-gray-300 text-center">
                  <tr className="text-left">
                     <th className="p-3">No.</th>
                     <th className="p-3">Title</th>
                     <th className="p-3">Availability</th>
                     <th className="p-3">Medium</th>
                     <th className="p-3">Tuition Class</th>
                     <th className="p-3">Created At</th>
                     <th className="p-3">Salary</th>
                     <th className="p-3">Action</th>
                  </tr>
               </thead>
               <tbody>
                  {data.map((tuition, index) => (
                     <tr
                        key={index}
                        className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                     >
                        <td className="p-3">
                           <p>{index + 1}</p>
                        </td>
                        <td className="p-3">
                           <p className="truncate">{tuition?.title}</p>
                        </td>
                        <td className="p-3">
                           <input
                              type="checkbox"
                              checked={tuition.availability}
                              className="form-checkbox h-4 w-4 text-blue-600"
                              readOnly
                           />
                        </td>
                        <td className="p-3">
                           <p>{tuition?.medium}</p>
                        </td>
                        <td className="p-3">
                           <p>{tuition?.tuition_class}</p>
                        </td>
                        <td className="p-3">
                           <p>
                              {moment(tuition?.created_at)
                                 .startOf("hour")
                                 .fromNow()}
                           </p>
                        </td>
                        <td className="p-3">
                           <p>{tuition?.salary}</p>
                        </td>
                        <td className="p-3 space-x-2">
                           <Link
                              to={`/review/${tuition?.id}`}
                              className="btn border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#47a8f6] hover:border-[#47a8f6] text-white btn-sm"
                           >
                              <FaEdit />
                           </Link>
                           <button
                              onClick={() => handleDelete(tuition?.id)}
                              className="btn border border-[#EC407A] bg-[#EC407A] font-bold transition-color hover:bg-[#EC407A] hover:border-[#EC407A] text-white btn-sm"
                           >
                              <FaTrash />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageTuition;
