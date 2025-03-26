"use client";

import React from "react";
import { LucideArrowDown, LucideArrowUp, MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Definisi tipe data untuk user
interface User {
  id: string;
  cvUrl?: string;
  user: {
    name: string;
    email: string;
    profile?: { phoneNumber?: string; fullName?: string };
  };
  createdAt: string;
}

interface UserTableViewApplyProps {
  userData: User[];
  loading: boolean;
  error?: string | null;
}

const UserTableViewApply: React.FC<UserTableViewApplyProps> = ({ userData, loading, error }) => {
  return (
    <div className="p-4  rounded-lg">
      <Table>
        <TableCaption>List of applicants for this job post.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs text-neutral-600 font-semibold">Apply ID</TableHead>
            <TableHead className="text-xs text-neutral-600 font-semibold flex items-center">
              Name
              <div className="flex ml-2">
                <LucideArrowUp size={12} className="text-gray-400" />
                <LucideArrowDown size={12} className="text-gray-400" />
              </div>
            </TableHead>
            <TableHead className="text-xs text-neutral-600 font-semibold">Gmail</TableHead>
            <TableHead className="text-xs text-neutral-600 font-semibold">No Telp</TableHead>
            <TableHead className="text-xs text-neutral-600 font-semibold">Status</TableHead>
            <TableHead className="text-xs text-neutral-600 font-semibold">Date</TableHead>
          </TableRow>
        </TableHeader>

        {/* Handle loading, error, dan data */}
        {loading ? (
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500">
                Loading applications...
              </TableCell>
            </TableRow>
          </TableBody>
        ) : error ? (
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} className="text-center text-red-500">
                {error}
              </TableCell>
            </TableRow>
          </TableBody>
        ) : userData.length > 0 ? (
          <TableBody>
            {userData.map((data) => (
              <TableRow key={data.id}>
                <TableCell className="font-medium text-xs">{data.id}</TableCell>
                <TableCell className="font-medium text-xs">{data.user.profile?.fullName || "N/A"}</TableCell>
                <TableCell className="font-medium text-xs">{data.user.email}</TableCell>
                <TableCell className="font-medium text-xs">{data.user.profile?.phoneNumber || "N/A"}</TableCell>
                <TableCell className="font-medium text-xs">Interview</TableCell>
                <TableCell className="font-medium text-xs">{new Date(data.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVertical size={20} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-32">
                      <DropdownMenuItem className="text-xs">View</DropdownMenuItem>
                      <DropdownMenuItem className="text-xs">Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-xs">Delete</DropdownMenuItem>
                      <DropdownMenuItem className="text-xs">Chat</DropdownMenuItem>
                      <DropdownMenuItem className="text-xs">
                        <a
                          href={`${data.cvUrl}?fl_attachment=true`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline text-xs font-medium"
                        >
                          Download CV
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500">
                No applications found.
              </TableCell>
            </TableRow>
          </TableBody>
        )}

        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total Applicants</TableCell>
            <TableCell className="text-right">{userData.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default UserTableViewApply;
