import { CardHireData } from "@/app/(routes)/components/atoms/constant-data";
import CardHire from "@/app/(routes)/components/molecules/CardHire";
import images from "@/app/assets/image";
import { Heart, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const CardHireJob = () => {

  const router = useRouter();

  const handleJobClick = (id: number) => {
     router.push(`/home/${id}`);
  }

  // Function to map job types to corresponding classes
  const getJobTypeClass = (jobType: string | string[]): string => {
    if (Array.isArray(jobType)) {
      return jobType.map((type) => getJobTypeClass(type)).join(" "); // Handle multiple job types
    }
    switch (jobType) {
      case "Full Time":
        return "bg-[#D1C0F3] text-[10px] px-2 py-1 text-[#7034E7] rounded-sm font-semibold ";
      case "Part Time":
        return "bg-[#C0FEEC] text-[#0FB586] px-2 py-1 text-[10px] rounded-sm font-semibold";
      case "Remote":
        return "bg-[#FFB2B9] text-red-600 px-2 py-1 text-[10px] rounded-sm font-semibold";
      default:
        return "bg-gray-500 text-white px-2 py-1 text-xs rounded-sm";
    }
  };

  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-2 lg:mt-6 lg:max-h-screen overflow-y-auto">
      {CardHireData.map((item) => (
        <div onClick={()=> handleJobClick(item.id)} key={item.id} className="cursor-pointer w-full bg-white rounded-md h-auto border-b ">
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-center space-x-2">
              <Image
                src={item.image}
                alt="logo-company"
                width={34}
                className="rounded-md"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-xs font-semibold">{item.jobPosition}</h1>
                <div className="flex gap-1 items-center">
                  <MapPinIcon size={12} className="text-gray-400" />
                  <span className="text-[10px] text-gray-700">{item.city}</span>
                  <span className="text-[10px] text-gray-700">{item.country}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
                  {Array.isArray(item.jobType)
                    ? item.jobType.map((type, index) => (
                        <span
                          key={index}
                          className={getJobTypeClass(type)}
                        >
                          {type}
                        </span>
                      ))
                    : (
                      <span className={getJobTypeClass(item.jobType)}>
                        {item.jobType}
                      </span>
                    )}
                </div>
          </div>
          <div className=" px-4 pb-4 border-b border-gray-200 ">
            <p className="text-xs font-medium line-clamp-2 leading-relaxed">{item.description}</p>
          </div>
          <div className="px-4 py-4 flex justify-between items-center">
               <p className="text-sm font-semibold">${item.minSalary}<span>-</span>${item.maxSalary}</p>
               <div className="flex items-center space-x-1">
                    <Heart size={16} className="text-gray-800"/>
                    <p className="text-[10px] text-gray-400">an hour ago</p>
                </div>
          </div>
        </div>
      ))}
    </div>
  );
};
