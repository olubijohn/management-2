"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Buildings,
  CardPos,
  Chart,
  Chart21,
  CloseCircle,
  Code,
  DocumentFilter,
  Document,
  Icon,
  ImportSquare,
  LogoutCurve,
  Setting2,
  UserTag,
  Menu,
} from "iconsax-reactjs";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Chart21 },
  { name: "Users Management", href: "/users", icon: UserTag },
  { name: "Payments History", href: "/payments", icon: CardPos },
  {
    name: "All Invoices",
    href: "/invoices",
    icon: DocumentFilter,
    subItems: [
      { name: "Invoices", href: "/reports/annual", icon: DocumentFilter },
      {
        name: "Failed Invoice",
        href: "/reports/monthly",
        icon: CloseCircle,
      },
    ],
  },
  { name: "Branches", href: "/", icon: Buildings },
  { name: "Reports", href: "/reports", icon: Document },
  {
    name: "Administration",
    href: "/administration",
    icon: Chart21,
    subItems: [
      {
        name: "Subscription",
        href: "/administration/monthly",
        icon: CardPos,
      },
      {
        name: "API Keys",
        href: "/administration/monthly",
        icon: Code,
      },
      {
        name: "Settings",
        href: "/administration/annual",
        icon: Setting2,
      },
    ],
  },
];

function SideNavBar() {
  const path = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Desktop sidebar
  if (!isMobile) {
    return (
      <nav className="bg-white py-7 px-4 w-[231px] h-screen flex flex-col items-center justify-between fixed left-0 top-14 z-50">
        <ul className="mt-3 flex flex-col gap-1 w-full">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.subItems ? (
                <>
                  <button
                    className={`w-full h-9 flex gap-1 items-center justify-center transition-colors duration-200 ${
                      openMenus[item.name]
                        ? "bg-[rgba(0,_98,_255,_0.10)] border-l-[4px] border-[#0062FF] text-black font-bold"
                        : path === item.href
                        ? "bg-[rgba(0,_98,_255,_0.10)] border-l-[4px] border-[#0062FF] text-black font-bold"
                        : "hover:bg-[rgba(0,_98,_255,_0.10)] hover:border-l-[4px] hover:font-bold border-[#0062FF]"
                    }`}
                    onClick={() => toggleMenu(item.name)}
                    type="button"
                    style={openMenus[item.name] ? { cursor: "default" } : {}}
                  >
                    <div className="px-3 flex items-center justify-center w-full">
                      <item.icon
                        variant="Bulk"
                        color={path === item.href ? "#0062FF" : "#292D32"}
                        className="w-5 h-5 mr-3"
                      />
                      <span className="text-sm text-black w-[120px] text-left">
                        {item.name}
                      </span>
                      <span className="ml-auto flex items-center">
                        <svg
                          className={`transition-transform duration-300 ${
                            openMenus[item.name] ? "rotate-180" : ""
                          }`}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                  <ul
                    className={`mt-1 overflow-hidden transition-all duration-300 ${
                      openMenus[item.name]
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.subItems.map((sub) => (
                      <li key={sub.name}>
                        <Link href={sub.href}>
                          <div
                            className={`w-full h-9 flex gap-1 pl-7 items-center transition-colors duration-200 ${
                              path === sub.href
                                ? "bg-[rgba(0,_98,_255,_0.10)] border-l-[4px] border-[#0062FF] text-black font-bold"
                                : "hover:bg-[rgba(0,_98,_255,_0.10)] hover:border-l-[4px] hover:font-bold border-[#0062FF]"
                            }`}
                          >
                            <sub.icon
                              variant="Bulk"
                              color={path === sub.href ? "#0062FF" : "#292D32"}
                              className="w-5 h-5 mr-3"
                            />
                            <span className="text-sm text-black w-[100px] text-left">
                              {sub.name}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link key={item.name} href={item.href}>
                  <li
                    className={`w-full h-9 flex gap-1 items-center justify-center ${
                      path === item.href
                        ? "bg-[rgba(0,_98,_255,_0.10)] border-l-[4px] border-[#0062FF] text-black font-bold"
                        : "hover:bg-[rgba(0,_98,_255,_0.10)] hover:border-l-[4px] hover:font-bold border-[#0062FF]"
                    }`}
                  >
                    <div className="px-3 flex items-center justify-center">
                      <item.icon
                        variant="Bulk"
                        color={path === item.href ? "#0062FF" : "#292D32"}
                        className="w-5 h-5 mr-3"
                      />
                      <span className="text-sm text-black w-[143px]">
                        {item.name}
                      </span>
                    </div>
                  </li>
                </Link>
              )}
            </div>
          ))}
        </ul>
        <ul className="flex flex-col gap-1 mb-25 w-full">
          <Link href="/logout">
            <li
              className={`w-full h-9 flex gap-1 items-center justify-center ${
                path === "/logout"
                  ? "bg-[rgba(0,_98,_255,_0.10)] border-l-[4px] border-[#0062FF] text-black font-bold"
                  : "hover:bg-[rgba(0,_98,_255,_0.10)] hover:border-l-[4px] hover:font-bold border-[#0062FF]"
              }`}
            >
              <div className="px-3 flex items-center justify-center">
                <LogoutCurve
                  className="w-5 h-5 mr-3"
                  color={path === "/logout" ? "#0062FF" : "#292D32"}
                  variant="Bulk"
                />
                <span className="text-sm text-black w-[143px]">Log out</span>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }

  // Mobile sidebar
  return (
    <>
      {/* Mobile hamburger menu button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-md shadow-md"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={closeSidebar}>
            <CloseCircle size={24} />
          </button>
        </div>
        
        <nav className="overflow-y-auto h-full py-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <>
                    <button
                      className={`w-full h-12 flex gap-1 items-center transition-colors duration-200 ${
                        openMenus[item.name]
                          ? "bg-[rgba(0,_98,_255,_0.10)] border-l-[4px] border-[#0062FF] text-black font-bold"
                          : path === item.href
                          ? "bg-[rgba(0,_98,_255,_0.10)] border-l-[4px] border-[#0062FF] text-black font-bold"
                          : "hover:bg-[rgba(0,_98,_255,_0.10)] hover:border-l-[4px] hover:font-bold border-[#0062FF]"
                      }`}
                      onClick={() => toggleMenu(item.name)}
                      type="button"
                      style={openMenus[item.name] ? { cursor: "default" } : {}}
                    >
                      <div className="px-4 flex items-center w-full">
                        <item.icon
                          variant="Bulk"
                          color={path === item.href ? "#0062FF" : "#292D32"}
                          className="w-5 h-5 mr-3"
                        />
                        <span className="text-sm text-black flex-1 text-left">
                          {item.name}
                        </span>
                        <span className="flex items-center">
                          <svg
                            className={`transition-transform duration-300 ${
                              openMenus[item.name] ? "rotate-180" : ""
                            }`}
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="#000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </button>
                    <ul
                      className={`overflow-hidden transition-all duration-300 ${
                        openMenus[item.name]
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link href={sub.href} onClick={closeSidebar}>
                            <div
                              className={`w-full h-12 flex gap-1 pl-12 items-center transition-colors duration-200 ${
                                path === sub.href
                                  ? "bg-[rgba(0,_98,_255,_0.10)] border-l-[4px] border-[#0062FF] text-black font-bold"
                                  : "hover:bg-[rgba(0,_98,_255,_0.10)] hover:border-l-[4px] hover:font-bold border-[#0062FF]"
                              }`}
                            >
                              <sub.icon
                                variant="Bulk"
                                color={path === sub.href ? "#0062FF" : "#292D32"}
                                className="w-5 h-5 mr-3"
                              />
                              <span className="text-sm text-black">
                                {sub.name}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link key={item.name} href={item.href} onClick={closeSidebar}>
                    <li
                      className={`w-full h-12 flex gap-1 items-center ${
                        path === item.href
                          ? "bg-[rgba(0,_98,_255,_0.10)] border-l-[4px] border-[#0062FF] text-black font-bold"
                          : "hover:bg-[rgba(0,_98,_255,_0.10)] hover:border-l-[4px] hover:font-bold border-[#0062FF]"
                      }`}
                    >
                      <div className="px-4 flex items-center">
                        <item.icon
                          variant="Bulk"
                          color={path === item.href ? "#0062FF" : "#292D32"}
                          className="w-5 h-5 mr-3"
                        />
                        <span className="text-sm text-black">
                          {item.name}
                        </span>
                      </div>
                    </li>
                  </Link>
                )}
              </div>
            ))}
          </ul>
          
          <div className="mt-8 border-t pt-4">
            <Link href="/logout" onClick={closeSidebar}>
              <div className="w-full h-12 flex items-center px-4 hover:bg-[rgba(0,_98,_255,_0.10)]">
                <LogoutCurve
                  className="w-5 h-5 mr-3"
                  color="#292D32"
                  variant="Bulk"
                />
                <span className="text-sm text-black">Log out</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideNavBar;