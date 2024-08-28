import { Link } from "react-router-dom";
const EmptyState = ({ message, address, label }) => {
   return (
      <div className="min-h-[calc(100vh-405px)] gap-5 flex flex-col justify-center items-center pb-16 ">
         <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>

         <Link
            to={address}
            className="relative inline-block px-4 py-2 font-medium group"
         >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#FFC338] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#FFC338] group-hover:bg-[#3890d8]"></span>
            <span className="relative text-black group-hover:text-white">
               {label}
            </span>
         </Link>
      </div>
   );
};

export default EmptyState;
