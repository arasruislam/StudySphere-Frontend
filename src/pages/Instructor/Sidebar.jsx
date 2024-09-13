import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";
import {
   FaUser,
   FaCog,
   FaPlus,
   FaUsers,
   FaHome,
   FaBloggerB,
} from "react-icons/fa"; // Import additional icons
import logo from "../../Assets/logo.png";
// import "./Sidebar.css";

const Sidebar = () => {
   const [toggle, setToggle] = useState(false);

   const toggleSidebar = () => {
      setToggle(!toggle);
   };

   return (
      <>
         <nav
            className={`w-1/2 fixed lg:w-64 z-30 lg:static bg-white shadow-md   ${
               toggle ? "translate-x-0 z-30" : "-translate-x-full"
            } transform z-30 lg:translate-x-0 transition-transform duration-200 ease-in-out min-h-screen`}
         >
            <Link to="/">
               <div className="flex items-center space-x-2 pt-3 px-2">
                  <img className="w-10 object-cover" src={logo} alt="logo" />
                  <p className="text-2xl base-color flex font-bold">
                     <span className="text-[#3890d8]">Study</span>
                     <span className="text-[#FFC338]">Sphere</span>
                  </p>
               </div>
            </Link>

            <div>
               <ul className="pt-10 flex flex-col space-y-5 text-xl">
                  {/* <li className="hover:text-orange-500 ">
                     <NavLink
                        // to="/dashboard/myProfile"
                        className=" px-4 py-2  duration-150 flex items-center space-x-5"
                     >
                        <span className="mr-2 -mt-1">
                           <FaUser />
                        </span>{" "}
                        My Profile
                     </NavLink>
                  </li> */}
                  <li className="hover:text-orange-500">
                     <NavLink
                        to="/instructor/manage_tuition"
                        className=" px-4 py-2  duration-150 flex items-center"
                     >
                        <span className="mr-2">
                           <FaCog />
                        </span>{" "}
                        Manage Tuitions
                     </NavLink>
                  </li>

                  <li className="hover:text-orange-500">
                     <NavLink
                        to="/instructor/add_tuition"
                        className=" px-4 py-2  duration-150 flex items-center"
                     >
                        <span className="mr-2">
                           <FaPlus />
                        </span>{" "}
                        Add Tuition
                     </NavLink>
                  </li>
                  <li className="hover:text-orange-500">
                     <NavLink
                        to="/instructor/all_applications"
                        className="px-4 py-2  duration-150 flex items-center"
                     >
                        <span className="mr-2">
                           <FaUsers />
                        </span>{" "}
                        Applications
                     </NavLink>
                  </li>
                  <div className="divider"></div>

                  <li className="hover:text-orange-500 h">
                     <NavLink
                        to="/"
                        className=" px-4 py-2  duration-150 flex items-center"
                     >
                        <span className="mr-2">
                           <FaHome />
                        </span>{" "}
                        Home
                     </NavLink>
                  </li>
               </ul>

               <ul></ul>
            </div>
         </nav>

         <div className="flex justify-between h-fit p-4 bg-white shadow fixed w-full lg:hidden">
            <Link to="/" className="flex items-center space-x-2 ">
               <img className="w-10 object-cover" src={logo} alt="logo" />
               <p className="text-2xl base-color flex font-bold">
                  <span className="text-[#3890d8]">Study</span>
                  <span className="text-[#FFC338]">Sphere</span>
               </p>
            </Link>
            <button
               onClick={toggleSidebar}
               className="lg:hidden  text-3xl font-bold base-color hover:text-[#1a64eb]"
            >
               {toggle ? <IoCloseCircleSharp /> : <AiOutlineAlignRight />}
            </button>
         </div>
      </>
   );
};

export default Sidebar;
