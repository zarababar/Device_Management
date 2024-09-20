import React from "react";
import SortableHeader from "./SortableHeader";
import { SortableField } from "../types";

interface TableHeaderProps {
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSort: (field: SortableField, order: "asc" | "desc") => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ onSelectAll, onSort }) => {
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
        <SortableHeader title="Device" sortField="device" onSort={onSort} />
        <SortableHeader
          title="IP Address"
          sortField="ipAddress"
          onSort={onSort}
        />
        <SortableHeader title="Location" sortField="location" onSort={onSort} />
        <SortableHeader title="Added" sortField="added" onSort={onSort} />
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
