import React from 'react';

const ApplicationTable = () => {
   return (
      <div className="mx-auto dark:text-gray-800">
         <h2 className="mb-4 text-2xl font-semibold leading-tight">
            All Applied Tuitions
         </h2>
         <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
               {/* <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
               </colgroup> */}
               <thead className="bg-gray-300">
                  <tr className="text-left">
                     <th className="p-3">No.</th>
                     <th className="p-3">Title</th>
                     <th className="p-3">Apply At</th>
                     <th className="p-3">Level</th>
                     <th className="p-3">Status</th>
                  </tr>
               </thead>
               <tbody>
                  <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                     <td className="p-3">
                        <p>97412378923</p>
                     </td>
                     <td className="p-3">
                        <p>Nvidia Corporation</p>
                     </td>
                     <td className="p-3">
                        <p>14 Jan 2022</p>
                        <p className="dark:text-gray-600">Friday</p>
                     </td>
                     <td className="p-3">
                        <p>01 Feb 2022</p>
                        <p className="dark:text-gray-600">Tuesday</p>
                     </td>
                     <td className="p-3 text-right flex gap-2">
                        <span className="px-3 py-1 font-semibold rounded-md bg-[#FFC338] text-[#FFC338] bg-opacity-15">
                           <span>Pending</span>
                        </span>
                        <span className="px-3 py-1 font-semibold rounded-md bg-[#3890d8] text-[#3890d8] bg-opacity-15">
                           <span>Approved</span>
                        </span>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ApplicationTable;