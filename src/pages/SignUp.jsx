import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const SignUp = () => {
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

   // sign up user handler
   const handleSignUpUser = async (e) => {
      e.preventDefault();

      // form data
      const first_name = e.target.first_name.value;
      const last_name = e.target.last_name.value;
      const mobile_no = e.target.mobile_no.value;
      const profile_img = e.target.profile_img.value;
      const username = e.target.username.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirm_password = e.target.confirm_password.value;

      const StudentData = {
         username,
         first_name,
         last_name,
         mobile_no,
         profile_img,
         email,
         password,
         confirm_password,
      };

      // password validation
      if (password !== confirm_password) {
         toast.error("confirm password not match");
         return;
      }
      if (password.length < 8) {
         toast.error("8 character password needed");
         return;
      }
      if (!/(?=.*[A-Z])/.test(password)) {
         toast.error("at least one uppercase to your password");
         return;
      }
      if (!/(?=.*[@$!%*?&])/.test(password)) {
         toast.error("at least one special character to your password");
         return;
      }

      try {
         setLoading(true);
         const response = await axios.post(
            "https://studysphere-dnn6.onrender.com/api/student/register/",
            StudentData
         );

         if (response.status === 200) {
            toast.success(
               "Registration successful! Please check your email to confirm your account."
            );
            navigate("/");
         } else {
            toast.error("Something went wrong. Please try again.");
         }
      } catch (error) {
         toast.error("An error occurred. Please try again.");
      } finally {
         setLoading(false);
      }
   };

   if (loading === true) return <Loader />;

   return (
      <div className="flex flex-col max-w-3xl mx-auto shadow-md p-6 rounded-md sm:p-10 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
         <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up as an Student</h1>
            <p className="text-sm text-gray-400 dark:text-gray-600">
               Create an account to become an{" "}
               <Link
                  to="/instructor_signUp"
                  className="hover:underline font-bold text-[#3890d8]"
               >
                  instructor
               </Link>{" "}
               on StudySphere
            </p>
         </div>
         <form onSubmit={handleSignUpUser} className="space-y-12">
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
                        required
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
                        required
                     />
                  </div>
               </div>

               {/* mobile & profile image */}
               <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1">
                     <label htmlFor="mobile_no" className="text-sm">
                        Phone Number
                     </label>
                     <input
                        type="text"
                        name="mobile_no"
                        id="mobile_no"
                        placeholder="enter your phone number..."
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
                     />
                     <p className="text-xs text-gray-500">
                        also use country code. example: (+880)
                     </p>
                  </div>
                  <div className="flex-1">
                     <label htmlFor="profile_img" className="text-sm">
                        Image Url
                     </label>
                     <input
                        type="url"
                        name="profile_img"
                        id="profile_img"
                        placeholder="enter your profile image url..."
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
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
                        required
                     />
                  </div>
                  <div className="flex-1">
                     <label htmlFor="email" className="text-sm">
                        Email
                     </label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
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
                        required
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
                        required
                     />
                  </div>
               </div>
            </div>
            <div className="space-y-2">
               <div>
                  <button
                     type="submit"
                     className="w-full px-8 py-3 font-semibold rounded-md bg-[#3890d8] dark:bg-[#3890d8] text-gray-900 dark:text-gray-50 hover:scale-95 transition-all duration-300"
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
