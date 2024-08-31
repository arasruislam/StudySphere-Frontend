import { MdEmail, MdPhone, MdMap } from "react-icons/md";

const Contact = () => {
   return (
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
         <h1 className="text-4xl font-extrabold text-gray-800 text-center">
            Contact Us
         </h1>
         <p className="text-gray-600 text-center mt-4">
            We'd love to hear from you! Reach out to us through any of the
            following methods.
         </p>

         <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-4">
               <span className="text-blue-500">
                  <MdEmail size={30} />
               </span>
               <p className="text-gray-700 text-lg">
                  <a
                     href="mailto:info@studysphere.com"
                     className="text-blue-600 underline"
                  >
                     info@studysphere.com
                  </a>
               </p>
            </div>

            <div className="flex items-center space-x-4">
               <span className="text-blue-500">
                  <MdPhone size={30} />
               </span>
               <p className="text-gray-700 text-lg">
                  Phone:{" "}
                  <a href="tel:+1234567890" className="text-blue-600 underline">
                     +1 (234) 567-890
                  </a>
               </p>
            </div>

            <div className="flex items-center space-x-4">
               <span className="text-blue-500">
                  <MdMap size={30} />
               </span>
               <p className="text-gray-700 text-lg">
                  Address: 123 Study Sphere Avenue, Knowledge City, EDU 45678
               </p>
            </div>
         </div>
      </div>
   );
};

export default Contact;
