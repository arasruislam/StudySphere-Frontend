import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
   return (
      <div className="flex flex-col max-w-3xl mx-auto shadow-md p-6 rounded-md sm:p-10 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
         <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-400 dark:text-gray-600">
               Sign up to create your account
            </p>
         </div>
         <form noValidate="" action="" className="space-y-12">
            <div className="space-y-4">
               {/* first & last name */}
               <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1">
                     <label htmlFor="first_name" className="text-sm">
                        First Name
                     </label>
                     <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="enter first name"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
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
                        placeholder="enter last name"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                     />
                  </div>
               </div>

               {/* email & username */}
               <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1">
                     <label htmlFor="username" className="text-sm">
                        Username
                     </label>
                     <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                     />
                  </div>
                  <div className="flex-1">
                     <label htmlFor="email" className="text-sm">
                        Password
                     </label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                     />
                  </div>
               </div>

               {/* password & confirm password */}
               <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1">
                     <label htmlFor="password" className="text-sm">
                        Password
                     </label>
                     <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="****"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                     />
                  </div>
                  <div className="flex-1">
                     <label htmlFor="confirm_password" className="text-sm">
                        Confirm Password
                     </label>
                     <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="***"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                     />
                  </div>
               </div>
            </div>
            <div className="space-y-2">
               <div>
                  <button
                     type="button"
                     className="w-full px-8 py-3 font-semibold rounded-md bg-[#3890d8] dark:bg-[#3890d8] text-gray-900 dark:text-gray-50"
                  >
                     Sign Up
                  </button>
               </div>
               <p className="px-6 text-sm text-center text-gray-400 dark:text-gray-600">
                  Already have an account?{" "}
                  <Link
                     to="/login"
                     className="hover:underline text-[#FFC338] dark:text-[#FFC338]"
                  >
                     login
                  </Link>
               </p>
            </div>
         </form>
      </div>
   );
};

export default SignUp;
