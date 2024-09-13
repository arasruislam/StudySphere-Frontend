import React from 'react';

const About = () => {
   return (
      <div className="bg-gray-100 py-16 px-6 lg:px-20">
         {/* Section Heading */}
         <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
               About StudySphere
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg">
               Connecting students and educators through innovative and
               personalized learning.
            </p>
         </div>

         {/* Mission Section */}
         <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
               Our Mission
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center max-w-4xl mx-auto">
               At StudySphere, we believe that every student deserves access to
               quality education, regardless of their location or background.
               Our mission is to bridge the gap between passionate educators and
               eager learners by providing a platform where knowledge flows
               seamlessly, and learning is a shared journey.
            </p>
         </div>

         {/* Offerings Section */}
         <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
               What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* Offer 1 */}
               <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                     Verified Tutors
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                     All our tutors are thoroughly vetted to ensure they meet
                     our high standards of academic excellence and teaching
                     ability.
                  </p>
               </div>

               {/* Offer 2 */}
               <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                     Flexible Learning
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                     Choose from a wide variety of courses, timings, and tutors
                     to fit your schedule and learning pace.
                  </p>
               </div>

               {/* Offer 3 */}
               <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                     Interactive Sessions
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                     Enjoy one-on-one or group tuition sessions with features
                     like video calls, screen sharing, and real-time feedback.
                  </p>
               </div>
            </div>
         </div>

         {/* Why Choose Us Section */}
         <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
               Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Reason 1 */}
               <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                     Comprehensive Tutor Profiles
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                     Each tutor's profile includes qualifications, experience,
                     and reviews from previous students, allowing you to make an
                     informed decision.
                  </p>
               </div>

               {/* Reason 2 */}
               <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                     Affordable Pricing
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                     We offer a range of pricing options to ensure that
                     high-quality tuition is accessible to all.
                  </p>
               </div>

               {/* Reason 3 */}
               <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                     Student-Centric Approach
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                     Our platform is built with the student in mind, focusing on
                     ease of use, customization, and effective learning
                     outcomes.
                  </p>
               </div>

               {/* Reason 4 */}
               <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                     Security and Privacy
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                     Your safety is our top priority. All interactions on
                     StudySphere are secure, and your personal information is
                     protected.
                  </p>
               </div>
            </div>
         </div>

         {/* Join Us Section */}
         <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
               Join Our Community
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-6">
               StudySphere is more than just a tuition platform—it's a community
               of learners and educators who are passionate about education. We
               invite you to explore our courses, connect with our tutors, and
               embark on a learning journey that is engaging, supportive, and
               tailored just for you.
            </p>
            <a
               href="/signUp"
               className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
               Get Started
            </a>
         </div>
      </div>
   );
};

export default About;