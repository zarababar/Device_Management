"use client";
import { useEffect, useState } from "react";
import { devices } from "../data/devices";
import DeviceTable from "../components/table/DeviceTable";
import Pagination from "../components/pagination/Pagination";
import { parseAddedTime, compareIPAddresses } from "../utils/sorting-helpers";
import { Device, SortableField } from "../components/types";

const DeviceManagement = () => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(5); // Default rows per page
  const [sortField, setSortField] = useState<SortableField>("device"); // Field to sort by
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // Ascending or descending order
  const [sortedDevices, setSortedDevices] = useState<Device[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
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
        const dateA = new Date(fieldA); // Parse the date string
        const dateB = new Date(fieldB); // Parse the date string
        return sortOrder === "asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      } else {
        const comparison = fieldA.toString().localeCompare(fieldB.toString());
        return sortOrder === "asc" ? comparison : -comparison;
      }
    });

    console.log("sorted data: ----", newSortedDevices);
    setSortedDevices(newSortedDevices);
  }, [sortField, sortOrder]);

  const handleSort = (field: SortableField) => {
    if (sortField === field) {
      // If the field is already being sorted, toggle the sort order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Otherwise, set the new field and default to ascending order
      setSortField(field);
      setSortOrder("asc");
    }
  };
  console.log("sortField", sortField);
  console.log("sortOrder", sortOrder);
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Devices</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Device
        </button>
      </div>
      <DeviceTable
        devices={paginatedDevices}
        onSort={handleSort}
        sortOrder={sortOrder}
      />
      <Pagination
        options={options}
        selectedOption={rowsPerPage}
        totalItems={devices.length} // Pass the total number of devices
        currentPage={currentPage} // Pass the current page
        onChange={(option) => {
          setRowsPerPage(option);
          setCurrentPage(1); // Reset to first page when rows per page changes
        }}
        onPageChange={setCurrentPage} // Handler for page change
      />
    </div>
  );
};

export default DeviceManagement;
