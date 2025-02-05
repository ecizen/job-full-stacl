import images from "@/app/assets/image";
import { Map, MapPin, Search } from "lucide-react";
import Image from "next/image";

const SearcJobCard = () => {
    return (
        <article className="lg:px-12 px-6 lg:pb-4 pt-4 pb-8 bg-[#e6f1ec] w-full relative">
            <Image src={images.OfficeBuilding} alt="building" width={450} className=" absolute z-0 right-0 bottom-0 lg:brightness-100 brightness-50"/>
            <div className="z-10 relative ">
                <h1 className="lg:text-lg text-3xl font-bold text-purple-600 ">Discover your dream job today</h1>
            </div>
            <div className="mt-4 grid lg:grid-cols-2  rounded-full bg-white z-10 relative ">
                <div className=" flex items-center">
                    <div className="flex items-center space-x-2 w-full">
                        <div className=" h-8 rounded-l-full flex items-center justify-center pl-4">
                         <Search size={16} className="text-neutral-500" />
                        </div>
                        <input type="text" placeholder="Enter job title, or keywords..." className="text-xs w-full h-10 px-2  focus:border-[2px] focus:border-blue-500 focus:outline-none "/>
                    </div>
                    <div className="lg:block bg-gray-200 h-[23px] w-[2px] ">
                    </div>
                    <button className="lg:hidden px-4 h-8 bg-blue-600  text-xs text-white flex items-center gap-1 rounded-full"><Search size={16}></Search>Search</button>
                </div>
                <div className="lg:block hidden">
                    <div className="flex items-center space-x-2 w-full">
                            <div className=" h-8 rounded-l-full flex items-center justify-center px-2">
                                <MapPin size={16} className="text-neutral-500" />
                          </div>
                            <input type="text" placeholder="Enter location" className="text-xs w-full h-10 px-2  focus:border-[2px] focus:border-blue-500 focus:outline-none "/>
                            <div className=" max-w-max rounded-l-full flex items-center justify-center px-2">
                                <button className="px-4 h-8 bg-blue-600  text-xs text-white flex items-center gap-1 rounded-full"><Search size={16}></Search>Search</button>
                            </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SearcJobCard;