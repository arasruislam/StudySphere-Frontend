import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TuitionCard from "../Components/Sections/Tuition/TuitionCard";
import { useSearchParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import EmptyState from "../Components/Sections/EmptyState";

const Tuition = () => {
   const [tuitions, setTuitions] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const navigate = useNavigate();

   const page = parseInt(searchParams.get("page") || 1);
   const [totalPages, setTotalPages] = useState(null);

   const CLASS_CHOICES = [
      { label: "All", value: "All" },
      { label: "Class 1", value: "Class 1" },
      { label: "Class 2", value: "Class 2" },
      { label: "Class 3", value: "Class 3" },
      { label: "Class 4", value: "Class 4" },
      { label: "Class 5", value: "Class 5" },
      { label: "Class 6", value: "Class 6" },
      { label: "Class 7", value: "Class 7" },
      { label: "Class 8", value: "Class 8" },
      { label: "Class 9", value: "Class 9" },
      { label: "Class 10", value: "Class 10" },
      { label: "HSC 1", value: "HSC 1" },
      { label: "HSC 2", value: "HSC 2" },
   ];

   useEffect(() => {
      const fetchTuitions = async () => {
         try {
            const response = await axios.get(
               `https://studysphere-dnn6.onrender.com/api/tuitions/list/?page=${page}`
            );
            setTuitions(response.data.results);
            setFilteredData(response.data.results);
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

   // handle filter by class
   const handleFilterByClass = (tuitionClass) => {
      if (tuitionClass === "All") {
         setFilteredData(tuitions);
         navigate("/tuitions");
      } else {
         const filteredData = tuitions.filter(
            (data) => data.tuition_class === tuitionClass
         );
         setFilteredData(filteredData);
         navigate(`/tuitions/?page=${page}&filtered_by=${tuitionClass}`);
      }
   };

   if (tuitions < 1) return <Loader />;

   return (
      <>
         <div className="mb-6 pb-4 border-b w-full text-end">
            <div className="dropdown dropdown-hover dropdown-end">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 text-white font-bold bg-[#3890d8] border-none hover:bg-[#3890d8]"
               >
                  Filter by Class
               </div>
               <ul
                  tabIndex={0}
                  className="dropdown-content  menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
               >
                  {CLASS_CHOICES.map((choice) => (
                     <li key={choice.value}>
                        <a onClick={() => handleFilterByClass(choice.value)}>
                           {choice.label}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         {/* all tuitions data */}
         {filteredData.length < 1 ? (
            <EmptyState
               message="No tuitions Found"
               address="/tuitions"
               label="Browse tuitions"
            />
         ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredData.map((tuition) => (
                  <TuitionCard key={tuition.id} tuition={tuition} />
               ))}
            </div>
         )}

         {filteredData.length > 0 && (
            <div className="grid place-items-center mt-8">
               <div className="join">{renderPagination()}</div>
            </div>
         )}
      </>
   );
};

export default Tuition;
