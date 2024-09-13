import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "../Loader";

const InstructorLogin = () => {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   // handle form submit
   const handleLogin = async (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;

      try {
         setLoading(true);
         const response = await axios.post(
            "https://studysphere-dnn6.onrender.com/api/instructor/login/",
            { username, password }
         );

         if (response.data.token && response.data.instructor_id) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("instructor_id", response.data.instructor_id);
            localStorage.setItem("role", "instructor");
         }

         if (response.status === 200) {
            toast.success("login successfully.");
            navigate("/profile");
         } else {
            toast.error("Something went wrong. Please try again.");
         }
      } catch (error) {
         toast.error("An error occurred. Please try again.");
      } finally {
         setLoading(false);
      }
   };

   if (loading) return <Loader />;

   return (
      <div className="flex flex-col max-w-md mx-auto shadow-md p-6 rounded-md sm:p-8 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
         <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm text-gray-400 dark:text-gray-600">
               Sign in as{" "}
               <Link
                  to="/login"
                  className="hover:underline font-bold text-[#3890d8]"
               >
                  Student
               </Link>
            </p>
         </div>
         <form onSubmit={handleLogin} className="space-y-12">
            <div className="space-y-4">
               <div>
                  <label htmlFor="username" className="block mb-2 text-sm">
                     Instructor Username
                  </label>
                  <input
                     type="text"
                     name="username"
                     id="username"
                     placeholder="username"
                     className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  />
               </div>
               <div>
                  <div className="flex justify-between mb-2">
                     <label htmlFor="password" className="text-sm">
                        Password
                     </label>
                  </div>
                  <input
                     type="password"
                     name="password"
                     id="password"
                     placeholder="*****"
                     className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  />
               </div>
            </div>
            <div className="space-y-2">
               <div>
                  <button
                     type="submit"
                     className="w-full px-8 py-3 font-semibold rounded-md bg-[#3890d8] dark:bg-[#3890d8] text-gray-900 dark:text-gray-50 hover:scale-95 transition-all duration-300"
                  >
                     Sign in
                  </button>
               </div>
               <p className="px-6 text-sm text-center text-gray-400 dark:text-gray-600">
                  Don't have an account yet?{" "}
                  <Link
                     to="/signUp"
                     className="hover:underline text-[#FFC338] dark:text-[#FFC338]"
                  >
                     SignUp
                  </Link>
               </p>
            </div>
         </form>
      </div>
   );
};

export default InstructorLogin;
