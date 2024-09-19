import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { SortableField } from "../types";

interface TableHeaderProps {
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSort: (field: SortableField) => void;
  sortOrder: "asc" | "desc";
}

const TableHeader: React.FC<TableHeaderProps> = ({
  onSelectAll,
  onSort,
  sortOrder,
}) => {
  return (
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left font-thin font-roboto">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5"
            onChange={onSelectAll}
          />
        </th>
        <th
          className="py-3 px-6 text-left cursor-pointer"
          onClick={() => onSort("device")}
        >
          Device
          {
            <FontAwesomeIcon
              icon={sortOrder === "asc" ? faArrowUp : faArrowDown}
              className="ml-2"
            />
          }
        </th>
        <th className="py-3 px-6 text-left" onClick={() => onSort("ipAddress")}>
          IP Address{" "}
          {
            <FontAwesomeIcon
              icon={sortOrder === "asc" ? faArrowUp : faArrowDown}
              className="ml-2"
            />
          }
        </th>
        <th className="py-3 px-6 text-left" onClick={() => onSort("location")}>
          Location{" "}
          {
            <FontAwesomeIcon
              icon={sortOrder === "asc" ? faArrowUp : faArrowDown}
              className="ml-2"
            />
          }
        </th>
        <th
          className="py-3 px-6 text-left cursor-pointer"
          onClick={() => onSort("added")}
        >
          <span className="relative inline-block">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-gray-600 cursor-pointer"
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-800 text-white text-sm rounded-md p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Time is based on your local timezone.
            </span>
          </span>{" "}
          Added
          {
            <FontAwesomeIcon
              icon={sortOrder === "asc" ? faArrowUp : faArrowDown}
              className="ml-2"
            />
          }
        </th>
        <th
          className="py-3 px-6 text-center"
          onClick={() => onSort("lastSession")}
        >
          Last Session
          {
            <FontAwesomeIcon
              icon={sortOrder === "asc" ? faArrowUp : faArrowDown}
              className="ml-2"
            />
          }
        </th>
        <th className="py-3 px-6 text-center"></th>
        <th className="py-3 px-6 text-center"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
