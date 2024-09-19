// app/components/TableRow.tsx

import React from "react";
import { Device } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface TableRowProps {
  device: Device;
  isChecked: boolean;
  onCheck: (id: number) => void;
}

const TableRow: React.FC<TableRowProps> = ({ device, isChecked, onCheck }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheck(device.id)}
          className="form-checkbox h-5 w-5"
        />
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <span className="font-medium">{device.device}</span>
      </td>
      <td className="py-3 px-6 text-left">
        <span>{device.ipAddress}</span>
      </td>
      <td className="py-3 px-6 text-left">
        <span>{device.location}</span>
      </td>
      <td className="py-3 px-6 text-left">
        <span>{device.added}</span>
      </td>
      <td className="py-3 px-6 text-center">
        <span>{device.lastSession}</span>
      </td>
      <td className="py-3 px-6 text-center">
        <button className="text-blue-500 hover:text-blue-700 mr-2">
          <FontAwesomeIcon icon={faEdit} /> {/* Edit Icon */}
        </button>
      </td>
      <td className="py-3 px-6 text-center">
        <button className="text-red-500 hover:text-red-700">
          <FontAwesomeIcon icon={faTrash} /> {/* Delete Icon */}
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
