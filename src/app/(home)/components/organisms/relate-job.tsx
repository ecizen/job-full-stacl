import { CardHireData } from "@/app/(routes)/components/atoms/constant-data";
import { ArrowLeft } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RelateJob = () => {

    const router = useRouter()

    const getJobTypeClass = (jobType: string | string[]): string => {
        if (Array.isArray(jobType)) {
          return jobType.map((type) => getJobTypeClass(type)).join(" "); // Handle multiple job types
        }
        switch (jobType) {
          case "Full time":
            return "bg-[#D1C0F3] text-[8px] px-2 py-1 text-[#7034E7] rounded-sm font-semibold ";
          case "Part time":
            return "bg-[#C0FEEC] text-[#0FB586] px-2 py-1 text-[8px] rounded-sm font-semibold";
          case "Remote":
            return "bg-[#FFB2B9] text-red-600 px-1 py-1 text-[8px] rounded-sm font-semibold";
          default:
            return "bg-[#A9CBFF] text-blue-600 px-1 py-1 text-[8px] font-semibold rounded-sm";
        }
      };

      const handleJobClick = (id: number) => {
        router.push(`/home/${id}`);
     }
   
    return (
        <div className="py-8 ">
            <div className="lg:px-4 px-6">
                <Link href={`/jobs`}>
                <button className="flex items-center space-x-2">
                    <ArrowLeft size={16} className="text-gray-400"/>
                    <span className="text-gray-400 text-xs font-medium">Back</span>
                </button>
                </Link>
            </div>
            <div className="mt-6">
                <div className="lg:px-4 px-6">
                    <h1 className="text-md font-semibold">Relate jobs</h1>
                </div>
                <div className="lg:px-4 px-0 mt-4">
                    {CardHireData.map((item)=>(
                        <div onClick={()=>  handleJobClick(item.id)} key={item.id} className="w-full cursor-pointerlg: p-2 px-6 rounded-sm border border-neutral-200 mb-2">
                            <div className="flex items-center space-x-2 ">
                                <Image src={item.image} width={38} alt="company-logo" className="rounded-sm"/>
                                <div className=" pb-2">
                                    <h1 className="text-xs font-semibold">{item.jobPosition}</h1>
                                    <div className="flex gap-2 mt-1">
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
                            </div>
                            <div className="mt-2">
                                <p className="text-xs text-neutral-800 line-clamp-1">{item.description}</p>
                            </div>
                            <div className="pt-4 pb-2 border-t border-gray-100 mt-4 flex items-center justify-between">
                                     <p className="text-xs font-semibold">${item.minSalary}<span>-</span>${item.maxSalary}</p>
                                     <p className="text-[10px] text-gray-400">posted 1 hour ago</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RelateJob;