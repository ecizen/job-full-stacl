import images from "@/app/assets/image";
import { ChartBar } from "lucide-react";
import Image from "next/image";

const LogoCardGojek = () => {
    return (
        <div className="absolute p-4 right-20 bottom-5 shadow-[0_8px_20px_rgb(0,0,0,0.17)]  rounded-2xl max-w-[160px] w-[160px] bg-white">
          <div className="p-2 rounded-full bg-gray-200 w-max">
            <Image src={images.google} alt=" goole" width={20}/>
          </div>
          <h1 className="text-[12px] font-semibold mt-4">Web Developer</h1>
          <p className="text-[10px] text-gray-600 flex flex-wrap mt-1">Google Inc</p>
          <div className="flex items-center gap-2 mt-4"> 
            <span className="p-1 rounded-sm bg-gray-200 text-[10px]">Full time</span>
            <span className="p-1 rounded-sm bg-gray-200 text-[10px]">Remote</span>
          </div>
        </div>
    )
}

export default LogoCardGojek;