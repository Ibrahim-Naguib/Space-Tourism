"use client";

import Image from "next/image";
import Link from "next/link";
import { logo, close, menu } from "public/index";
import { data } from "/data";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { styles } from "@/styles/styles";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const pathname = usePathname();

  const menuRef = useRef(null);

  useEffect(() => {
    const clickHandler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNavbar(false);
      }
    };
    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [menuRef]);

  return (
    <header>
      <nav
        className={`flex justify-between items-center h-[96px] lg:mt-[30px] ml-[24px] relative ${styles.barlow}`}
      >
        <div className="rounded-[50%]">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="sm:w-[50px] sm:h-[50]"
              priority
            />
          </Link>
        </div>

        <div className="hidden lg:block absolute top-[48px] left-[112px] z-10 bg-white w-[35%] h-[1px] opacity-[0.2514852] bg-blend-normal"></div>

        <div ref={menuRef} className="sm:hidden mr-[24px]">
          <button
            className="z-[12] relative"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <Image src={close} alt="close" />
            ) : (
              <Image src={menu} alt="menu" />
            )}
          </button>
          <div
            className={`w-[250px] h-full backdrop-blur-[30px] transition-all ease-in-out duration-500 fixed right-0 top-0 bg-blend-normal bg-darkbg z-10 ${
              navbar ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col pt-[120px] pl-[35px] uppercase">
              {data.navLinks.map(({ id, title, href }) => (
                <li
                  className="tracking-[2.7px] [&:not(:last-child)]:mb-[25px] pb-[5px] w-fit"
                  key={id}
                >
                  <Link
                    href={href}
                    onClick={() => setNavbar(false)}
                    className="text-white "
                  >
                    <span className="mr-2 font-bold">{id}</span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden sm:block lg:w-[60%] h-full bg-darkbg bg-blend-normal backdrop-blur-[30px]">
          <ul className="flex h-full items-center uppercase px-[45px] lg:px-0 lg:pl-[150px]">
            {data.navLinks.map(({ id, title, href }) => (
              <li
                className={` tracking-[2.3625px] [&:not(:last-child)]:mr-[25px] text-[14px] lg:text-[16px] flex h-full`}
                key={id}
              >
                <Link
                  href={href}
                  className={`${
                    pathname === href
                      ? `${styles.linkBorder}`
                      : `${styles.linkHover}`
                  } text-white  flex items-center`}
                >
                  <span className="hidden lg:block mr-[10px] font-bold">
                    {id}
                  </span>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
