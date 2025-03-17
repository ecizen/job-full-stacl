'use client'
import { CardHireData } from "@/app/(routes)/components/atoms/constant-data"
import { ArrowLeft, ArrowRight, Bookmark, Filter, Search } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export const GridLikeJob = () => {

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
    return(
       <article className="min-h-screen">
          <div className="gap-4 items-center">
            <h1 className="lg:text-xl text-sm font-semibold text-blue-600 w-[200px]">59 Found Like Job</h1>
            <input className="w-full px-4 h-10 mt-4 border bg-white col-span-2 rounded-md text-xs" placeholder="Search job title... "/>
          </div>
          <article className="gap-4 grid lg:grid-cols-4 lg:mt-6 mt-2">
                {CardHireData.map((item)=> (
                <div onClick={()=> handleJobClick(item.id)} key={item.id} className="bg-white rounded-md border border-gray-100 p-4 cursor-pointer">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Image src={item.image} width={35} height={35} alt="logo" className="rounded-md border-2 border-gray-200"/>
                            <div className="">
                                <h1 className="text-xs font-semibold">{item.jobPosition}</h1>
                                <div className="flex items-center space-x-2">
                                    <span className="text-[10px] font-medium">{item.company}. {item.city}, {item.country}</span>
                                </div>
                            </div>
                        </div>
                        <button>
                            <Bookmark size={18} className="text-gray-500 transition-all duration-500 ease-in-out hover:text-blue-600"/>
                        </button>
                    </div>
                    <div className="mt-4">
                        <div className="flex gap-2 ">
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
                    <div className="mt-4 text-">
                        <p className="text-xs line-clamp-2 text-justify hyphens-auto lg:max-w-[82%] leading-normal text-neutral-800">{item.description}</p>
                    </div>
                    <div className="pt-3 mt-4 border-t border-gray-200 flex items-center justify-between">
                        <span className="text-xs font-semibold">${item.maxSalary}-{item.minSalary}<span className="text-[10px] text-gray-500 font-normal">/year</span></span>
                        <span className="text-[10px] text-gray-400">1 hours a go</span>
                    </div>
                </div>
                ))}
            </article>
       </article>
    )
}