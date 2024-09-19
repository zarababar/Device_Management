"use client";
import { useEffect, useState } from "react";
import { devices } from "../data/devices";
import DeviceTable from "../components/table/DeviceTable";
import Pagination from "../components/pagination/Pagination";
import { parseAddedTime, compareIPAddresses } from "../utils/sorting-helpers";
import { Device, SortableField } from "../components/types";

const DeviceManagement = () => {
  const [state, setState] = useState({
    rowsPerPage: 5,
    sortField: "device" as SortableField,
    sortOrder: "asc" as "asc" | "desc",
    currentPage: 1,
  });
  const [sortedDevices, setSortedDevices] = useState<Device[]>([]);

  const { rowsPerPage, sortField, sortOrder, currentPage } = state;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedDevices = sortedDevices.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const options = [5, 10, 15]; // Options for rows per page

  // Sorting logic within useEffect
  useEffect(() => {
    const newSortedDevices = [...devices].sort((a, b) => {
      const fieldA = a[sortField].toString();
      const fieldB = b[sortField].toString();
      if (sortField === "added") {
        const timeA = parseAddedTime(fieldA);
        const timeB = parseAddedTime(fieldB);
        return sortOrder === "asc" ? timeA - timeB : timeB - timeA;
      }
      if (sortField === "ipAddress") {
        return compareIPAddresses(fieldA, fieldB, sortOrder);
      }
      if (sortField === "lastSession") {
        const dateA = new Date(fieldA);
        const dateB = new Date(fieldB);
        return sortOrder === "asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      } else {
        const comparison = fieldA.toString().localeCompare(fieldB.toString());
        return sortOrder === "asc" ? comparison : -comparison;
      }
    });

    setSortedDevices(newSortedDevices);
  }, [sortField, sortOrder]);

  const handleSort = (field: SortableField, order: "asc" | "desc") => {
    setState((prev) => ({
      ...prev,
      sortField: field,
      sortOrder: order,
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Devices</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Device
        </button>
      </div>
      <DeviceTable devices={paginatedDevices} onSort={handleSort} />
      <Pagination
        options={options}
        selectedOption={rowsPerPage}
        totalItems={devices.length} // Pass the total number of devices
        currentPage={currentPage} // Pass the current page
        onChange={(option) => {
          setState((prev) => ({
            ...prev,
            rowsPerPage: option,
            currentPage: 1, // Reset to first page when rows per page changes
          }));
        }}
        onPageChange={(page) =>
          setState((prev) => ({ ...prev, currentPage: page }))
        } // Handler for page change
      />
    </div>
  );
};

export default DeviceManagement;
