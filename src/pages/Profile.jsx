import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import {
   MdOutlineDriveFileRenameOutline,
   MdOutlineEmail,
   MdOutlinePhone,
} from "react-icons/md";
import toast from "react-hot-toast";
import demoImg from "../Assets/demo.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";

const Profile = () => {
   const [userData, setUserData] = useState(null);
   const user_id = JSON.parse(localStorage.getItem("student_id"));
   const instructor_id = JSON.parse(localStorage.getItem("instructor_id"));
   const token = localStorage.getItem("token");

   useEffect(() => {
      fetch(`https://studysphere-dnn6.onrender.com/api/student/list/${user_id}`)
         .then((res) => res.json())
         .then((data) => setUserData(data));
   }, [user_id]);

   const [instructorData] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/instructor/list/${instructor_id}`,
   });

   if (!userData || !instructorData) {
      return <Loader />;
   }

   // const HandleInstructorProfileUpdate = (e) => {
   //    e.preventDefault();

   //    // form data
   //    const formData = {
   //       first_name: e.target.first_name.value,
   //       last_name: e.target.last_name.value,
   //       phone: e.target.phone.value,
   //       profile_img: e.target.profile_img.value,
   //       gender: e.target.gender.value,
   //       medium_of_instruction: e.target.medium_of_instruction.value,
   //       address: e.target.address.value,
   //       tuition_area: e.target.tuition_area.value,
   //       fee: e.target.fee.value,
   //       status: e.target.status.value,
   //       experience: e.target.experience.value,
   //       extra_facilities: e.target.extra_facilities.value,
   //       days_per_week: e.target.days_per_week.value,
   //    };
   //    console.log(formData);

   //    // previous data
   //    const previousData = {
   //       profile_image: userData.profile_image,
   //       phone: userData.phone,
   //       bio: userData.bio,
   //       street: userData.street,
   //       city: userData.city,
   //       state: userData.state,
   //       zip_code: userData.zip_code,
   //       facebook: userData.facebook,
   //       github: userData.github,
   //    };

   //    // updated data
   //    const updatedData = {};

   //    // find the updated data and push it to updateData object.
   //    Object.keys(formData).forEach((key) => {
   //       if (formData[key] && formData[key] !== userData[key]) {
   //          updatedData[key] = formData[key];
   //       }
   //    });

   //    // checking and update data
   //    if (Object.keys(updatedData).length > 0) {
   //       fetch(
   //          `https://studysphere-dnn6.onrender.com/api/instructor/list/${instructor_id}/`,
   //          {
   //             method: "PATCH",
   //             headers: {
   //                Authorization: `Token ${token}`,
   //                "Content-Type": "application/json",
   //             },
   //             body: JSON.stringify(updatedData),
   //          }
   //       )
   //          .then((response) => response.json())
   //          .then((data) => {
   //             toast.success("profile updated successfully.");

   //             setUserData((prevData) => ({
   //                ...prevData,
   //                ...updatedData,
   //             }));
   //          })
   //          .catch((error) => {
   //             toast.error(error.message);
   //          });
   //    } else {
   //       console.log("No changes detected.");
   //    }
   // };

   return (
      <>
         {user_id ? (
            <div className="bg-white p-6 rounded-lg shadow-lg">
               <div className="flex flex-col items-center">
                  <LazyLoad>
                     <img
                        src={
                           userData.profile_img ||
                           "https://cdn.pixabay.com/photo/2024/08/13/11/42/ai-generated-8965801_1280.png"
                        }
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover"
                     />
                  </LazyLoad>
                  <h2 className="mt-4 text-2xl font-semibold flex items-center">
                     <MdOutlineDriveFileRenameOutline className="mr-2" />{" "}
                     {userData.user.first_name} {userData.user.last_name}
                  </h2>
                  <p className="text-gray-600 mt-2 flex items-center">
                     <MdOutlineEmail className="mr-2" /> {userData.user.email}
                  </p>
                  <p className="text-gray-600 mt-2 flex items-center">
                     <MdOutlinePhone className="mr-2" />{" "}
                     {userData.mobile_no || "Not available"}
                  </p>
               </div>

               {/* <form onSubmit={handleUpdateProfile} className="mt-6">
            <div className="mb-4">
               <label
                  htmlFor="profile_img"
                  className="block text-sm font-medium text-gray-700"
               >
                  Profile Image URL
               </label>
               <input
                  type="url"
                  id="profile_img"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  defaultValue={userData.profile_img}
               />
            </div>
            <div className="mb-4">
               <label
                  htmlFor="mobile_no"
                  className="block text-sm font-medium text-gray-700"
               >
                  Mobile Number
               </label>
               <input
                  type="text"
                  id="mobile_no"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  defaultValue={userData.mobile_no}
               />
            </div>
            <button
               type="submit"
               className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
               Update Profile
            </button>
         </form> */}
            </div>
         ) : (
            <div className="flex flex-col items-start lg:flex-row gap-6">
               {/* Profile Details */}
               <div className="w-full lg:w-2/5 bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex flex-col items-center">
                     <LazyLoad once={true}>
                        <img
                           src={instructorData?.profile_img || demoImg}
                           alt="Profile"
                           className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
                        />
                     </LazyLoad>
                     <div className="my-4 flex flex-col gap-2">
                        <p className="text-gray-700 flex gap-2">
                           <MdOutlineDriveFileRenameOutline
                              size={25}
                              color="#3890d8"
                           />{" "}
                           {instructorData?.user?.first_name}{" "}
                           {instructorData?.user?.last_name}
                        </p>
                        <p className="text-gray-700  flex items-center gap-2">
                           <MdOutlineEmail size={25} color="#3890d8" />{" "}
                           {instructorData?.user?.email}
                        </p>
                        <p className="text-gray-700  flex items-center gap-2">
                           <MdOutlinePhone size={25} color="#3890d8" />{" "}
                           {instructorData?.phone || "Not provided"}
                        </p>
                        <p className="text-gray-700 flex items-start gap-2">
                           <LuMapPin size={25} color="#3890d8" />
                           {instructorData?.address}
                        </p>
                     </div>
                  </div>
               </div>

               {/* Update Information */}
               <div className="w-full lg:w-3/5 bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                     Update Information
                  </h2>
                  <form
                     // onSubmit={HandleInstructorProfileUpdate}
                     className="space-y-12"
                  >
                     <div className="space-y-4">
                        {/* First & Last Name */}
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                           <div className="flex-1">
                              <label htmlFor="first_name" className="text-sm">
                                 First Name
                              </label>
                              <input
                                 type="text"
                                 name="first_name"
                                 id="first_name"
                                 placeholder="Enter first name"
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={
                                    instructorData?.user?.first_name || ""
                                 }
                              />
                           </div>
                           <div className="flex-1">
                              <label htmlFor="last_name" className="text-sm">
                                 Last Name
                              </label>
                              <input
                                 type="text"
                                 name="last_name"
                                 id="last_name"
                                 placeholder="Enter last name"
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={
                                    instructorData?.user?.last_name || ""
                                 }
                              />
                           </div>
                        </div>

                        {/* Profile Image & Phone Number */}
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                           <div className="flex-1">
                              <label htmlFor="phone" className="text-sm">
                                 Phone Number
                              </label>
                              <input
                                 type="text"
                                 name="phone"
                                 id="phone"
                                 placeholder="Enter your phone number..."
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={instructorData?.phone || ""}
                              />
                              <p className="text-xs text-gray-500">
                                 Also use country code, e.g. (+880)
                              </p>
                           </div>
                           <div className="flex-1">
                              <label htmlFor="profile_img" className="text-sm">
                                 Profile Image URL
                              </label>
                              <input
                                 type="url"
                                 name="profile_img"
                                 id="profile_img"
                                 placeholder="Enter your profile image URL..."
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={
                                    instructorData?.profile_img || ""
                                 }
                              />
                           </div>
                        </div>

                        {/* Gender & Medium of Instruction */}
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                           <div className="flex-1">
                              <label htmlFor="gender" className="text-sm">
                                 Gender
                              </label>
                              <select
                                 name="gender"
                                 id="gender"
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={instructorData?.gender || ""}
                              >
                                 <option value="">Select Gender</option>
                                 <option value="Male">Male</option>
                                 <option value="Female">Female</option>
                              </select>
                           </div>
                           <div className="flex-1">
                              <label
                                 htmlFor="medium_of_instruction"
                                 className="text-sm"
                              >
                                 Medium of Instruction
                              </label>
                              <select
                                 name="medium_of_instruction"
                                 id="medium_of_instruction"
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={
                                    instructorData?.medium_of_instruction || ""
                                 }
                              >
                                 <option value="">Select Medium</option>
                                 <option value="Bangla">Bangla</option>
                                 <option value="English">English</option>
                                 <option value="Both">Both</option>
                              </select>
                           </div>
                        </div>

                        {/* Address & Tuition Area */}
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                           <div className="flex-1">
                              <label htmlFor="address" className="text-sm">
                                 Address
                              </label>
                              <input
                                 type="text"
                                 name="address"
                                 id="address"
                                 placeholder="Enter your address..."
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={instructorData?.address || ""}
                              />
                           </div>
                           <div className="flex-1">
                              <label htmlFor="tuition_area" className="text-sm">
                                 Tuition Area
                              </label>
                              <input
                                 type="text"
                                 name="tuition_area"
                                 id="tuition_area"
                                 placeholder="Enter tuition area..."
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={
                                    instructorData?.tuition_area || ""
                                 }
                              />
                           </div>
                        </div>

                        {/* Fee & Status */}
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                           <div className="flex-1">
                              <label htmlFor="fee" className="text-sm">
                                 Fee (per month)
                              </label>
                              <input
                                 type="number"
                                 name="fee"
                                 id="fee"
                                 placeholder="Enter fee amount..."
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={instructorData?.fee || ""}
                              />
                           </div>
                           <div className="flex-1">
                              <label htmlFor="status" className="text-sm">
                                 Status
                              </label>
                              <select
                                 name="status"
                                 id="status"
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={instructorData?.status || ""}
                              >
                                 <option value="">Select Status</option>
                                 <option value="Available">Available</option>
                                 <option value="Not Available">
                                    Not Available
                                 </option>
                              </select>
                           </div>
                        </div>

                        {/* Experience & Extra Facilities */}
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                           <div className="flex-1">
                              <label htmlFor="experience" className="text-sm">
                                 Experience (years)
                              </label>
                              <input
                                 type="number"
                                 name="experience"
                                 id="experience"
                                 placeholder="Enter your teaching experience..."
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={instructorData?.experience || ""}
                              />
                           </div>
                           <div className="flex-1">
                              <label
                                 htmlFor="extra_facilities"
                                 className="text-sm"
                              >
                                 Extra Facilities
                              </label>
                              <input
                                 type="text"
                                 name="extra_facilities"
                                 id="extra_facilities"
                                 placeholder="Enter any extra facilities..."
                                 className="w-full px-3 py-2 border rounded-md"
                                 defaultValue={
                                    instructorData?.extra_facilities || ""
                                 }
                              />
                           </div>
                        </div>

                        {/* Days per Week */}
                        <div>
                           <label htmlFor="days_per_week" className="text-sm">
                              Days per Week
                           </label>
                           <input
                              type="number"
                              name="days_per_week"
                              id="days_per_week"
                              placeholder="Enter days per week..."
                              className="w-full px-3 py-2 border rounded-md"
                              defaultValue={instructorData?.days_per_week || ""}
                           />
                        </div>
                     </div>

                     <div>
                        <button
                           type="submit"
                           className="w-full px-8 py-3 font-semibold rounded-md bg-[#3890d8] dark:bg-[#3890d8] text-gray-900 dark:text-gray-50 hover:scale-95 transition-all duration-300"
                        >
                           Update Info
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}
      </>
   );
};

export default Profile;
