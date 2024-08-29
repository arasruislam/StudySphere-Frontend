import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
   const [data, setData] = useState([]);
   // const Url = baseUrl;

   useEffect(() => {
      fetch(url)
         .then((res) => res.json())
         .then((data) => setData(data));
   }, [url]);

   return [data];
};
