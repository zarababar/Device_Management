"use client";
import { useEffect, useState } from "react";
import DeviceTable from "../components/DeviceTable";
import Pagination from "../components/Pagination";
import { parseAddedTime, compareIPAddresses } from "../utils/sorting-helpers";
import { Device, SortableField } from "../components/types";
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
    id: 4,
    device: "Dell XPS 13",
    ipAddress: "199.61.104.90",
    location: "Austin, USA",
    lastSession: "Sep 12, 2024 1:15 PM",
    added: "5 hours ago",
  },
  {
    id: 5,
    device: "Google Pixel 6",
    ipAddress: "152.61.104.22",
    location: "Seattle, USA",
    lastSession: "Sep 12, 2024 9:00 AM",
    added: "3 hours ago",
  },
  {
    id: 6,
    device: "Microsoft Surface Pro",
    ipAddress: "140.61.104.75",
    location: "Miami, USA",
    lastSession: "Sep 11, 2024 2:30 PM",
    added: "10 hours ago",
  },
  {
    id: 7,
    device: "OnePlus 9",
    ipAddress: "167.61.104.88",
    location: "Chicago, USA",
    lastSession: "Sep 13, 2024 4:50 PM",
    added: "1 hour ago",
  },
  {
    id: 8,
    device: "HP Spectre x360",
    ipAddress: "123.61.104.55",
    location: "Boston, USA",
    lastSession: "Sep 14, 2024 11:20 AM",
    added: "15 hours ago",
  },
  {
    id: 9,
    device: "Sony Xperia 5 II",
    ipAddress: "180.61.104.33",
    location: "Philadelphia, USA",
    lastSession: "Sep 10, 2024 5:45 PM",
    added: "24 hours ago",
  },
  {
    id: 10,
    device: "Lenovo ThinkPad X1",
    ipAddress: "187.61.104.67",
    location: "Atlanta, USA",
    lastSession: "Sep 11, 2024 8:00 AM",
    added: "8 hours ago",
  },
  {
    id: 11,
    device: "Asus ROG Zephyrus",
    ipAddress: "155.61.104.44",
    location: "San Diego, USA",
    lastSession: "Sep 12, 2024 10:30 AM",
    added: "6 hours ago",
  },
  {
    id: 12,
    device: "Nokia 3310",
    ipAddress: "175.61.104.10",
    location: "Dallas, USA",
    lastSession: "Sep 10, 2024 9:30 PM",
    added: "18 hours ago",
  },
  {
    id: 13,
    device: "Apple Watch Series 6",
    ipAddress: "192.61.104.12",
    location: "Houston, USA",
    lastSession: "Sep 13, 2024 6:00 AM",
    added: "4 hours ago",
  },
  {
    id: 14,
    device: "Fitbit Charge 4",
    ipAddress: "134.61.104.34",
    location: "Orlando, USA",
    lastSession: "Sep 13, 2024 8:20 PM",
    added: "2 hours ago",
  },
  {
    id: 15,
    device: "Samsung Galaxy Tab S7",
    ipAddress: "121.61.104.27",
    location: "Phoenix, USA",
    lastSession: "Sep 14, 2024 10:15 AM",
    added: "16 hours ago",
  },
  {
    id: 16,
    device: "Oculus Quest 2",
    ipAddress: "158.61.104.92",
    location: "Las Vegas, USA",
    lastSession: "Sep 12, 2024 7:45 PM",
    added: "7 hours ago",
  },
];

const DeviceManagement = () => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(5); // Default rows per page
  const [sortField, setSortField] = useState<SortableField>("device"); // Field to sort by
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // Ascending or descending order
  const [sortedDevices, setSortedDevices] = useState<Device[]>([]);
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
      } else {
        const comparison = fieldA.toString().localeCompare(fieldB.toString());
        return sortOrder === "asc" ? comparison : -comparison;
      }
      //   // Use localeCompare for string comparison
      //   const comparison = fieldA.localeCompare(fieldB);

      //   return sortOrder === "asc" ? comparison : -comparison;
    });

    console.log("sorted data: ----", newSortedDevices);
    setSortedDevices(newSortedDevices);
  }, [sortField, sortOrder]);

  // Paginate after sorting
  const paginatedDevices = sortedDevices.slice(0, rowsPerPage);

  // Handler to toggle sort order and set the field
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
      <h1 className="text-2xl font-semibold mb-6">Device Management</h1>
      <DeviceTable
        devices={paginatedDevices}
        onSort={handleSort}
        sortOrder={sortOrder}
      />
      <Pagination
        options={options}
        selectedOption={rowsPerPage}
        onChange={(option) => setRowsPerPage(option)}
      />
    </div>
  );
};

export default DeviceManagement;
