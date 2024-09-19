// // app/components/DeviceTable.tsx

// import React, { useState } from "react";
// import TableHeader from "./TableHeader";
// import TableRow from "./TableRow";
// import { Device } from "./types";

// interface DeviceTableProps {
//   devices: Device[];
// }

// const DeviceTable: React.FC<DeviceTableProps> = ({ devices }) => {
//   const [checkedDevices, setCheckedDevices] = useState<number[]>([]);

//   const handleCheck = (id: number) => {
//     setCheckedDevices((prev) =>
//       prev.includes(id)
//         ? prev.filter((deviceId) => deviceId !== id)
//         : [...prev, id]
//     );
//   };

//   const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.checked) {
//       setCheckedDevices(devices.map((device) => device.id));
//     } else {
//       setCheckedDevices([]);
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white shadow-lg rounded-lg">
//         <TableHeader onSelectAll={handleSelectAll} />
//         <tbody className="text-gray-600 text-sm font-light">
//           {devices.map((device) => (
//             <TableRow
//               key={device.id}
//               device={device}
//               isChecked={checkedDevices.includes(device.id)}
//               onCheck={handleCheck}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DeviceTable;
// app/components/DeviceTable.tsx

import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Device } from "./types";
import { SortableField } from "./types";
interface DeviceTableProps {
  devices: Device[];
  onSort: (field: SortableField) => void; // Add onSort prop
  sortOrder: "asc" | "desc"; // Add sortOrder prop
}

const DeviceTable: React.FC<DeviceTableProps> = ({
  devices,
  onSort,
  sortOrder,
}) => {
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
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <TableHeader
          onSelectAll={handleSelectAll}
          onSort={onSort} // Pass onSort to TableHeader
          sortOrder={sortOrder} // Pass sortOrder to TableHeader
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
