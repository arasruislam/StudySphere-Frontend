import moment from "moment";
import { useEffect, useState } from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import { useFetch } from "../../../hooks/useFetch";
import axios from "axios";

const TuitionInfo = ({ tuition }) => {
   const [subjects, setSubjects] = useState([]);

   useEffect(() => {
      const fetchSubjects = async () => {
         try {
            const subjectPromises = tuition.subject.map(async (id) => {
               const response = await axios.get(
                  `https://studysphere-dnn6.onrender.com/api/tuitions/subjects/${id}`
               );
               return response.data.name;
            });

            const subjectNames = await Promise.all(subjectPromises);

            setSubjects(subjectNames);
         } catch (error) {
            console.error("Error fetching subjects:", error);
         }
      };

      fetchSubjects();
   }, [tuition.subject]);

   return (
      <>
         <div className="space-y-4 border-b pb-4">
            <h1 className="text-2xl font-bold">{tuition?.title}</h1>
            <div className="text-xs text-gray-400 dark:text-gray-600 flex justify-between items-center gap-4">
               <p>
                  <strong>Published:</strong>{" "}
                  {moment(tuition?.created_at).format("Do MMM, YYYY")}{" "}
               </p>
               <p>
                  <strong>Last update:</strong>{" "}
                  {moment(tuition?.updated_at).endOf("day").fromNow()}
               </p>
            </div>
            <p className="text-justify text-gray-500">{tuition?.description}</p>
         </div>

         <div className="space-y-2 mt-4">
            <p className="flex">
               <span className="flex-1">Subject</span>{" "}
               <span className="flex-1 space-x-2">
                  :{" "}
                  {subjects.map((subject, idx) => (
                     <span key={idx} className="badge badge-outline">
                        {subject}
                     </span>
                  ))}
               </span>
            </p>
            <p className="flex">
               <span className="flex-1">Version</span>{" "}
               <span className="flex-1">: {tuition?.medium} Medium</span>
            </p>
            <p className="flex">
               <span className="flex-1">Tuition Time</span>{" "}
               <span className="flex-1">: {tuition?.tuition_time}</span>
            </p>
            <p className="flex">
               <span className="flex-1">Tuition For</span>{" "}
               <span className="flex-1">: {tuition?.tuition_class}</span>
            </p>
            <p className="flex">
               <span className="flex-1">Gender</span>{" "}
               <span className="flex-1">: {tuition?.student_gender}</span>
            </p>

            <p className="flex">
               <span className="flex-1">Number of Student Allow</span>{" "}
               <span className="flex-1">: {tuition?.number_of_students}</span>
            </p>

            <p className="flex">
               <span className="flex-1">Available</span>
               <span className="flex-1 flex items-center gap-1">
                  :{" "}
                  {tuition?.availability === true ? (
                     <MdCheckCircle size={20} color="#3890d8" />
                  ) : (
                     <MdCancel size={20} color="#e74c3c " />
                  )}
               </span>
            </p>
         </div>
      </>
   );
};

export default TuitionInfo;
