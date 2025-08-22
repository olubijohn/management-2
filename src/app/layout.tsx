import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideNavBar from "@/components/sidenav";

const inter = Inter({
  weight: ["400", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiscal - Branch Management",
  description: "Manage your branch operations efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <Header />
          <SideNavBar />
          <main className="ml-[231px] p-5 pr-8">{children}</main>
      </body>
    </html>
  );
}
