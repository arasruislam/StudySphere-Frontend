import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
   const [watchOldPassword, setWatchOldPassword] = useState(false);
   const [watchNewPassword, setWatchNewPassword] = useState(false);
   const [watchConfirmPassword, setWatchConfirmPassword] = useState(false);

   const handleChangePassword = async (e) => {
      e.preventDefault();

      const old_password = e.target.old_password.value;
      const new_password = e.target.new_password.value;
      const confirm_password = e.target.confirm_password.value;

      // Ensure new password and confirm password match
      if (new_password !== confirm_password) {
         toast.error("New password and confirm password do not match.");
         return;
      }

      // Send POST request to change password
      try {
         const response = await fetch(
            "https://studysphere-dnn6.onrender.com/accounts/user/change_password/",
            {
               method: "POST",
               headers: {
                  Authorization: `Token ${localStorage.getItem("token")}`,
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  old_password: old_password,
                  new_password: new_password,
                  confirm_password: confirm_password,
               }),
            }
         );

         if (response.ok) {
            toast.success("Password has been changed successfully.");
         } else {
            const data = await response.json();
            toast.error(data.error || "Failed to change password.");
         }
      } catch (error) {
         toast.error("An error occurred. Please try again.");
      }
   };

   return (
      <div className="max-w-md mx-auto mt-10">
         <h2 className="text-2xl font-semibold text-center mb-5">
            Change Password
         </h2>
         <form
            onSubmit={handleChangePassword}
            className="bg-white shadow-lg rounded-lg px-8 py-6"
         >
            <div className="mb-4">
               <label
                  className=" text-gray-700 text-sm font-bold mb-2 flex gap-2 items-center"
                  htmlFor="old_password"
               >
                  <span>Old Password</span>
                  <span
                     onClick={() => setWatchOldPassword(!watchOldPassword)}
                     className=" cursor-pointer"
                  >
                     {watchOldPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
               </label>
               <input
                  id="old_password"
                  type={watchOldPassword ? "text" : "password"}
                  name="old_password"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  required
               />
            </div>
            <div className="mb-4">
               <label
                  className=" text-gray-700 text-sm font-bold mb-2 flex gap-2 items-center"
                  htmlFor="new_password"
               >
                  <span>New Password</span>
                  <span
                     onClick={() => setWatchNewPassword(!watchNewPassword)}
                     className=" cursor-pointer"
                  >
                     {watchNewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
               </label>
               <input
                  id="new_password"
                  type={watchNewPassword ? "text" : "password"}
                  name="new_password"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  required
               />
            </div>
            <div className="mb-4">
               <label
                  className=" text-gray-700 text-sm font-bold mb-2 flex gap-2 items-center"
                  htmlFor="confirm_password"
               >
                  <span>Confirm Password</span>
                  <span
                     onClick={() =>
                        setWatchConfirmPassword(!watchConfirmPassword)
                     }
                     className=" cursor-pointer"
                  >
                     {watchConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
               </label>
               <input
                  id="confirm_password"
                  type={watchConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  required
               />
            </div>
            <div className="flex items-center justify-between">
               <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
               >
                  Change Password
               </button>
            </div>
         </form>
      </div>
   );
};

export default ChangePassword;
