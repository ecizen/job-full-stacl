import { CardHireData } from "@/app/(routes)/components/atoms/constant-data";
import CardHire from "@/app/(routes)/components/molecules/CardHire";
import images from "@/app/assets/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Grid, Heart, List, MapPinIcon, Table } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

interface Layout {
  layout: any,
  setLayout: any
}

export const CardHireJob:React.FC<Layout> = ({layout, setLayout}) => {

  const [jobPosts, setJobPosts] = React.useState([]);
  
      React.useEffect(() => {
          const fetchJobs = async () => {
              try {
                  const response = await fetch("/api/jobs");
                  if (!response.ok) throw new Error("Failed to fetch jobs");
  
                  const data = await response.json();
                  setJobPosts(data);
              } catch (error) {
                  console.error("Error fetching job posts:", error);
              }
          };
  
          fetchJobs();
      }, []);

  const router = useRouter();

  const handleJobClick = (id: number) => {
     router.push(`/home/${id}`);
  }

  const layouts = [
    { type: "grid", icon: <Grid size={16} /> },
    { type: "table", icon: <Table size={16} /> },
    { type: "list", icon: <List size={16} /> },
  ];
  
  const getJobTypeClass = (jobType: string | string[]): string => {
    if (Array.isArray(jobType)) {
      return jobType.map((type) => getJobTypeClass(type)).join(" "); // Handle multiple job types
    }
    switch (jobType) {
      case "Full-time":
        return "bg-[#D1C0F3] text-[8px] px-2 py-1 text-[#7034E7] rounded-sm font-semibold ";
      case "Part-time":
        return "bg-[#C0FEEC] text-[#0FB586] px-2 py-1 text-[8px] rounded-sm font-semibold";
      case "Remote":
        return "bg-[#FFB2B9] text-red-600 px-1 py-1 text-[8px] rounded-sm font-semibold";
      default:
        return "bg-[#A9CBFF] text-blue-600 px-1 py-1 text-[8px] font-semibold rounded-sm";
    }
  };

 
  
  return (
    <div>
      <div className={`w-full grid ${layout === "grid" ? "lg:grid-cols-3 md:grid-cols-2 grid-cols-1" : layout === "table" ? "grid-cols-2" : "grid-cols-1"} lg:gap-6 gap-2 mt-6`}>
        {jobPosts.map((item: any) => (
          <div
            onClick={() => handleJobClick(item.id)}
            key={item.id}
            className="cursor-pointer w-full bg-white rounded-md h-auto border-b p-4"
          >
            <div className="flex items-center space-x-2">
            <Avatar className="rounded-md">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
              <div className="flex flex-col gap-1">
                <h1 className="text-xs font-semibold">{item.jobTitle}</h1>
                <div className="flex gap-1 items-center">
                  <MapPinIcon size={12} className="text-gray-400" />
                  <span className="text-[10px] text-gray-700">{item.city},</span>
                  <span className="text-[10px] text-gray-700"> {item.country}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              {Array.isArray(item.jobType)
                ? item.jobType.map((type : string, index: string) => (
                    <span key={index} className={getJobTypeClass(type)}>
                      {type}
                    </span>
                  ))
                : (
                  <span className={getJobTypeClass(item.jobType)}>
                    {item.jobType}
                  </span>
                )}
            </div>
            <div className="mt-2">
              <p className="text-xs font-medium line-clamp-2 leading-relaxed"><span dangerouslySetInnerHTML={{ __html: item.description }} /></p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm font-semibold">
                ${item.salaryAmount}
              </p>
              <div className="flex items-center space-x-1">
                <Heart size={16} className="text-gray-800" />
                <p className="text-[10px] text-gray-400">an hour ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
