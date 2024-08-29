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
   const { userData } = useContext(AuthContext);
   const navigate = useNavigate();
   const token = localStorage.getItem("token");

   // logout
   const handleLogout = async () => {
      try {
         setLoading(true);
         fetch("https://studysphere-dnn6.onrender.com/accounts/user/logout/", {
            method: "POST",
            headers: {
               Authorization: `Token ${token}`,
               "Content-Type": "application/json",
            },
         })
            .then((res) => res.json())
            .then((data) => {
               localStorage.removeItem("token");
               localStorage.removeItem("user_id");
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
         {/* conditional nav item */}
         {token && (
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

                  {/* nav items */}
                  <div className="navbar-center hidden lg:flex">
                     <ul className="menu menu-horizontal gap-4">{navItems}</ul>
                  </div>

                  {/* navbar end profile area */}
                  <div className="navbar-end space-x-2">
                     {/* theme switcher */}
                     <label className="grid cursor-pointer place-items-center">
                        <input
                           type="checkbox"
                           value="dark"
                           className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                        />
                        <svg
                           className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                           xmlns="http://www.w3.org/2000/svg"
                           width="14"
                           height="14"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <circle cx="12" cy="12" r="5" />
                           <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                           className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                           xmlns="http://www.w3.org/2000/svg"
                           width="14"
                           height="14"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                     </label>

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
