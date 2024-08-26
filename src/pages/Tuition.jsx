import axios from "axios";
import React, { useEffect, useState } from "react";

const Tuition = () => {
   const [tuitions, setTuitions] = useState([]);

   useEffect(() => {
      const fetchTuitions = async () => {
         try {
            const response = await axios.get(
               "https://studysphere-dnn6.onrender.com/tuitions/list/"
            );
            setTuitions(response.data.results);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchTuitions();
   }, []);

   return (
      <>
         <div>hello</div>
      </>
   );
};

export default Tuition;
