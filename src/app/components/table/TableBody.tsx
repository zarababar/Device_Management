import React from "react";
import TableRow from "./TableRow";
import { Device } from "../types";

interface TableBodyProps {
  devices: Device[];
  checkedDevices: number[];
  onCheck: (id: number) => void;
}

const TableBody: React.FC<TableBodyProps> = ({
  devices,
  checkedDevices,
  onCheck,
}) => {
  return (
    <tbody className="text-gray-600 text-sm font-light">
      {devices.map((device) => (
        <TableRow
          key={device.id}
          device={device}
          isChecked={checkedDevices.includes(device.id)}
          onCheck={onCheck}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
