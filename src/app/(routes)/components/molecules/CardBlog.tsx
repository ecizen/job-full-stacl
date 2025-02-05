import images from "@/app/assets/image";
import Image from "next/image";

const CardBlog = () => {
    return (
    <div className=" gap-4 items-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
        <div className=" col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 bg-blue-500 lg:rounded-2xl rounded-md shadow relative group cursor-pointer">
          <Image src={images.Meet} alt="meet"  className="w-full h-[400px] object-cover lg:rounded-2xl rounded-md" />
          <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-transparent rounded-2xl via-black/40 to-black/70"></div>
          <div className="absolute top-0 flex flex-col justify-end z-20 p-4 max-w-[90%] h-full hover:opacity-0 opacity-100 transition-all ease-in-out duration-300">
             <div className="mb-2 flex items-center gap-2">
                <span className="py-1 px-3 text-xs rounded-full bg-white">General</span>
                <span className="py-1 px-3 text-xs rounded-full bg-white">Career</span>
             </div>
             <h1 className="text-white text-lg font-medium">Find Your Dream Job Today and Thrive</h1>
             <p className="text-gray-300 text-xs mt-2">Explore a wide range of job opportunities tailored to your goals. Whether you're just starting or seeking growth, we’re here to help you build the career of your dreams.</p>
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 bg-neutral-800 rounded-full">
            <span className="text-xs text-white">Featured</span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-span-1 h-[192px]   rounded-2xl shadow relative">
          <Image src={images.Meet} alt="meet"  className="w-full h-[192px] object-cover lg:rounded-2xl rounded-md" />
          <div className="absolute top-0 left-0 w-full h-[192px] bg-gradient-to-b from-transparent lg:rounded-2xl rounded-md via-black/40 to-black/70"></div>
          <div className="absolute top-0 flex flex-col justify-end z-20 p-4 max-w-[90%] h-full hover:opacity-0 opacity-100 transition-all ease-in-out duration-300">
             <div className="mb-2 flex items-center gap-2">
                <span className="py-1 px-3 text-xs rounded-full bg-white">General</span>
                <span className="py-1 px-3 text-xs rounded-full bg-white">Career</span>
             </div>
             <h1 className="text-white text-lg font-medium">Find Your Dream Job Today</h1>
             <p className="text-gray-300 text-xs mt-1 line-clamp-1">Explore a wide range of job opportunities tailored to your goals. Whether you're just starting or seeking growth, we’re here to help you build the career of your dreams.</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-span-1 h-[192px]   rounded-2xl shadow relative">
          <Image src={images.Meet} alt="meet"  className="w-full h-[192px] object-cover lg:rounded-2xl rounded-md" />
          <div className="absolute top-0 left-0 w-full h-[192px] bg-gradient-to-b from-transparent lg:rounded-2xl rounded-md via-black/40 to-black/70"></div>
          <div className="absolute top-0 flex flex-col justify-end z-20 p-4 max-w-[90%] h-full hover:opacity-0 opacity-100 transition-all ease-in-out duration-300">
             <div className="mb-2 flex items-center gap-2">
                <span className="py-1 px-3 text-xs rounded-full bg-white">General</span>
                <span className="py-1 px-3 text-xs rounded-full bg-white">Career</span>
             </div>
             <h1 className="text-white text-lg font-medium">Find Your Dream Job Today</h1>
             <p className="text-gray-300 text-xs mt-1 line-clamp-1">Explore a wide range of job opportunities tailored to your goals. Whether you're just starting or seeking growth, we’re here to help you build the career of your dreams.</p>
          </div>
        </div>
</div>

    )
}

export default CardBlog;