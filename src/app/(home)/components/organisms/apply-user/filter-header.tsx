import { FC, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Upload } from "lucide-react";
import * as XLSX from "xlsx";

// Definisi tipe data untuk user
interface User {
  id: string;
  cvUrl?: string;
  user: {
    name: string;
    email: string;
    profile?: {
      phoneNumber?: string;
      fullName?: string;
    };
  };
  createdAt: string;
}

// Definisi tipe props
interface FilterHeaderProps {
  userData: User[];
}

export const FilterHeader: FC<FilterHeaderProps> = ({ userData }) => {

  const statusFilter = [
    { value: "all", label: "Status All" },
    { value: "new", label: "New" },
    { value: "interview", label: "Interview" },
    { value: "offer", label: "Offer" },
    { value: "hired", label: "Hired" },
    { value: "rejected", label: "Rejected" },
  ];

  const typeFilter = [
    { value: "all", label: "Type All" },
    { value: "full-time", label: "Full Time" },
    { value: "part-time", label: "Part Time" },
    { value: "internship", label: "Internship" },
    { value: "contract", label: "Contract" },
  ]

  const dateFilter = [
    { value: "all", label: "Date All" },
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
    { value: "this-week", label: "This Week" },
    { value: "last-week", label: "Last Week" },
    { value: "this-month", label: "This Month" },
    { value: "last-month", label: "Last Month" },
  ]


  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selecteType, setSelectedType] = useState("all");
  const [selectedDate, setSelectedDate] = useState("all");
  const exportToExcel = () => {
    if (!userData || userData.length === 0) {
      alert("No data to export!");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(
      userData.map((user) => ({
        "Apply ID": user.id,
        Name: user.user.profile?.fullName || "N/A",
        Email: user.user.email,
        "Phone Number": user.user.profile?.phoneNumber || "N/A",
        Status: "Interview", // Bisa diganti dengan status dari database
        "Applied Date": new Date(user.createdAt).toLocaleDateString(),
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applicants");

    XLSX.writeFile(workbook, "applicants.xlsx");
  };

  return (
    <div className="w-full border-b-2 border-gray-200 pb-4">
    <h1 className="text-md font-semibold">Status User Recruitment</h1>
    <div className="mt-4 flex justify-between">
    <div className=" max-w-[230px] flex items-center relative">
      <input className="w-full px-4 h-[35px] flex items-center border border-gray-300 rounded-xl text-xs" placeholder="Search table"></input>
      <Search className="absolute right-4 text-blue-600" size={20} />
    </div>
    <div>
      <button onClick={exportToExcel} className=" px-4 h-[35px] rounded-xl border border-gray-400 text-xs text-blue-500 space-x-2 flex items-center gap-2"><Upload size={20} className="text-blue-600"></Upload>Export</button>
    </div>
    </div>
    <div className="flex gap-2 items-center mt-4">
    <div className=" flex items-center gap-4">
      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
        <SelectTrigger className="w-[100px] h-7 px-2 text-xs rounded-lg border border-gray-300">
          <SelectValue>{statusFilter.find(item => item.value === selectedStatus)?.label}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {statusFilter.map((item, index) => (
              <SelectItem key={index} value={item.value} className="text-xs">
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div className=" flex items-center gap-4">
      <Select value={selecteType} onValueChange={setSelectedType}>
        <SelectTrigger className="w-[100px] h-7 px-2 text-xs rounded-lg border border-gray-300">
          <SelectValue>{typeFilter.find(item => item.value === selecteType)?.label}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {statusFilter.map((item, index) => (
              <SelectItem key={index} value={item.value} className="text-xs">
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div className=" flex items-center gap-4">
      <Select value={selectedDate} onValueChange={setSelectedDate}>
        <SelectTrigger className="w-[100px] h-7 px-2 text-xs rounded-lg border border-gray-300">
          <SelectValue>{dateFilter.find(item => item.value === selectedDate)?.label}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {dateFilter.map((item, index) => (
              <SelectItem key={index} value={item.value} className="text-xs">
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div>
      <button className="bg-blue-600 text-white flex items-center  py-2 rounded-lg  h-7 px-4 text-xs ">Apply</button>
    </div>
  </div>
  </div>
  );
};
