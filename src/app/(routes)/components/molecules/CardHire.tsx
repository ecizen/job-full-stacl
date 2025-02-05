import { CircleDollarSign, MapIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardHireProps {
    id : number
    image : any,
    company : string
    country : string,
    city : string,
    jobPostition : string,
    typeJob : string | string[],
    description : string,
    minSalary : number,
    maxSalary : number
}

const CardHire:React.FC<CardHireProps> = ({id,image,company, country,city,jobPostition,typeJob,description,minSalary,maxSalary}) => {
    return (
        <article key={id} className=" rounded-lg p-6 w-full bg-white ">
            <div className="flex items-center space-x-2">
                <Image src={image} alt="logo company" width={40} className="rounded-sm"/>
                <header className="flex flex-col gap-1 pb-2">
                    <h2 className="text-sm text-black font-semibold">{company}</h2>
                    <div className="flex gap-1">
                        <MapIcon size={15} className="text-gray-400"/>
                        <span className="text-xs text-gray-500 ">{country}</span>
                        <span className="text-xs text-gray-500">{city}</span>
                    </div>
                </header>
            </div>
                <div className="py-2">
                    <h1 className="text-sm font-semibold">{jobPostition}</h1>
                    <span className="text-xs mt-0 text-gray-500">{typeJob}</span>
                </div>
                <div className="py-2">
                    <p className="text-xs line-clamp-2 text-justify">{description}</p>
                </div>
                <div className="flex justify-between items-center pt-4 ">
                    <div className="flex space-x-1 items-center">
                        <CircleDollarSign size={20} className="text-gray-500"/>
                        <p className="text-sm font-semibold">${minSalary}<span>-</span>${maxSalary}</p>
                    </div>
                    <button className="px-3 h-7 rounded-md border-2 border-blue-600 text-blue-700 hover:bg-blue-700 transition-all ease-in-out duration-300 hover:text-white text-xs font-medium">Apply Now</button>
                </div>
        </article>
    )
}

export default CardHire;