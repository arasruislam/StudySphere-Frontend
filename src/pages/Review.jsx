import React from "react";
import { useLoaderData } from "react-router-dom";

const Review = () => {
   const loader = useLoaderData();
   console.log(loader);

   const handleSubmitReview = (e) => {
      e.preventDefault();
      const body = e.target.body.value;
      const rating = e.target.rating.value;
      // review data
      const reviewData = {
         // reviewer:
         body: body,
         rating: rating
      }
   };

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
            {/* {message && (
               <p className="text-center mt-4 text-sm font-medium text-green-600 dark:text-green-400">
                  {message}
               </p>
            )} */}
         </form>
      </div>
   );
};

export default Review;
