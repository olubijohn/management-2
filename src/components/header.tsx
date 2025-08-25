import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch, CiMenuKebab } from "react-icons/ci";
import { useState, useEffect } from "react";

export default function Header({ onMenuToggle }: { onMenuToggle: () => void }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <header>
      <div 
        className="py-[10px] px-4 md:px-5 flex items-center justify-between bg-white fixed left-0 top-0 right-0 z-50" 
        style={{ boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.02)" }}
      >
        {/* Left section - Logo and hamburger menu */}
        <div className="left flex items-center gap-2 md:gap-3">
          <button 
            onClick={onMenuToggle}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu size={24} />
          </button>
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={isMobile ? 90 : 110} 
            height={isMobile ? 90 : 110} 
            className="hidden md:block"
          />
          {isMobile && (
            <div className="mobile-logo">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={80} 
                height={80} 
              />
            </div>
          )}
        </div>

        {/* Center section - Search bar (desktop) */}
        {!isMobile && (
          <div className="center relative hidden md:flex">
            <input 
              type="search" 
              className="w-[500px] lg:w-[700px] h-9 rounded-[5px] py-2 px-4 bg-background pl-10" 
              placeholder="Search by User, Transaction ID, Invoice ID..." 
            />
            {/* <CiSearch className="absolute left-3 top-2 text-gray-400" size={20} /> */}
          </div>
        )}

        {/* Right section - Icons and profile */}
        <div className="right flex items-center justify-center gap-4 md:gap-6">
          {/* Search icon for mobile */}
          {isMobile && (
            <button 
              onClick={toggleMobileSearch}
              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <CiSearch size={24} />
            </button>
          )}
          
          {/* Icons - hidden on mobile when search is active */}
          <div className={`option flex ${isMobile && showMobileSearch ? 'hidden' : 'flex'}`}>
            <button className="p-1 rounded-md hover:bg-gray-100 transition-colors">
              <Image src="/message.png" alt="Message" width={36} height={36} />
            </button>
            <button className="p-1 rounded-md hover:bg-gray-100 transition-colors">
              <Image src="/bell.png" alt="Notification" width={36} height={36} />
            </button>
          </div>
          
          {/* Profile section - hidden on mobile when search is active */}
          <div className={`profile flex items-center gap-2 ${isMobile && showMobileSearch ? 'hidden' : 'flex'}`}>
            <div className="img hidden md:block">
              <Image src="/profile.png" alt="Profile" width={32} height={32} />
            </div>
            <div className="text text-foreground hidden md:block">
              <h5 className="text-sm font-semibold">Ret SILO</h5>
              <p className="text-xs font-normal text-[#9A9AAF]">Admin</p>
            </div>
            
            {/* Mobile profile menu */}
            {isMobile && (
              <div className="relative">
                <button 
                  onClick={toggleProfileMenu}
                  className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="Profile menu"
                >
                  <CiMenuKebab size={24} />
                </button>
                
                {showProfileMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-100 flex items-center gap-2">
                      <Image src="/profile.png" alt="Profile" width={32} height={32} />
                      <div>
                        <h5 className="text-sm font-semibold">Ret SILO</h5>
                        <p className="text-xs font-normal text-[#9A9AAF]">Admin</p>
                      </div>
                    </div>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile Settings
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile search bar - appears when search icon is clicked */}
      {isMobile && showMobileSearch && (
        <div className="fixed top-full left-0 right-0 bg-white p-3 shadow-md z-40 mt-0">
          <div className="relative">
            <input 
              type="search" 
              className="w-full h-10 rounded-[5px] py-2 px-4 bg-background pl-10 border border-gray-200" 
              placeholder="Search by User, Transaction ID, Invoice ID..." 
              autoFocus
            />
            {/* <CiSearch className="absolute left-3 top-2.5 text-gray-400" size={20} /> */}
            <button 
              onClick={() => setShowMobileSearch(false)}
              className="absolute right-3 top-2.5 text-gray-500 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}