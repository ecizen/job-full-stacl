import { Building2, Coins, Timer } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DialogFormApply } from "../atoms/button-apply";

interface CardHireProps {
  id: number;
  image: any;
  company: string;
  country: string;
  city: string;
  jobPostition: string;
  jobType: string | string[];
  description: string;
  responsibilities: string | string[];
  requirdSkills: string | string[];
  schedule: string | string[];
  requirements: string | string[];
  salary : number
}

const DetailJob: React.FC<CardHireProps> = ({
  id,
  jobPostition,
  company,
  city,
  jobType,
  salary,
  description,
  responsibilities,
  requirdSkills,
  requirements,
  schedule,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleApplyClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      router.push("/apply");
    }, 2000);
  };

  return (
    <div key={id} className="p-8 relative lg:col-span-2 bg-white">
      <div className="mb-6">
        <h1 className="text-xl text-blue-600 font-semibold mb-1">{jobPostition}</h1>
        <span className="text-sm font-medium">{company}, {city}</span>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <div className="p-1 max-w-max rounded-full shadow-sm border border-gray-200">
            <Timer size={18} className="text-black" />
          </div>
          <div className="text-xs">
          {Array.isArray(jobType) ? jobType.join(", ") : jobType}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-1 max-w-max rounded-full shadow-sm border border-gray-200">
            <Coins size={18} className="text-black" />
          </div>
          <p className="text-xs font-semibold">
            ${salary}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-lg font-semibold">Job Description:</h1>
        <p className="mt-2 text-xs text-justify max-w-[650px] leading-relaxed text-gray-500">
        <span dangerouslySetInnerHTML={{ __html: description }} />
        </p>
      </div>
      <div className="mt-6">
        <h1 className="text-lg font-semibold">{jobPostition} Responsibilities:</h1>
        <ul className="space-y-2 mt-2  list-disc marker:text-black">
          {Array.isArray(responsibilities) ? responsibilities.map((type, index) => (
            <span key={index} dangerouslySetInnerHTML={{ __html: type }} />
          )) : <span className="text-xs leading-relaxed"  dangerouslySetInnerHTML={{ __html: responsibilities }} />}
        </ul>
      </div>
      {isMobile && !showMore && (
        <button
          className="mt-4 text-blue-600 text-xs font-semibold"
          onClick={() => setShowMore(true)}
        >
          Lihat Selengkapnya
        </button>
      )}
      {(showMore || !isMobile) && (
        <div className="transition-opacity duration-500 opacity-100">
          <div className="mt-6">
            <h1 className="text-lg font-semibold">Required Skills:</h1>
            <div className="flex items-center flex-wrap gap-2 mt-2">
              {Array.isArray(requirdSkills) ? requirdSkills.map((skill, index) => (
                <div key={index} className="p-1 px-2 border max-w-max border-gray-200 rounded-full">
                  <p className="text-xs text-blue-500">{skill}</p>
                </div>
              )) : (
                <div className="p-1 px-2 border-gray-200 border max-w-max text-blue-500 text-xs rounded-full">
                  {requirdSkills}
                </div>
              )}
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-lg font-semibold">Requirements:</h1>
           <p><span className="text-xs leading-relaxed"  dangerouslySetInnerHTML={{ __html: responsibilities }} /></p>
          </div>
          <div className="mt-6">
            <h1 className="text-lg font-semibold">Schedule:</h1>
            <div className="flex items-center flex-wrap gap-2 mt-2">
              {Array.isArray(schedule) ? schedule.map((schedule, index) => (
                <div key={index} className="p-1 px-2 border max-w-max border-gray-200 rounded-full">
                  <p className="text-xs text-blue-500">{schedule}</p>
                </div>
              )) : (
                <div className="p-1 px-2 border-gray-200 border max-w-max text-blue-500 text-xs rounded-full">
                  {requirdSkills}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-4 justify-center fixed bottom-20">
          <DialogFormApply jobPostId={id}  company={company} jobPostition={jobPostition}/> 
          <button className="text-sm text-neutral-800 border border-gray-300 px-4 h-10 rounded-full z-50 backdrop-blur-3xl shadow-2xl">
            add to list
          </button>
        </div>
      </div>
      </div>
  );
};

export default DetailJob;
