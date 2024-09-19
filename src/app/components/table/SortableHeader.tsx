import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { SortableField } from "../types";

interface SortableHeaderProps {
  title: string;
  sortField: SortableField;
  onSort: (field: SortableField, order: "asc" | "desc") => void;
}

const SortableHeader: React.FC<SortableHeaderProps> = ({
  title,
  sortField,
  onSort,
}) => {
  return (
    <th className="py-3 px-6 text-left">
      <div className="flex items-center justify-between">
        <span>{title}</span>
        <span className="flex flex-col ml-2 items-center">
          <FontAwesomeIcon
            icon={faSortUp}
            className="text-gray-500 cursor-pointer"
            onClick={() => onSort(sortField, "asc")}
          />
          <FontAwesomeIcon
            icon={faSortDown}
            className="text-gray-500 cursor-pointer"
            onClick={() => onSort(sortField, "desc")}
          />
        </span>
      </div>
    </th>
  );
};

export default SortableHeader;
