import React, { useState, useContext } from "react";
import { AuthContext } from "../../Layouts/Instructor";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";

const AddTuition = () => {
   const { userData, token } = useContext(AuthContext);
   const [subjects] = useFetch({
      url: `https://studysphere-dnn6.onrender.com/api/tuitions/subjects/`,
   });

   // handle add tuition data
   const handleAddTuitionData = async (e) => {
      e.preventDefault();

      // TuitionData object to handle form data including file
      const selectedSubjects = Array.from(e.target.subject.options)
         .filter((option) => option.selected)
         .map((option) => option.value);

      const TuitionData = {
         instructor: userData.id,
         title: e.target.title.value,
         description: e.target.description.value,
         tuition_class: e.target.tuition_class.value,
         subject: selectedSubjects,
         availability: e.target.availability.checked,
         image: e.target.image.value,
         medium: e.target.medium.value,
         student_gender: e.target.student_gender.value,
         instructor_gender: e.target.instructor_gender.value,
         tuition_time: e.target.tuition_time.value,
         number_of_students: e.target.number_of_students.value,
         salary: e.target.salary.value,
         location: e.target.location.value,
      };

      console.log(TuitionData);

      try {
         const response = await fetch(
            "https://studysphere-dnn6.onrender.com/api/tuitions/all/",
            {
               method: "POST",
               headers: {
                  Authorization: `Token ${token}`,
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(TuitionData),
            }
         );

         console.log(response);

         if (response.ok) {
            toast.success("Tuition added successfully!");
            // Clear form fields
            e.target.reset();
         } else {
            const data = await response.json();
            console.log(data);
            toast.error("Failed to add tuition");
         }
      } catch (error) {
         console.error("Error:", error);
         toast.error("Something went wrong!");
      }
   };

   const CLASS_CHOICES = [
      { label: "Class 1", value: "Class 1" },
      { label: "Class 2", value: "Class 2" },
      { label: "Class 3", value: "Class 3" },
      { label: "Class 4", value: "Class 4" },
      { label: "Class 5", value: "Class 5" },
      { label: "Class 6", value: "Class 6" },
      { label: "Class 7", value: "Class 7" },
      { label: "Class 8", value: "Class 8" },
      { label: "Class 9", value: "Class 9" },
      { label: "Class 10", value: "Class 10" },
      { label: "HSC 1", value: "HSC 1" },
      { label: "HSC 2", value: "HSC 2" },
   ];

   const MEDIUM_OF_INSTRUCTION_CHOICES = [
      { label: "Both", value: "Both" },
      { label: "Bangla", value: "Bangla" },
      { label: "English", value: "English" },
   ];

   const GENDER_CHOICES = [
      { label: "Both", value: "Both" },
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
   ];

   const TIME_CHOICES = [
      { label: "Morning", value: "Morning" },
      { label: "Afternoon", value: "Afternoon" },
      { label: "Evening", value: "Evening" },
   ];

   return (
      <div className="flex flex-col w-full md:max-w-3xl mx-auto shadow-md p-6 rounded-md sm:p-10 bg-white">
         <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Add Tuition</h1>
            <p className="text-sm text-gray-400 dark:text-gray-600">
               Fill out the form below to add a new tuition opportunity.
            </p>
         </div>

         <form onSubmit={handleAddTuitionData} className="space-y-12">
            <div className="space-y-4">
               {/* Tuition Title */}
               <div>
                  <label htmlFor="title" className="text-sm">
                     Tuition Title
                  </label>
                  <input
                     type="text"
                     name="title"
                     id="title"
                     placeholder="Enter tuition title"
                     className="w-full px-3 py-2 border rounded-md"
                     required
                  />
               </div>

               {/* Tuition Image */}
               <div>
                  <label htmlFor="image" className="text-sm">
                     Image URL
                  </label>
                  <input
                     type="text"
                     name="image"
                     id="image"
                     placeholder="Enter image URL"
                     className="w-full px-3 py-2 border rounded-md"
                  />
               </div>

               {/* Description */}
               <div>
                  <label htmlFor="description" className="text-sm">
                     Description
                  </label>
                  <textarea
                     name="description"
                     id="description"
                     placeholder="Enter a brief description"
                     className="w-full px-3 py-2 border rounded-md"
                  />
               </div>

               {/* Tuition Class &Medium of Instruction  */}
               <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1">
                     <label htmlFor="tuition_class" className="text-sm">
                        Class
                     </label>
                     <select
                        name="tuition_class"
                        id="tuition_class"
                        className="min-w-full px-3 py-2 border rounded-md"
                        required
                     >
                        <option value="">Select Class</option>
                        {CLASS_CHOICES.map((choice) => (
                           <option key={choice.value} value={choice.value}>
                              {choice.label}
                           </option>
                        ))}
                     </select>
                  </div>
                  <div className="flex-1">
                     <label htmlFor="medium" className="text-sm">
                        Medium of Instruction
                     </label>
                     <select
                        name="medium"
                        id="medium"
                        className="w-full px-3 py-2 border rounded-md"
                        required
                     >
                        <option value="">Select Medium</option>
                        {MEDIUM_OF_INSTRUCTION_CHOICES.map((choice) => (
                           <option key={choice.value} value={choice.value}>
                              {choice.label}
                           </option>
                        ))}
                     </select>
                  </div>
               </div>

               {/* Gender Choices */}
               <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1">
                     <label htmlFor="student_gender" className="text-sm">
                        Student Gender
                     </label>
                     <select
                        name="student_gender"
                        id="student_gender"
                        className="w-full px-3 py-2 border rounded-md"
                        required
                     >
                        <option value="">Select Gender</option>
                        {GENDER_CHOICES.map((choice) => (
                           <option key={choice.value} value={choice.value}>
                              {choice.label}
                           </option>
                        ))}
                     </select>
                  </div>

                  <div className="flex-1">
                     <label htmlFor="instructor_gender" className="text-sm">
                        Instructor Gender
                     </label>
                     <input
                        type="text"
                        name="instructor_gender"
                        id="instructor_gender"
                        value={userData.gender}
                        placeholder="Enter tuition title"
                        className="w-full px-3 py-2 border rounded-md"
                        disabled
                        required
                     />
                  </div>
               </div>

               {/* Tuition Time */}
               <div>
                  <label htmlFor="tuition_time" className="text-sm">
                     Tuition Time
                  </label>
                  <select
                     name="tuition_time"
                     id="tuition_time"
                     className="w-full px-3 py-2 border rounded-md"
                     required
                  >
                     <option value="">Select Time</option>
                     {TIME_CHOICES.map((choice) => (
                        <option key={choice.value} value={choice.value}>
                           {choice.label}
                        </option>
                     ))}
                  </select>
               </div>

               {/* subjects */}
               <div>
                  <label className="block text-sm font-medium text-gray-700">
                     Subject
                  </label>
                  <select
                     name="subject"
                     multiple
                     className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  >
                     {/* Dynamically generate options based on the subjects */}
                     {subjects.map((subject) => (
                        <option key={subject.id} value={subject.id}>
                           {subject?.name}
                        </option>
                     ))}
                  </select>
               </div>

               {/* Number of Students */}
               <div>
                  <label htmlFor="number_of_students" className="text-sm">
                     Students Apply Limits
                  </label>
                  <input
                     type="number"
                     name="number_of_students"
                     id="number_of_students"
                     className="w-full px-3 py-2 border rounded-md"
                     required
                  />
               </div>

               {/* Salary */}
               <div>
                  <label htmlFor="salary" className="text-sm">
                     Salary
                  </label>
                  <input
                     type="number"
                     name="salary"
                     id="salary"
                     className="w-full px-3 py-2 border rounded-md"
                     required
                  />
               </div>

               {/* Location */}
               <div>
                  <label htmlFor="location" className="text-sm">
                     Location
                  </label>
                  <input
                     type="text"
                     name="location"
                     id="location"
                     className="w-full px-3 py-2 border rounded-md"
                  />
               </div>

               {/* Availability */}
               <div>
                  <label htmlFor="availability" className="text-sm mr-2">
                     Availability
                  </label>
                  <input
                     type="checkbox"
                     name="availability"
                     id="availability"
                  />
               </div>
            </div>

            {/* Submit Button */}
            <div className="space-y-2">
               <div>
                  <button
                     type="submit"
                     className="w-full px-8 py-3 font-semibold rounded-md bg-[#6366f1] text-white hover:bg-[#575bf2]"
                  >
                     Add Tuition
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default AddTuition;
