import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

interface TableHeaderProps {
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ onSelectAll }) => {
  return (
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5"
            onChange={onSelectAll}
          />
        </th>
        <th className="py-3 px-6 text-left">Device</th>
        <th className="py-3 px-6 text-left">IP Address</th>
        <th className="py-3 px-6 text-left">Location</th>
        <th className="py-3 px-6 text-left">
          Added{" "}
          <span className="relative inline-block">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-gray-600 cursor-pointer"
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-800 text-white text-sm rounded-md p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Time is based on your local timezone.
            </span>
          </span>
        </th>
        <th className="py-3 px-6 text-center">Last Session</th>
        <th className="py-3 px-6 text-center"></th>
        <th className="py-3 px-6 text-center"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
