"use client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { useMobileNavigation } from "@/components/MobileNavigationProvider";

export default function Header() {
  const { toggleMobileMenu } = useMobileNavigation();

  return (
    <header>
        <div className="py-[10px] px-5 flex items-center justify-between bg-white fixed left-0 top-0 right-0 z-999" style={{ boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.02)" }}>
            <div className="left flex items-center gap-2">
                <button 
                  onClick={toggleMobileMenu}
                  className="lg:hidden p-1 hover:bg-gray-100 rounded"
                >
                  <GiHamburgerMenu size={24} />
                </button>
                <Image src="/logo.png" alt="Logo" width={110} height={110} className="w-[80px] h-auto lg:w-[110px]" />
            </div>
            <div className="center relative hidden md:block">
                <input type="search" className="w-[300px] lg:w-[700px] h-9 rounded-[5px] py-2 px-4 bg-background" placeholder="     Search by User, Transaction ID, Invoice ID..." />
                <CiSearch className="absolute left-3 top-2 text-gray-400" size={20} />
            </div>
            <div className="right flex items-center justify-center gap-2 lg:gap-6">
                <div className="option flex">
                    <Image src="/message.png" alt="Message" width={40} height={40} className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]" />
                    <Image src="/bell.png" alt="Notification" width={40} height={40} className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]" />
                </div>
                <div className="profile flex items-center gap-2">
                    <div className="img">
                        <Image src="/profile.png" alt="Profile" width={32} height={32} className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]" />
                    </div>
                    <div className="text text-foreground hidden sm:block">
                        <h5 className="text-sm font-semibold">Ret SILO</h5>
                        <p className="text-xs font-normal text-[#9A9AAF]">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
