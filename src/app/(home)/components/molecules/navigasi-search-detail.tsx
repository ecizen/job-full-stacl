import { CircleEllipsis, MapPin, Search } from "lucide-react"

const SearcNAvigationDetail = () => {
    return (
        <div className="bg-transparent">
            <div className=" lg:grid grid-cols-3 flex  gap-2   rounded-full  z-10 ">
                <div className=" lg:col-span-2 grid lg:grid-cols-2 grid-cols-1 w-full bg-white rounded-full border border-gray-200">
                    <div className="flex items-center lg:pr-2 ">
                        <div className="flex items-center space-x-2 w-full">
                            <div className=" h-8 rounded-l-full flex items-center justify-center pl-4">
                                <Search size={16} className="text-neutral-500" />
                            </div>
                            <input type="text" placeholder="Enter job title, or keywords..." className="text-xs w-full h-10 px-2  focus:border-[2px] focus:border-blue-500 focus:outline-none "/>
                        </div>
                        <div className="lg:hidden bg-gray-200 h-[33px] w-[40px] rounded-full ">
                            <button className="lg:hidden lg:px-4 w-8 h-8 bg-blue-600 justify-center text-xs text-white flex items-center gap-1 rounded-full"><Search size={16}></Search><span className="lg:block md:block hidden">Search</span></button>
                        </div>
                    </div>
                    <div className=" lg:block hidden">
                        <div className="flex items-center space-x-2 w-full">
                                <div className=" h-8 rounded-l-full flex items-center justify-center px-2">
                                    <MapPin size={16} className="text-neutral-500" />
                            </div>
                                <input type="text" placeholder="Enter location" className="lg:block hidden text-xs w-full h-10 px-2  focus:border-[2px] focus:border-blue-500 focus:outline-none "/>
                                <div className=" max-w-max rounded-r-full flex items-center justify-center px-2 bg-white">
                                    <button className="px-4 h-8 bg-blue-600  text-xs text-white flex items-center gap-1 rounded-full"><Search size={16}></Search>Search</button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-full col-span-1  bg-white max-w-max border border-gray-200">
                    <button className="lg:px-4 lg:w-auto lg:max-w-max w-10 h-10 flex items-center justify-center gap-1 rounded-full ">
                        <CircleEllipsis size={20} className="text-blue-600" />
                        <p className="lg:block md:block hidden text-sm text-blue-600 font-semibold">More</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SearcNAvigationDetail;