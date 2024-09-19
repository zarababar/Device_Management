"use client";
import { useState } from "react";
import DeviceTable from "../components/DeviceTable";
import Pagination from "../components/Pagination";
const DeviceManagement = () => {
  const devices = [
    {
      id: 1,
      device: "MacBook Pro",
      ipAddress: "117.61.104.86",
      location: "New York, USA",
      added: "17 hours ago",
      lastSession: "Sep 14, 2024 12:45 PM",
    },
    {
      id: 2,
      device: "iPhone 13",
      ipAddress: "132.61.35.86",
      location: "Los Angeles, USA",
      lastSession: "Sep 13, 2024 3:10 PM",
      added: "2 hours ago",
    },
    {
      id: 3,
      device: "Samsung Galaxy",
      ipAddress: "208.61.104.86",
      location: "San Francisco, USA",
      lastSession: "Sep 10, 2024 8:30 AM",
      added: "21 hours ago",
    },
    {
      id: 3,
      device: "Samsung Galaxy",
      ipAddress: "208.61.104.86",
      location: "San Francisco, USA",
      lastSession: "Sep 10, 2024 8:30 AM",
      added: "21 hours ago",
    },
    {
      id: 3,
      device: "Samsung Galaxy",
      ipAddress: "208.61.104.86",
      location: "San Francisco, USA",
      lastSession: "Sep 10, 2024 8:30 AM",
      added: "21 hours ago",
    },
    {
      id: 3,
      device: "Samsung Galaxy",
      ipAddress: "208.61.104.86",
      location: "San Francisco, USA",
      lastSession: "Sep 10, 2024 8:30 AM",
      added: "21 hours ago",
    },
    {
      id: 3,
      device: "Samsung Galaxy",
      ipAddress: "208.61.104.86",
      location: "San Francisco, USA",
      lastSession: "Sep 10, 2024 8:30 AM",
      added: "21 hours ago",
    },
    {
      id: 3,
      device: "Samsung Galaxy",
      ipAddress: "208.61.104.86",
      location: "San Francisco, USA",
      lastSession: "Sep 10, 2024 8:30 AM",
      added: "21 hours ago",
    },
    {
      id: 3,
      device: "Samsung Galaxy",
      ipAddress: "208.61.104.86",
      location: "San Francisco, USA",
      lastSession: "Sep 10, 2024 8:30 AM",
      added: "21 hours ago",
    },
    {
      id: 3,
      device: "Samsung Galaxy",
      ipAddress: "208.61.104.86",
      location: "San Francisco, USA",
      lastSession: "Sep 10, 2024 8:30 AM",
      added: "21 hours ago",
    },
    {
      id: 3,
      device: "Samsung Galaxy",
      ipAddress: "208.61.104.86",
      location: "San Francisco, USA",
      lastSession: "Sep 10, 2024 8:30 AM",
      added: "21 hours ago",
    },
    {
      id: 3,
      device: "Samsung Galaxy",
      ipAddress: "208.61.104.86",
      location: "San Francisco, USA",
      lastSession: "Sep 10, 2024 8:30 AM",
      added: "21 hours ago",
    },
  ];

  const [rowsPerPage, setRowsPerPage] = useState<number>(5); // Default rows per page
  const options = [5, 10, 15]; // Options for rows per page

  // Example of slicing the devices array based on rows per page
  const paginatedDevices = devices.slice(0, rowsPerPage);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Device Management</h1>
      <DeviceTable devices={paginatedDevices} />
      <Pagination
        options={options}
        selectedOption={rowsPerPage}
        onChange={(option) => setRowsPerPage(option)}
      />
    </div>
  );
};

export default DeviceManagement;
