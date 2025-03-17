import images from "@/app/assets/image";
import exp from "constants"
import Image from "next/image";
import NavbarItems from "../atoms/navbar-items";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { Archive, Bell, Heart, List, Settings } from "lucide-react";
import Link from "next/link";


interface User {
    id: string; 
    name: string;
    email: string;
   
  }
interface Session {
    user : User;
}

const Navbar = () => {

    const { data: session, status } = useSession() as { data: Session | null; status: string };
    return (
        <header className=" top-0 sticky z-20 max-w-7xl lg:px-12 px-6 py-4 overflow-hidden bg-white lg:shadow-none shadow-sm border-b border-gray-300">
            <nav className="w-full flex justify-between">
                <div className="flex items-center space-x-12">
                    <div className="flex items-center space-x-2">
                        <Link href={"/home"}>
                        <h1 className="text-md font-semibold text-[#5d2be7]">Lokersync</h1>
                        </Link>
                    </div>
                </div>
                <div className="lg:block hidden">
                <NavbarItems/>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="relative">
                        <Avatar className="" >
                            <AvatarImage className="" src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="w-3 -top-[2px] right-[1px] rounded-full h-3  bg-teal-500 absolute"></div>
                    </button>
                    <a href="/like-job" className="h-8 w-8 bg-gray-100 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:border-none group rounded-full border border-gray-300 flex items-center justify-center">
                        <Heart size={18} className="text-neutral-700 font-medium group-hover:text-white ease-in-out"/>
                    </a>
                    <a href="like-job"  className="h-8 w-8 bg-gray-100 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:border-none group rounded-full border border-gray-300 flex items-center justify-center">
                        <Bell size={18} className="text-neutral-700 font-medium group-hover:text-white ease-in-out"/>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;