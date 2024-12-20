import Link from "next/link";
import NavlistItem from "../atoms/nav-list-item";
import Mail01Icon from "../icons/mail-01-stroke-rounded";
import { UserIcon } from "../icons/userIcon";

const Navbar = () => {
    return (
        <header className=" mx-auto px-8 py-4 bg-black">
            <nav className="w-full grid lg:grid-cols-3 grid-cols-2 ">
                <div className="">
                    <h1 className="font-semibold text-2xl text-white">lokerync</h1>
                </div>
                <ul className="lg:flex hidden gap-10 items-center justify-center">
                    <NavlistItem/>
                </ul>
                <div className="flex items-center gap-8 justify-end">
                    <Link href="/message">
                        <Mail01Icon/>
                    </Link>
                    <Link href="/message">
                        <UserIcon/>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;