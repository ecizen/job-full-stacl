'use client';
import { useMemo, useState } from "react";
import { ItemNav } from "./main-data-nav";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
const router = useRouter();
    const [active, setActive] = useState(1)

  const Handle = () => {
    router.push('/Authentication/sign-up')
  }
   
    return (
        <header className="max-w-7xl border-b top-0 sticky z-50 bg-white">
         <nav className="w-full lg:px-12 px-6 py-4 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold"><span className="text-blue-600 text-3xl">L</span>oker<span className="text-blue-600 text-3xl">S</span>ync</h1>
            </div>
            <ul className="lg:flex hidden items-center gap-6">
                {ItemNav.map((item)=> (
                    <li onClick={() => setActive(item.id)} key={item.id}><a href={item.href} className={`${active === item.id ? 'text-blue-600 font-bold text-[14px]' : ''} transition-all duration-300 ease-in-out hover:text-[14px] text-xs font-medium`}>{item.label}</a></li>
                ))}
            </ul>
            <div className="flex items-center">
                <button 
                    onClick={Handle}
                    className="px-4 h-10 text-xs font-semibold rounded-full border-2 border-blue-600 text-blue-500 hover:bg-gradient-to-r from-blue-400 to-blue-600 ease-linear duration-300 transition-all hover:border-blue-500 hover:shadow-md hover:text-white">
                    Get Started
                </button>
                {/* <button className="h-10 w-10 bg-blue-600 flex items-center justify-center rounded-full hover:ml-2 transition-all duration-500 ease-in-out group">
                    <ArrowRight className=" group-hover:scale-110 -rotate-45 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-in-out"/>
                </button> */}
            </div>
         </nav>
        </header>
    )
}

export default Navbar;