import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { IoLanguageOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { IoIosTimer } from "react-icons/io";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const InstructorDetails = ({ instructor, tuition }) => {
   const navigate = useNavigate();
   const student_id = JSON.parse(localStorage.getItem("student_id"));
   const token = localStorage.getItem("token");


   // handle tuition application
   const handleApplyTuition = async () => {
      //    // error handle
      //    if (!token) return toast.error("Sorry! Your are not logged in user");
      //    const Exits = applications.find(
      //       (application) => application.tuition === tuition.id
      //    );
      //    if (Exits) return toast.error("Already Enrolled");

      // apply
      try {
         const response = await fetch(
            "https://studysphere-dnn6.onrender.com/api/tuitions/applications/",
            {
               method: "POST",
               headers: {
                  Authorization: `Token ${token}`,
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  student: student_id,
                  tuition: tuition.id,
               }),
            }
         );

         if (!response.ok) {
            toast.error("Something went wrong! try again");
            const data = await response.json();
            console.log(data);
         } else {
            const data = await response.json();
            navigate("/tuition_history");
            toast.success("applied tuition successfully");
         }
      } catch (error) {
         toast.error(error.message);
      }
   };

   return (
      <>
         <div className="flex items-center justify-start gap-4 border-b border-dashed pb-4">
            {/* instructor image */}
            <div className="w-1/5">
               <div className="avatar">
                  <div className="w-44 rounded-xl">
                     <img src={instructor?.profile_img} alt="" />
                  </div>
               </div>
            </div>
            {/* instructor details */}
            <div className="w-4/5 space-y-4">
               {/* name, fee, username */}
               <div className="flex justify-between items-center">
                  <div>
                     <h2 className="font-bold text-3xl">
                        {instructor?.user?.first_name}{" "}
                        {instructor?.user?.last_name}
                        <IoMdCheckmarkCircleOutline
                           size={20}
                           className="inline ms-2 text-[#3990D8] cursor-pointer"
                           title="Verified Instructor"
                        />
                     </h2>
                     <p className="text-gray-500">
                        @{instructor?.user?.username}
                     </p>
                  </div>
                  <div>
                     Fee's: <br />{" "}
                     <span className="font-semibold text-xl text-[#3990D8]">
                        ${tuition?.salary}
                        <span className="text-sm">/mo</span>
                     </span>
                  </div>
               </div>
               {/* experiences, address, medium */}
               <div className="flex gap-10 items-center">
                  <div className="flex items-center gap-1">
                     <LuBadgeCheck className="text-[#3990D8]" />
                     <p>{instructor?.experience} years of experience</p>
                  </div>
                  <div className="flex items-center gap-1">
                     <SlLocationPin className="text-[#3990D8]" />
                     <p>{instructor?.address}</p>
                  </div>
                  <div className="flex items-center gap-1">
                     <IoLanguageOutline className="text-[#3990D8]" />
                     <p>{instructor?.medium_of_instruction}</p>
                  </div>
               </div>
               {/* study day's, tuition area, status */}
               <div className="flex gap-10 items-center">
                  <p>Tuition Area: {instructor?.tuition_area}</p>
                  <p>Available: {instructor?.days_per_week} day's in a week</p>
                  <p>Status: {instructor?.status}</p>
               </div>
            </div>
         </div>
         <div className="mt-2 flex justify-end">
            <button
               onClick={handleApplyTuition}
               className="btn btn-sm btn-warning text-white"
            >
               Apply Tuition
            </button>
         </div>
      </>
   );
};

export default InstructorDetails;
