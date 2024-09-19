import React from "react";

interface PaginationProps {
  options: number[];
  selectedOption: number;
  onChange: (option: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
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
    </div>
  );
};

export default Pagination;
