import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader";


const InstructorSignUp = () => {
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

   // sign up user handler
   const handleSignUpUser = async (e) => {
      e.preventDefault();

      // instructor data
      const first_name = e.target.first_name.value;
      const last_name = e.target.last_name.value;
      const phone = e.target.phone.value;
      const profile_img = e.target.profile_img.value;
      const username = e.target.username.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirm_password = e.target.confirm_password.value;
      const gender = e.target.gender.value;
      const address = e.target.address.value;
      const tuition_area = e.target.tuition_area.value;
      const fee = e.target.fee.value;
      const status = e.target.status.value;
      const days_per_week = e.target.days_per_week.value;
      const experience = e.target.experience.value;
      const extra_facilities = e.target.extra_facilities.value;
      const medium_of_instruction = e.target.medium_of_instruction.value;

      // Create Instructor Data Object
      const InstructorData = {
         username,
         first_name,
         last_name,
         phone,
         profile_img,
         email,
         password,
         confirm_password,
         gender,
         address,
         tuition_area,
         fee,
         status,
         days_per_week,
         experience,
         extra_facilities,
         medium_of_instruction,
      };
      console.log(InstructorData);


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
         const response = await fetch(
            "https://studysphere-dnn6.onrender.com/api/instructor/register/",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(InstructorData),
            }
         );

         if (response.ok) {
            const data = await response.json();
            toast.success("Check your email.");
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
            <h1 className="my-3 text-4xl font-bold">
               Sign Up as an Instructor
            </h1>
            <p className="text-sm text-gray-400 dark:text-gray-600">
               Create an account to become an{" "}
               <Link
                  to="/signUp"
                  className="hover:underline font-bold text-[#3890d8]"
               >
                  student
               </Link>{" "}
               on StudySphere
            </p>
         </div>
         <form onSubmit={handleSignUpUser} className="space-y-12">
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
                        placeholder="Enter last name"
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
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
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
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
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
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
                     >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                     </select>
                  </div>
                  <div className="flex-1">
                     <label htmlFor="medium_of_instruction" className="text-sm">
                        Medium of Instruction
                     </label>
                     <select
                        name="medium_of_instruction"
                        id="medium_of_instruction"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
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
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
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
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
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
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
                     />
                  </div>
                  <div className="flex-1">
                     <label htmlFor="status" className="text-sm">
                        Status
                     </label>
                     <select
                        name="status"
                        id="status"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
                     >
                        <option value="">Select Status</option>
                        <option value="Available">Available</option>
                        <option value="Not_Available">Not Available</option>
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
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                        required
                     />
                  </div>
                  <div className="flex-1">
                     <label htmlFor="extra_facilities" className="text-sm">
                        Extra Facilities
                     </label>
                     <input
                        type="text"
                        name="extra_facilities"
                        id="extra_facilities"
                        placeholder="Enter any extra facilities..."
                        className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
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
                     className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                     required
                  />
               </div>
            </div>

            {/* Submit Button */}
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
                     className="hover:underline font-bold text-[#3890d8]"
                  >
                     Login
                  </Link>
               </p>
            </div>
         </form>
      </div>
   );
};

export default InstructorSignUp;
