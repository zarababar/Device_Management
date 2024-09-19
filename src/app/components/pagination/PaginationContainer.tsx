// // app/components/PaginationContainer.tsx
// import React, { useState } from "react";
// interface PaginationContainerProps {
//   totalItems: number;
//   itemsPerPageOptions: number[];
//   onPageChange: (page: number) => void;
// }

// const PaginationContainer: React.FC<PaginationContainerProps> = ({
//   totalItems,
//   itemsPerPageOptions,
//   onPageChange,
// }) => {
//   const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
//   const [currentPage, setCurrentPage] = useState(0);

//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     onPageChange(page);
//   };

//   const handleItemsPerPageChange = (option: number) => {
//     setItemsPerPage(option);
//     setCurrentPage(0); // Reset to the first page when items per page changes
//     onPageChange(0); // Notify parent component of the change
//   };

//   return (
//     <div className="flex items-center justify-between mt-4">
//       <span className="text-gray-400">
//         Show{" "}
//         <select
//           value={itemsPerPage}
//           onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
//           className="border border-gray-300 text-gray-500 rounded p-1 mx-1"
//         >
//           {itemsPerPageOptions.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>{" "}
//         per page
//       </span>
//       <div>
//         {/* Previous and Next buttons can be added here */}
//         <button
//           disabled={currentPage === 0}
//           onClick={() => handlePageChange(currentPage - 1)}
//           className="mr-2"
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage + 1} of {totalPages}
//         </span>
//         <button
//           disabled={currentPage >= totalPages - 1}
//           onClick={() => handlePageChange(currentPage + 1)}
//           className="ml-2"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaginationContainer;
// app/components/PaginationContainer.tsx
