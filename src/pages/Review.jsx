import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Review = () => {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const loader = useLoaderData();
   const token = localStorage.getItem("token");
   const user_id = localStorage.getItem("user_id");
   const id = loader[0].id;

   // console.log({token, user_id, id});

   const handleSubmitReview = async (e) => {
      e.preventDefault();
      const body = e.target.body.value;
      const rating = e.target.rating.value;

      // review data
      const reviewData = {
         reviewer: JSON.parse(user_id),
         tuition: loader[0].id,
         body: body,
         rating: rating,
      };

      try {
         setLoading(true);
         const response = await fetch(
            "http://studysphere-dnn6.onrender.com/tuitions/reviews/",
            {
               method: "POST",
               headers: {
                  Authorization: `Token ${token}`,
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(reviewData),
            }
         );

         if (response.ok) {
            toast.success("Thanks for you review.");
            navigate("/");
         } else {
            toast.error("Failed to submit the review.");
         }
      } catch (error) {
         toast.error("An error occurred while submitting the review.");
      } finally {
         setLoading(false);
      }

      // fetch("http://studysphere-dnn6.onrender.com/tuitions/reviews/", {
      //    method: "POST",
      //    headers: {
      //       Authorization: `Token ${token}`,
      //       "Content-Type": "application/json",
      //    },
      //    body: JSON.stringify(reviewData),
      // })
      //    .then((res) => res.json())
      //    .then((data) => console.log(data));
   
   };

   if (loading) return <Loader />;

   return (
      <div className="max-w-xl mx-auto mt-8 p-6 bg-gray-50 shadow-md rounded-lg ">
         <h2 className="text-2xl font-semibold mb-6 text-center">
            Submit Your Review
         </h2>
         <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
               <label className="block text-gray-700  text-sm font-medium mb-2">
                  Rating:
               </label>
               <select
                  name="rating"
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
               >
                  <option value="">Select Rating</option>
                  <option value="⭐">⭐</option>
                  <option value="⭐⭐">⭐⭐</option>
                  <option value="⭐⭐⭐">⭐⭐⭐</option>
                  <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                  <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
               </select>
            </div>
            <div>
               <label className="block text-gray-700 text-sm font-medium mb-2">
                  Review:
               </label>
               <textarea
                  name="body"
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  placeholder="Write your review here..."
               />
            </div>
            <div className="flex justify-center">
               <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
               >
                  Submit Review
               </button>
            </div>
         </form>
      </div>
   );
};

export default Review;
