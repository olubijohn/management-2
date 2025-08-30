"use client";
import { ReactNode } from "react";
import Header from "@/components/header";
import SideNavBar from "@/components/sidenav";
import MobileNavigationProvider from "@/components/MobileNavigationProvider";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <MobileNavigationProvider>
      <Header />
      <SideNavBar />
      <main className="lg:ml-[231px] mt-14 p-3 lg:p-5 lg:pr-8">{children}</main>
    </MobileNavigationProvider>
  );
}
