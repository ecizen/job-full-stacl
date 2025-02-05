'use client'
import { useState } from "react"
import { CategoryFeatureData } from "../atoms/constant-data"

const CategoryFeature = () => {
    const [active, setActive] = useState(1);
    
    return (
        <div className="lg:max-w-max w-full">
            <ul className="flex lg:flex-row flex-wrap items-center lg:gap-4 gap-2 overflow-x-auto">
                {CategoryFeatureData.map((item) => (
                    <li onClick={() => setActive(item.id)} key={item.id} className="shrink-0">
                        <a 
                            className={`${active === item.id ? 'text-[#5E46FE]' : 'text-gray-600'} text-xs cursor-pointer font-semibold whitespace-nowrap`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryFeature;
