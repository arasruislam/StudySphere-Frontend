import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import logo from "../../Assets/logo.png";
import demoImg from "../../Assets/user.png";
import Loader from "../../pages/Loader";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Layouts/Primary";

const Header = () => {
   const [loading, setLoading] = useState(false);
   const { userData, token } = useContext(AuthContext);
   const role = localStorage.getItem("role");
   const user_id = localStorage.getItem("student_id");
   const navigate = useNavigate();

   // logout
   const handleLogout = async () => {
      try {
         setLoading(true);
         fetch("https://studysphere-dnn6.onrender.com/api/student/logout/", {
            method: "POST",
            headers: {
               Authorization: `Token ${token}`,
               "Content-Type": "application/json",
            },
         })
            .then((res) => res.json())
            .then((data) => {
               localStorage.removeItem("token");
               localStorage.removeItem("student_id");
               localStorage.removeItem("instructor_id");
               localStorage.removeItem("role");
            });
      } finally {
         setLoading(false);
         navigate("/login");
         toast.success("logout successfully.");
      }
   };

   const navItems = (
      <>
         <li>
            <NavLink
               to="/"
               className={({ isActive }) =>
                  isActive
                     ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#3890d8] hover:border-[#3890d8]   text-white"
                     : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
               }
            >
               Home
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/tuitions"
               className={({ isActive }) =>
                  isActive
                     ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#3890d8] hover:border-[#3890d8]   text-white"
                     : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
               }
            >
               Tuitions
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/contact_us"
               className={({ isActive }) =>
                  isActive
                     ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#3890d8] hover:border-[#3890d8]   text-white"
                     : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
               }
            >
               Contact Us
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/about"
               className={({ isActive }) =>
                  isActive
                     ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#3890d8] hover:border-[#3890d8]   text-white"
                     : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
               }
            >
               About Us
            </NavLink>
         </li>
         {/* conditional nav item */}
         {user_id && (
            <li>
               <NavLink
                  to="/tuition_history"
                  className={({ isActive }) =>
                     isActive
                        ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#3890d8] hover:border-[#3890d8]   text-white"
                        : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
                  }
               >
                  Tuition History
               </NavLink>
            </li>
         )}
         {/* instructor nav item */}
         {role && (
            <li>
               <NavLink
                  to="/instructor/manage_tuition"
                  className={({ isActive }) =>
                     isActive
                        ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#3890d8] hover:border-[#3890d8]   text-white"
                        : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
                  }
               >
                  Dashboard
               </NavLink>
            </li>
         )}
      </>
   );

   const authenticationItems = (
      <>
         {token ? (
            <>
               <li>
                  <NavLink
                     to="/profile"
                     className={({ isActive }) =>
                        isActive
                           ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#3890d8] hover:border-[#3890d8]   text-white"
                           : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
                     }
                  >
                     Profile
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/change_password"
                     className={({ isActive }) =>
                        isActive
                           ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#3890d8] hover:border-[#3890d8]   text-white"
                           : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
                     }
                  >
                     Change Password
                  </NavLink>
               </li>
               <li>
                  <a
                     onClick={handleLogout}
                     to="#"
                     className="transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
                  >
                     logout
                  </a>
               </li>
            </>
         ) : (
            <>
               <li>
                  <NavLink
                     to="/login"
                     className={({ isActive }) =>
                        isActive
                           ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#3890d8] hover:border-[#3890d8]   text-white"
                           : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
                     }
                  >
                     Log in
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/signUp"
                     className={({ isActive }) =>
                        isActive
                           ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-[#3890d8] hover:border-[#3890d8]   text-white"
                           : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white hover:scale-105"
                     }
                  >
                     Sign Up
                  </NavLink>
               </li>
            </>
         )}
      </>
   );

   if (loading) return <Loader />;

   return (
      <>
         <div className="shadow-md bg-white fixed top-0 right-0 left-0 py-1 z-50">
            <Container>
               <div className="navbar p-0">
                  {/* navbar logo */}
                  <div className="navbar-start">
                     <Link
                        to="/"
                        className="flex items-center gap-2 font-extrabold text-3xl "
                     >
                        <img
                           style={{ width: 60, height: 60 }}
                           src={logo}
                           alt="Study Sphere"
                        />
                        <p className="hidden md:flex">
                           <span className="text-[#3890d8]">Study</span>
                           <span className="text-[#FFC338]">Sphere</span>
                        </p>
                     </Link>
                  </div>

                  {/* navbar end profile area */}
                  <div className="navbar-end">
                     {/* nav items */}
                     <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal gap-4">
                           {navItems}
                        </ul>
                     </div>
                     {/* profile icon */}
                     <div className="dropdown dropdown-end">
                        <div
                           tabIndex={0}
                           role="button"
                           className="btn btn-ghost btn-circle avatar hover:border-[#3890d8]"
                        >
                           <div className="w-10 rounded-full">
                              <img
                                 alt="Tailwind CSS Navbar component"
                                 src={userData?.profile_image || demoImg}
                              />
                           </div>
                        </div>
                        <ul
                           tabIndex={0}
                           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
                        >
                           <span className="border-b pb-2 mb-2 block lg:hidden">
                              {navItems}
                           </span>
                           {authenticationItems}
                        </ul>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
      </>
   );
};

export default Header;
