import Lottie from "lottie-react";
import heroJson from "../../Assets/hero.json";

const Hero = () => {
   return (
      <>
         <div className="min-h-[calc(100vh-405px)]">
            <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
               {/* Left side */}
               <div className=" mb-8 md:mb-0 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                     Welcome to{" "}
                     <span className="font-extrabold text-[#3890d8]">
                        Study
                     </span>
                     <span className="font-extrabold text-[#FFC338]">
                        Sphere
                     </span>
                  </h1>
                  <p className="text-lg text-gray-600 mb-6 text-justify">
                     Welcome to StudySphere, your premier destination for
                     discovering top-notch tuition opportunities. Whether you're
                     looking to boost your grades or excel in your studies,
                     we're here to help you achieve academic success. Start your
                     journey with us today and unlock your full potential!
                  </p>
                  <a
                     href="/tuitions"
                     class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-[#3890d8] rounded-full shadow-md group"
                  >
                     <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#3890d8] group-hover:translate-x-0 ease">
                        <svg
                           class="w-6 h-6"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                           ></path>
                        </svg>
                     </span>
                     <span class="absolute flex items-center justify-center w-full h-full text-[#3890d8] font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
                        See Tuition
                     </span>
                     <span class="relative invisible">See Tuition</span>
                  </a>
                  {/* <a
                     href="#get-started"
                     className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-blue-500 transition duration-300"
                  >
                     Get Started
                  </a> */}
               </div>

               {/* Right side */}
               <div>
                  <Lottie
                     animationData={heroJson}
                     loop={true}
                     className="w-72 h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
                     style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Hero;
