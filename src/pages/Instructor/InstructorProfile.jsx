import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import demoImg from "../Assets/demo.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import {
   MdOutlineDriveFileRenameOutline,
   MdOutlineEmail,
   MdOutlinePhone,
} from "react-icons/md";
import toast from "react-hot-toast";

const InstructorProfile = () => {
   const [userData, setUserData] = useState([]);
   const user_id = JSON.parse(localStorage.getItem("student_id"));
   const token = localStorage.getItem("token");

   console.log(userData);

   useEffect(() => {
      fetch(`https://studysphere-dnn6.onrender.com/api/student/list/${user_id}`)
         .then((res) => res.json())
         .then((data) => setUserData(data[0]));
   }, []);

   // handle update profile information handler
   const handleUpdateProfile = (e) => {
      e.preventDefault();

      // form data
      const formData = {
         profile_image: e.target.profile_image.value,
         phone: e.target.phone.value,
         bio: e.target.bio.value,
         street: e.target.street.value,
         city: e.target.city.value,
         state: e.target.state.value,
         zip_code: e.target.zip_code.value,
         facebook: e.target.facebook.value,
         github: e.target.github.value,
      };

      // previous data
      const previousData = {
         profile_image: userData.profile_image,
         phone: userData.phone,
         bio: userData.bio,
         street: userData.street,
         city: userData.city,
         state: userData.state,
         zip_code: userData.zip_code,
         facebook: userData.facebook,
         github: userData.github,
      };

      // updated data
      const updatedData = {};

      // find the updated data and push it to updateData object.
      Object.keys(formData).forEach((key) => {
         if (formData[key] && formData[key] !== userData[key]) {
            updatedData[key] = formData[key];
         }
      });

      // checking and update data
      if (Object.keys(updatedData).length > 0) {
         fetch(
            `https://studysphere-dnn6.onrender.com/api/student/list/${userData.id}/`,
            {
               method: "PATCH",
               headers: {
                  Authorization: `Token ${token}`,
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(updatedData),
            }
         )
            .then((response) => response.json())
            .then((data) => {
               toast.success("profile updated successfully.");

               setUserData((prevData) => ({
                  ...prevData,
                  ...updatedData,
               }));
            })
            .catch((error) => {
               toast.error(error.message);
            });
      } else {
         console.log("No changes detected.");
      }
   };

   return (
      <div className="flex flex-col items-start lg:flex-row gap-6">
         {/* Profile Details */}
         <div className="w-full lg:w-2/5 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
               <LazyLoad once={true}>
                  <img
                     src={userData?.profile_image || demoImg}
                     alt="Profile"
                     className="w-32 h-32 rounded-full border-4 border-blue-500"
                  />
               </LazyLoad>
               <div className="my-4 flex flex-col items-center">
                  <p className="text-gray-700  flex items-center gap-2">
                     <MdOutlineDriveFileRenameOutline
                        size={25}
                        color="#3890d8"
                     />{" "}
                     {userData?.user?.first_name} {userData?.user?.last_name}
                  </p>
                  <p className="text-gray-700  flex items-center gap-2">
                     <MdOutlineEmail size={25} color="#3890d8" />{" "}
                     {userData?.user?.email}
                  </p>
                  <p className="text-gray-700  flex items-center gap-2">
                     <MdOutlinePhone size={25} color="#3890d8" />{" "}
                     {userData?.phone || "Not provided"}
                  </p>
               </div>
               <p className="text-gray-700 mb-2 flex items-start gap-2">
                  <LuMapPin size={25} color="#3890d8" />{" "}
                  {`${userData?.street || ""}, ${userData?.city || ""}, ${
                     userData?.state || ""
                  } ${userData?.zip_code || ""}`}
               </p>
               <p className="  text-justify">
                  <strong>Bio:</strong>{" "}
                  <span className="text-gray-500">
                     {userData?.bio || "Not provided"}
                  </span>
               </p>

               <div className="flex gap-4 mt-6">
                  <a
                     href={userData?.facebook || "#"}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`text-blue-600 font-medium ${
                        !userData?.facebook && "cursor-not-allowed"
                     }`}
                  >
                     <FaFacebook size={30} />
                  </a>
                  <a
                     href={userData?.github || "#"}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`text-gray-800 font-medium ${
                        !userData?.github && "cursor-not-allowed"
                     }`}
                  >
                     <FaGithub size={30} />
                  </a>
               </div>
            </div>
         </div>

         {/* Update Information */}
         <div className="w-full lg:w-3/5 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
               Update Information
            </h2>
            <form onSubmit={handleUpdateProfile} className="space-y-12">
               <div className="space-y-4">
                  {/* first & last name */}
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                     <div className="flex-1">
                        <label htmlFor="profile_image" className="text-sm">
                           Profile image url
                        </label>
                        <input
                           type="url"
                           name="profile_image"
                           id="profile_image"
                           // defaultValue={userData.profile_image}
                           placeholder={userData?.profile_image}
                           className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        />
                     </div>
                     <div className="flex-1">
                        <label htmlFor="phone" className="text-sm">
                           Phone
                        </label>
                        <input
                           type="number"
                           name="phone"
                           id="phone"
                           placeholder={userData?.phone}
                           className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        />
                     </div>
                  </div>

                  {/* email & username */}
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                     <div className="flex-1">
                        <label htmlFor="street" className="text-sm">
                           Street
                        </label>
                        <input
                           type="text"
                           name="street"
                           id="street"
                           placeholder={userData?.street}
                           className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        />
                     </div>
                     <div className="flex-1">
                        <label htmlFor="city" className="text-sm">
                           City
                        </label>
                        <input
                           type="text"
                           name="city"
                           id="city"
                           placeholder={userData?.city}
                           className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        />
                     </div>
                  </div>

                  {/* password & confirm password */}
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                     <div className="flex-1">
                        <label htmlFor="state" className="text-sm">
                           State
                        </label>
                        <input
                           type="text"
                           name="state"
                           id="state"
                           placeholder={userData?.state}
                           className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        />
                     </div>
                     <div className="flex-1">
                        <label htmlFor="zip_code" className="text-sm">
                           Zip code
                        </label>
                        <input
                           type="text"
                           name="zip_code"
                           id="zip_code"
                           placeholder={userData?.zip_code}
                           className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        />
                     </div>
                  </div>

                  {/* Social media url */}
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                     <div className="flex-1">
                        <label htmlFor="facebook" className="text-sm">
                           Facebook
                        </label>
                        <input
                           type="url"
                           name="facebook"
                           id="facebook"
                           placeholder={userData?.facebook}
                           className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        />
                     </div>
                     <div className="flex-1">
                        <label htmlFor="github" className="text-sm">
                           Github
                        </label>
                        <input
                           type="url"
                           name="github"
                           id="github"
                           placeholder={userData?.github}
                           className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        />
                     </div>
                  </div>

                  {/* bio */}
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                     <div className="flex-1">
                        <label htmlFor="bio" className="text-sm">
                           Write about yourself
                        </label>
                        <textarea
                           type="text"
                           name="bio"
                           id="bio"
                           placeholder={userData?.bio}
                           className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        />
                     </div>
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
   );
};

export default InstructorProfile;
