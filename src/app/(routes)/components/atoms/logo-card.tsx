'use client'
import images from "@/app/assets/image";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";

const LogoCard = () => {
    const [progress, setProgress] = React.useState(13);
 
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
        <div className="absolute p-4 left-28 shadow-[0_8px_20px_rgb(0,0,0,0.17)] top-6 rounded-2xl max-w-[160px] bg-white">
          <h1 
            id="progress-label" 
            className="text-[10px] font-semibold mb-3"
          >
            Complete your profile
          </h1>
          <Progress 
            value={progress} 
            className="rounded-sm bg-slate-300" 
            indicatorColor="bg-[#5E46FE]" 
            aria-labelledby="progress-label" // Associates the progress bar with the label
          />
          <p className="text-[10px] text-green-500 mt-1 font-medium">2 of 10 data</p>
          <p className="text-[10px] text-gray-600 flex flex-wrap mt-4">
            Complete your profile now and let us help you navigate
          </p>
        </div>
    );
};

export default LogoCard;
