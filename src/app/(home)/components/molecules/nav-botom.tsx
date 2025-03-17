"use client";

import { usePathname } from "next/navigation";
import { Home, Search, Briefcase, User } from "lucide-react";
import Link from "next/link";

const NavBottom = () => {
  const pathname = usePathname();

  // Define navigation links
  const navItems = [
    { href: "/home", label: "Home", Icon: Home },
    { href: "/search", label: "Search", Icon: Search },
    { href: `/myjob`, label: "myjobs", Icon: Briefcase },
    { href: "/profile", label: "Profile", Icon: User },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around pt-3 pb-6">
        {navItems.map(({ href, label, Icon }) => {
          const isActive =  pathname === href || (label === "Jobs" && pathname.startsWith("/home/"))
          return (
            <Link key={href} href={href} className="flex flex-col items-center text-center group">
              <div className="relative">
                <Icon
                  size={24}
                  className={`transition-all duration-300 ${
                    isActive ? "text-blue-500" : "text-gray-600 group-hover:text-blue-500"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                ></div>
              </div>
              <span
                className={`text-xs mt-1 transition-all duration-300 ${
                  isActive ? "text-blue-500 font-medium" : "text-gray-600 group-hover:text-blue-500"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBottom;
