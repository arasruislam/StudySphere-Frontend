import ApplicationTable from "../Components/Sections/ApplicationTable";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Layouts/Primary";
import { useFetch } from "../hooks/useFetch";

const TuitionHistory = () => {
   const { user_id } = useContext(AuthContext);

   const [data] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/tuitions/applications/?student=${user_id}`,
   });

   return (
      <>
         {/* all application in table */}
         <ApplicationTable data={data} />
      </>
   );
};

export default TuitionHistory;
