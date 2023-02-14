"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { FaTimes } from "react-icons/fa";
import { deskMenus, mobileMenus } from "@/Utils/index";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
   const [toggleMenu, setToggleMenu] = useState(false);
   const router = useRouter();

   return (
      <main className="relative flex items-center justify-between text-sm max-w-customWidth w-full z-[2] font-customFont">
         <div className="">
            <a href="/">
               <Image
                  src="/vdown_logo.png"
                  alt="vdown_logo"
                  className={`${styles.vercelLogo} w-[120px] md:w-full`}
                  width={200}
                  height={200}
                  priority
               />
            </a>
         </div>

         <ul
            className={` ${inter.className} hidden md:flex items-center gap-3`}
         >
            {deskMenus.map((menu, i) => (
               <li
                  onClick={() =>
                     router.push(
                        `/vdown-${menu.split(" ")[0].toLocaleLowerCase()}`,
                     )
                  }
                  key={i}
                  className={`uppercase hover:underline underline-offset-1 cursor-pointer ${
                     i !== 0 && "pl-[10px] border-l-[1px] border-gray-500"
                  }`}
               >
                  <code className={styles.code}>{menu}</code>
               </li>
            ))}
         </ul>

         <TbMenu
            onClick={() => setToggleMenu((prev) => !prev)}
            className="md:hidden pr-1"
            size={30}
         />

         {/* Mobile Menu */}
         {toggleMenu && (
            <div className="h-[100vh] transition-all float-right duration-8000 z-[100] shadow-md customBg absolute right-0 top-0 w-full rounded-md">
               <div className="flex flex-col items-center justify-center gap-10 py-[2rem] px-[1rem]">
                  <div className="flex items-center">
                     <div className="flex flex-[0.2] content-start">
                        <FaTimes
                           onClick={() => setToggleMenu((prev) => !prev)}
                           size={20}
                        />
                     </div>
                     <div className="flex-[0.6]">
                        <Image
                           src="/vdown_logo.png"
                           alt="vdown_logo"
                           className="w-full"
                           width={200}
                           height={200}
                           priority
                        />
                     </div>
                     <div className="flex-[0.2]"></div>
                  </div>
                  <ul
                     className={` ${inter.className} flex flex-col items-center gap-5`}
                  >
                     {mobileMenus.map((menu, i) => (
                        <li
                           onClick={() => {
                              router.push(
                                 `/vdown-${menu
                                    .split(" ")[0]
                                    .toLocaleLowerCase()}`,
                              );
                              setToggleMenu((prev) => !prev);
                           }}
                           key={i}
                           className="hover:underline underline-offset-1 cursor-pointer"
                        >
                           <code className={styles.code}>{menu}</code>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         )}
      </main>
   );
};

export default Navbar;
