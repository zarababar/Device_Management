import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { SortableField } from "../types";
import SortableHeader from "./SortableHeader";

interface TableHeaderProps {
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSort: (field: SortableField, order: "asc" | "desc") => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ onSelectAll, onSort }) => {
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
        {/* Sortable Header for Device */}
        <SortableHeader title="Device" sortField="device" onSort={onSort} />
        {/* Sortable Header for IP Address */}
        <SortableHeader
          title="IP Address"
          sortField="ipAddress"
          onSort={onSort}
        />
        {/* Sortable Header for Location */}
        <SortableHeader title="Location" sortField="location" onSort={onSort} />
        {/* Added Header with Tooltip */}

        <th className="py-3 px-6 text-left">
          <div className="flex items-center justify-between">
            <span className="relative inline-block">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-gray-600 cursor-pointer"
              />
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-800 text-white text-sm rounded-md p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                Time is based on your local timezone.
              </span>
              {"   "}
              Added
            </span>
            <SortableHeader title="" sortField="added" onSort={onSort} />
          </div>
        </th>
        {/* Sortable Header for Last Session */}
        <SortableHeader
          title="Last Session"
          sortField="lastSession"
          onSort={onSort}
        />
        <th className="py-3 px-6 text-center"></th>
        <th className="py-3 px-6 text-center"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
