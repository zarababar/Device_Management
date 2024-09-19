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

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-4">
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
      <div>
        <span className="text-gray-400">
          {(currentPage - 1) * selectedOption + 1} -{" "}
          {Math.min(currentPage * selectedOption, totalItems)} of {totalItems}{" "}
        </span>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-3 py-1 border border-gray-300 rounded mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
