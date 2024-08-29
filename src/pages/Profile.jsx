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

const Profile = () => {
   const [userData, setUserData] = useState([]);
   const user_id = localStorage.getItem("user_id");

   useEffect(() => {
      fetch(
         `https://studysphere-dnn6.onrender.com/accounts/?user_id=${user_id}`
      )
         .then((res) => res.json())
         .then((data) => setUserData(data[0]));
   }, []);
   console.log(userData);

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
            <form className="space-y-12">
               <div className="space-y-4">
                  {/* first & last name */}
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                     <div className="flex-1">
                        <label htmlFor="url" className="text-sm">
                           Profile image url
                        </label>
                        <input
                           type="url"
                           name="url"
                           id="url"
                           placeholder="image url"
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
                           placeholder="enter phone number"
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
                           placeholder="street address"
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
                           placeholder="city"
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
                           placeholder="enter state"
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
                           placeholder="zip code"
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
                           placeholder="facebook url"
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
                           placeholder="github url"
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
                           placeholder="enter bio"
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

export default Profile;
