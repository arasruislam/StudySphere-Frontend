import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useFetch } from "../../hooks/useFetch";

const Testimonials = () => {
   const [reviewerData, setReviewerData] = useState([]);

   const [reviews] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/tuitions/reviews/`,
   });


   useEffect(() => {
      // Fetch reviewer data for each review
      const fetchReviewers = async () => {
         const reviewerDetails = await Promise.all(
            reviews.map(async (review) => {
               const response = await fetch(
                  `https://studysphere-dnn6.onrender.com/api/student/list/${review.reviewer}`
               );
               const data = await response.json();
               return { ...review, reviewerDetails: data };
            })
         );
         setReviewerData(reviewerDetails);
      };

      if (reviews.length > 0) {
         fetchReviewers();
      }
   }, [reviews]);

   console.log(reviewerData);

   return (
      <div className="mt-16 bg-gray-50">
         <div className="text-center mb-8">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4">
               Student Success Stories
            </h1>
            <p className="text-sm text-gray-600">
               Hear from students who achieved their goals with expert guidance.
            </p>
         </div>

         <div className="container mx-auto">
            <Swiper
               slidesPerView={1}
               spaceBetween={30}
               breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
               }}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
               }}
               loop={true}
               pagination={{
                  clickable: true,
               }}
               navigation={true}
               modules={[Pagination, Autoplay, Navigation]}
               className="mySwiper"
            >
               {reviewerData.map((review) => (
                  <SwiperSlide key={review.id}>
                     <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm mx-auto flex flex-col justify-between h-full">
                        {/* Reviewer Image */}
                        <div className="flex items-center mb-4">
                           <img
                              src={
                                 review.reviewerDetails?.profile_img ||
                                 "https://via.placeholder.com/150"
                              }
                              alt="reviewer photo"
                              className="w-16 h-16 rounded-full mr-4 object-cover"
                           />
                           <div>
                              <h3 className="font-bold text-lg">
                                 {review?.reviewerDetails?.user?.first_name}{" "}
                                 {review?.reviewerDetails?.user?.last_name}
                              </h3>
                              <p className="text-gray-500 text-sm">
                                 @{review?.reviewerDetails?.user?.username}
                              </p>
                           </div>
                        </div>

                        {/* Review Content */}
                        <p className="text-gray-700 italic mb-4 flex-grow">
                           "{review?.body}"
                        </p>

                        {/* Tuition Title and Rating */}
                        <div className="flex justify-between items-center mt-6 border-t pt-4">
                           <div>
                              <h4 className="text-sm font-semibold text-blue-600">
                                 {review?.tuitionTitle || "Tuition Title"}
                              </h4>
                              <p className="text-xs text-gray-500">
                                 {new Date(review?.created).toLocaleDateString(
                                    "en-US",
                                    {
                                       year: "numeric",
                                       month: "long",
                                       day: "numeric",
                                    }
                                 )}
                              </p>
                           </div>
                           <div className="text-yellow-500 text-lg">
                              {review?.rating}
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default Testimonials;