import React from "react";

interface PaginationProps {
  options: number[];
  selectedOption: number;
  totalItems: number;
  currentPage: number;
  onChange: (option: number) => void;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  options,
  selectedOption,
  totalItems,
  currentPage,
  onChange,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / selectedOption);
  const pagesPerSet = 3; // Number of pages to display at a time
  const currentSet = Math.ceil(currentPage / pagesPerSet); // Current set of pages (e.g., 1-3, 4-6, etc.)
  const totalSets = Math.ceil(totalPages / pagesPerSet); // Total number of sets

  // Calculate the start and end pages of the current set
  const startPage = (currentSet - 1) * pagesPerSet + 1;
  const endPage = Math.min(currentSet * pagesPerSet, totalPages);

  const handleNext = () => {
    // If at the last page of the set, move to the next set
    if (currentPage === endPage && currentPage < totalPages) {
      onPageChange(currentPage + 1); // Moves to the first page of the next set
    } else if (currentPage < totalPages) {
      onPageChange(currentPage + 1); // Normal page increment
    }
  };

  const handlePrevious = () => {
    // If at the first page of the set, move to the previous set
    if (currentPage === startPage && currentPage > 1) {
      onPageChange(currentPage - 1); // Moves to the last page of the previous set
    } else if (currentPage > 1) {
      onPageChange(currentPage - 1); // Normal page decrement
    }
  };

  const handleNextSet = () => {
    if (currentSet < totalSets) {
      onPageChange(startPage + pagesPerSet); // Go to the first page of the next set
    }
  };

  const handlePreviousSet = () => {
    if (currentSet > 1) {
      onPageChange(startPage - pagesPerSet); // Go to the first page of the previous set
    }
  };

  return (
    <div className="flex items-center justify-between mt-4">
      {/* Rows per page dropdown */}
      <span className="text-gray-400">
        Show{" "}
        <select
          value={selectedOption}
          onChange={(e) => onChange(Number(e.target.value))}
          className="border border-gray-300 text-gray-500 rounded p-1 mx-1"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>{" "}
        per page
      </span>

      {/* Pagination Controls */}
      <div className="flex items-center">
        <span className="text-gray-400 mr-4">
          {(currentPage - 1) * selectedOption + 1} -{" "}
          {Math.min(currentPage * selectedOption, totalItems)} of {totalItems}
        </span>
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-3 py-1 border border-gray-300 rounded mr-2 disabled:opacity-50"
        >
          &laquo;
        </button>
        {/* Previous Set Button */}
        {currentSet > 1 && (
          <button
            onClick={handlePreviousSet}
            className="px-3 py-1 border border-gray-300 rounded mx-1"
          >
            ...
          </button>
        )}

        {/* Page Numbers */}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded mx-1 ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "border-gray-300 text-gray-500"
            }`}
          >
            {page}
          </button>
        ))}
        {/* Next Set Button */}
        {currentSet < totalSets && (
          <button
            onClick={handleNextSet}
            className="px-3 py-1 border border-gray-300 rounded mx-1"
          >
            ...
          </button>
        )}
        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border border-gray-300 rounded mr-2 disabled:opacity-50"
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
