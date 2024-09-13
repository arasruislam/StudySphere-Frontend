import React, { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import profile_img from "/profile.png";

const ReviewPerTuition = ({ tuition }) => {
   // Fetch reviews for the tuition
   const [reviews] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/tuitions/reviews/?tuition=${tuition.id}`,
   });

   // State to store reviewer details for each review
   const [reviewerDetails, setReviewerDetails] = useState([]);

   useEffect(() => {
      const fetchReviewers = async () => {
         const reviewerInfo = await Promise.all(
            reviews.map(async (review) => {
               // Fetch the actual reviewer (student) details based on reviewer_id
               const response = await fetch(
                  `https://studysphere-dnn6.onrender.com/api/student/list/${review.reviewer}`
               );
               const data = await response.json();
               return { ...review, reviewerDetails: data };
            })
         );
         setReviewerDetails(reviewerInfo);
      };

      if (reviews.length > 0) {
         fetchReviewers();
      }
   }, [reviews]);

   return (
      <>
         <h1>Reviews: ({reviews.length})</h1>
         {reviewerDetails.map((review, idx) => (
            <div key={idx} className="flex gap-4 border-b py-4">
               <div className="avatar">
                  <div className="w-16 h-16 rounded">
                     <img
                        src={
                           review?.reviewerDetails?.profile_img || profile_img
                        }
                        alt="Reviewer Profile"
                        className="object-cover"
                     />
                  </div>
               </div>
               <div className="space-y-4">
                  <div>
                     <h2 className="text-xl font-bold">
                        {review?.reviewerDetails?.user?.first_name}{" "}
                        {review?.reviewerDetails?.user?.last_name}
                     </h2>
                     <p>{review.rating}</p>
                  </div>
                  <p className="text-gray-500">{review.body}</p>
               </div>
            </div>
         ))}
      </>
   );
};

export default ReviewPerTuition;
