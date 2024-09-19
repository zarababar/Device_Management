import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Device } from "../types";
import { SortableField } from "../types";
import "./Table.css";
interface DeviceTableProps {
  devices: Device[];
  onSort: (field: SortableField, order: "asc" | "desc") => void; // Add onSort prop
}

const DeviceTable: React.FC<DeviceTableProps> = ({ devices, onSort }) => {
  const [checkedDevices, setCheckedDevices] = useState<number[]>([]);

  const handleCheck = (id: number) => {
    setCheckedDevices((prev) =>
      prev.includes(id)
        ? prev.filter((deviceId) => deviceId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedDevices(devices.map((device) => device.id));
    } else {
      setCheckedDevices([]);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg rounded-lg table-fixed w-full">
        <TableHeader
          onSelectAll={handleSelectAll}
          onSort={onSort} // Pass onSort to TableHeader
        />
        <tbody className="text-gray-600 text-sm font-light">
          {devices.map((device) => (
            <TableRow
              key={device.id}
              device={device}
              isChecked={checkedDevices.includes(device.id)}
              onCheck={handleCheck}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceTable;
