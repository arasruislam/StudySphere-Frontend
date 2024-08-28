import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TuitionCard from "../Components/Sections/TuitionCard";
import { useSearchParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Tuition = () => {
   const [tuitions, setTuitions] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const navigate = useNavigate();

   const page = parseInt(searchParams.get("page") || 1);
   const [totalPages, setTotalPages] = useState(null);

   useEffect(() => {
      const fetchTuitions = async () => {
         try {
            const response = await axios.get(
               `https://studysphere-dnn6.onrender.com/tuitions/list/?page=${page}`
            );
            setTuitions(response.data.results);
            setTotalPages(Math.ceil(response.data.count / 9));
         } catch (error) {
            toast.error("Sorry, some error occurred.");
         }
      };

      fetchTuitions();
   }, [page]);

   // handle pagination
   const handlePagination = (page) => {
      navigate(`/tuitions/?page=${page}`);
   };

   // dynamic pagination rendering
   const renderPagination = () => {
      const paginationItems = [];

      if (page > 3) {
         paginationItems.push(
            <button
               key={1}
               className="join-item btn"
               onClick={() => handlePagination(1)}
            >
               1
            </button>
         );
         paginationItems.push(
            <button key="dot-left" className="join-item btn btn-disabled">
               ...
            </button>
         );
      }

      for (
         let i = Math.max(1, page - 2);
         i <= Math.min(page + 2, totalPages);
         i++
      ) {
         paginationItems.push(
            <button
               key={i}
               className={`join-item btn ${
                  page === i
                     ? "btn-active text-white bg-[#3890d8] border-[#3890d8] hover:bg-[#3890d8]"
                     : ""
               }`}
               onClick={() => handlePagination(i)}
            >
               {i}
            </button>
         );
      }

      if (page < totalPages - 2) {
         // 4 , 98
         paginationItems.push(
            <button key="dot-right" className="join-item btn btn-disabled">
               ...
            </button>
         );
         paginationItems.push(
            <button
               key={totalPages}
               className="join-item btn"
               onClick={() => handlePagination(totalPages)}
            >
               {totalPages}
            </button>
         );
      }

      return paginationItems;
   };

   if (tuitions < 1) return <Loader />;
   return (
      <>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tuitions.map((tuition) => (
               <TuitionCard key={tuition.id} tuition={tuition} />
            ))}
         </div>

         <div className="grid place-items-center mt-8">
            <div className="join">{renderPagination()}</div>
         </div>
      </>
   );
};

export default Tuition;
