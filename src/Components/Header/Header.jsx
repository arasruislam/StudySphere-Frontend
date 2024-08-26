import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import logo from "../../Assets/logo.png";

const Header = () => {
   const navItems = (
      <>
         <li>
            <NavLink
               to="/"
               className={({ isActive }) =>
                  isActive
                     ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-white hover:border-[#3890d8] hover:text-black text-white"
                     : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white"
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
                     ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-white hover:border-[#3890d8] hover:text-black text-white"
                     : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white"
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
                     ? "border border-[#3890d8] bg-[#3890d8] font-bold transition-color hover:bg-white hover:border-[#3890d8] hover:text-black text-white"
                     : "transition-color hover:bg-[#3890d8] hover:border-[#3890d8] hover:text-white"
               }
            >
               Contact Us
            </NavLink>
         </li>
      </>
   );

   return (
      <Container>
         <div className="navbar p-2 shadow-lg rounded-lg mt-2">
            <div className="navbar-start">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                     {navItems}
                  </ul>
               </div>

               <div className="flex items-center gap-2 font-extrabold text-3xl ">
                  <img
                     style={{ width: 70, height: 70 }}
                     src={logo}
                     alt="Study Sphere"
                  />
                  <p>
                     <span className="text-[#3890d8]">Study</span>
                     <span className="text-[#FFC338]">Sphere</span>
                  </p>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal gap-4">{navItems}</ul>
            </div>

            {/* navbar end profile area */}
            <div className="navbar-end">
               <div className="flex-none">
                  <div className="dropdown dropdown-end">
                     <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                     >
                        <div className="w-10 rounded-full">
                           <img
                              alt="Tailwind CSS Navbar component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                           />
                        </div>
                     </div>
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                     >
                        <li>
                           <a className="justify-between">Profile</a>
                        </li>
                        <li>
                           <a>Log in</a>
                        </li>
                        <li>
                           <a>Sing Up</a>
                        </li>
                     </ul>
                  </div>
                  <div className="dropdown dropdown-end">
                     <label className="grid cursor-pointer place-items-center">
                        <input
                           type="checkbox"
                           value="synthwave"
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
                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default Header;
