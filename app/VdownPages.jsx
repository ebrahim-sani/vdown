import React from "react";
import { MdScreenSearchDesktop } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { Inter } from "@next/font/google";

import styles from "./page.module.css";
import { pageData } from "@/Utils";
import { BiLink } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

const VdownPages = () => {
   return (
      <main>
         <div className={`${styles.grid} gap-2`}>
            <div className={`${styles.card} shadow-sm customBorder`}>
               <h2 className={inter.className}>
                  <div className="flex items-center gap-3">
                     <BiLink size={30} />
                     Get The Link of Your Video
                  </div>
               </h2>
               <p className={inter.className}>{pageData.instaDesc}</p>
            </div>

            <div className={`${styles.card} shadow-sm customBorder`}>
               <h2 className={inter.className}>
                  <div className="flex items-center gap-3">
                     <MdScreenSearchDesktop size={30} />
                     Paste in The Input Field & Search
                  </div>
               </h2>
               <p className={inter.className}>{pageData.ytDesc}</p>
            </div>

            <div className={`${styles.card} shadow-sm customBorder`}>
               <h2 className={inter.className}>
                  <div className="flex items-center gap-3">
                     <SlOptionsVertical size={20} />
                     Click 3-Dot Option & Download
                  </div>
               </h2>
               <p className={inter.className}>{pageData.tikDesc}</p>
            </div>
         </div>
      </main>
   );
};

export default VdownPages;
