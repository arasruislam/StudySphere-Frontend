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
      <div className="container mx-auto">
         <div className="flex flex-col lg:flex-row gap-6">
            {/* Profile Details Section */}
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
                     <p className="text-gray-700 text-lg flex items-center gap-2">
                        <MdOutlineDriveFileRenameOutline
                           size={25}
                           color="#3890d8"
                        />{" "}
                        {userData?.user?.first_name} {userData?.user?.last_name}
                     </p>
                     <p className="text-gray-700 text-lg flex items-center gap-2">
                        <MdOutlineEmail size={25} color="#3890d8" />{" "}
                        {userData?.user?.email}
                     </p>
                     <p className="text-gray-700 text-lg flex items-center gap-2">
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
                  <p className="text-gray-500 text-lg text-justify">
                     <strong>Bio:</strong> {userData?.bio || "Not provided"}
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

            {/* Update Information Section */}
            <div className="w-full lg:w-3/5 bg-white p-8 rounded-lg shadow-lg">
               <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                  Update Information
               </h2>
               <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-gray-700 mb-2">
                           Profile Image
                        </label>
                        <input
                           type="file"
                           name="profile_image"
                           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                     </div>
                     <div>
                        <label className="block text-gray-700 mb-2">
                           Phone
                        </label>
                        <input
                           type="text"
                           name="phone"
                           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                     </div>
                     <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">Bio</label>
                        <textarea
                           name="bio"
                           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                     </div>
                     <div>
                        <label className="block text-gray-700 mb-2">
                           Street
                        </label>
                        <input
                           type="text"
                           name="street"
                           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                     </div>
                     <div>
                        <label className="block text-gray-700 mb-2">City</label>
                        <input
                           type="text"
                           name="city"
                           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                     </div>
                     <div>
                        <label className="block text-gray-700 mb-2">
                           State
                        </label>
                        <input
                           type="text"
                           name="state"
                           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                     </div>
                     <div>
                        <label className="block text-gray-700 mb-2">
                           Zip Code
                        </label>
                        <input
                           type="text"
                           name="zip_code"
                           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                     </div>
                     <div>
                        <label className="block text-gray-700 mb-2">
                           Facebook
                        </label>
                        <input
                           type="url"
                           name="facebook"
                           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                     </div>
                     <div>
                        <label className="block text-gray-700 mb-2">
                           GitHub
                        </label>
                        <input
                           type="url"
                           name="github"
                           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                     </div>
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-blue-600 text-white px-4 py-3 mt-6 rounded-lg hover:bg-blue-700 transition"
                  >
                     Update Information
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Profile;
