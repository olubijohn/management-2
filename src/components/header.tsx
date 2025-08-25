import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <header>
        <div className="py-[10px] px-5 flex items-center justify-between bg-white fixed left-0 top-0 right-0 z-999" style={{ boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.02)" }}>
            <div className="left flex items-center gap-2">
                <GiHamburgerMenu size={24} />
                <Image src="/logo.png" alt="Logo" width={110} height={110} />
            </div>
            <div className="center relative">
                <input type="search" className="w-[700px] h-9 rounded-[5px] py-2 px-4 bg-background" placeholder="     Search by User, Transaction ID, Invoice ID..." />
                <CiSearch className="absolute left-3 top-2 text-gray-400" size={20} />
            </div>
            <div className="right flex items-center justify-center gap-6">
                <div className="option flex">
                    <Image src="/message.png" alt="Message" width={40} height={40} />
                    <Image src="/bell.png" alt="Notification" width={40} height={40} />
                </div>
                <div className="profile flex items-center gap-2">
                    <div className="img">
                        <Image src="/profile.png" alt="Profile" width={32} height={32} />
                    </div>
                    <div className="text text-foreground">
                        <h5 className="text-sm font-semibold">Ret SILO</h5>
                        <p className="text-xs font-normal text-[#9A9AAF]">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
