"use client";
import { Navbar } from "@/components";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`bg-cover min-h-[100vh] lg:bg-auto bg-no-repeat bg-blend-normal
      ${
        pathname === "/destination"
          ? "bg-destMobile md:bg-destTablet lg:bg-destDesktop"
          : pathname === "/technology"
          ? "bg-techMobile md:bg-techTablet lg:bg-techDesktop"
          : pathname === "/crew"
          ? "bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop"
          : "bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop"
      }
      `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
