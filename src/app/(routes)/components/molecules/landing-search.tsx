import { Building, Locate, Search } from "lucide-react";

const LandingSearch =() => {
    return (
        <div className="lg:max-w-[55%] w-full grid lg:grid-cols-4 mt-8 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] lg:rounded-full rounded-md">
            <div className="w-full py-2 px-2 bg-gray-white lg:col-span-3 grid lg:grid-cols-3 grid-cols-1 lg:gap-y-0 lg:gap-x-2 gap-y-4">
                <div className="relative flex items-center">
                    <Search className=" absolute left-2 text-[#5E46FE]" size="20"/>
                    <input className="w-full h-10 border border-gray-200 rounded-full text-xs px-8" placeholder="search for job.."/>
                </div>
                <div className="relative flex items-center">
                    <Locate className=" absolute left-2 text-[#5E46FE]" size="20"/>
                    <input className="w-full h-10 border border-gray-200 rounded-full text-xs px-8" placeholder="Job Type."/>
                </div>
                <div className="relative flex items-center">
                    <Building className=" absolute left-2 text-[#5E46FE]" size="20"/>
                    <input className="w-full h-10 border border-gray-200 rounded-full text-xs px-8" placeholder="Department"/>
                </div>
            </div>
            <div className="w-full py-2 px-2 bg-whites col-span-1">
                <button className="w-full bg-[#5E46FE] rounded-full h-10 text-white text-xs">Search</button>
            </div>
        </div>
    )
}

export default LandingSearch;