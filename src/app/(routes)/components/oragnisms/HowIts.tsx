import { ArrowRight } from "lucide-react";

const HowItsWork = () => {
    return (
        <section className=" lg:min-h-screen max-w-7xl  lg:px-12 px-6 py-8">
            <article className=" w-full flex flex-col ">
                <h1 className="text-4xl font-semibold">How It Works?</h1>
                <p className="text-sm text-gray-400 mt-4">Find your dream job in just a few clicks. We make everything easier!</p>
                <div className="mt-8">
                    <div className="w-full py-6 border-b flex lg:flex-row flex-col  lg:items-center justify-between">
                        <h1 className="text-xl font-semibold">Create Account</h1>
                        <div className="flex items-center space-x-4">
                         <h1 className="lg:text-sm text-xs font-medium max-w-lg text-gray-600 leading-relaxed">Activate job notifications to always get the latest information about vacancies that match your criteria! lorem </h1>
                         <button className="p-4 rounded-full bg-gray-300 group hover:bg-[#5E46FE]">
                            <ArrowRight size={19} className=" group-hover:-rotate-45 transition-all duration-200 ease-linear group-hover:text-white"/>
                         </button>
                        </div>
                    </div>
                    <div className="w-full py-6 border-b flex lg:flex-row flex-col  lg:items-center justify-between">
                        <h1 className="text-xl font-semibold">Search Job</h1>
                        <div className="flex items-center space-x-4">
                         <h1 className="lg:text-sm text-xs font-medium max-w-lg text-gray-600 leading-relaxed">Activate job notifications to always get the latest information about vacancies that match your criteria! lorem </h1>
                         <button className="p-4 rounded-full bg-gray-300 group hover:bg-[#5E46FE]">
                            <ArrowRight size={19} className=" group-hover:-rotate-45 transition-all duration-200 ease-linear group-hover:text-white"/>
                         </button>
                        </div>
                    </div>
                    <div className="w-full py-6 border-b flex lg:flex-row flex-col  lg:items-center justify-between">
                        <h1 className="text-xl font-semibold">Upload Your Resume</h1>
                        <div className="flex items-center space-x-4">
                         <h1 className="lg:text-sm text-xs font-medium max-w-lg text-gray-600 leading-relaxed">Activate job notifications to always get the latest information about vacancies that match your criteria! lorem </h1>
                         <button className="p-4 rounded-full bg-gray-300 group hover:bg-[#5E46FE]">
                            <ArrowRight size={19} className=" group-hover:-rotate-45 transition-all duration-200 ease-linear group-hover:text-white"/>
                         </button>
                        </div>
                    </div>
                    <div className="w-full py-6 border-b flex lg:flex-row flex-col  lg:items-center justify-between">
                        <h1 className="text-xl font-semibold">Apply Job</h1>
                        <div className="flex items-center space-x-4">
                         <h1 className="lg:text-sm text-xs font-medium max-w-lg text-gray-600 leading-relaxed">Activate job notifications to always get the latest information about vacancies that match your criteria! lorem </h1>
                         <button className="p-4 rounded-full bg-gray-300 group hover:bg-[#5E46FE]">
                            <ArrowRight size={19} className=" group-hover:-rotate-45 transition-all duration-200 ease-linear group-hover:text-white"/>
                         </button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default HowItsWork;