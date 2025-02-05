import { useState } from "react";
import { NavItems } from "./constant";

const NavbarItems = () => {
    const [active, setActive] = useState<number | null>(1);

    return (
        <ul className="flex items-center gap-2 ">
            {NavItems.map((item) => (
            <li onClick={()=> setActive(item.id) } key={item.id} className={`${active=== item.id ? 'rounded-md border border-[#5d2be7] bg-[#5d2be724]': ''} px-4 h-7 transition-all ease-linear duration-100`}>
                <a href="#" className={` ${active === item.id ? 'text-[#5d2be7]': 'text-neutral-600'} text-xs font-medium `}>{item.label}</a>
            </li>
            ))}
        </ul>
    )
}

export default NavbarItems;