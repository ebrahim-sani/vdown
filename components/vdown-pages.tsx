import React from "react";
import { MdScreenSearchDesktop } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

import styles from "../app/page.module.css";
import { BiLink } from "react-icons/bi";
import { pageData } from "@/utils";

const VdownPages = () => {
   return (
      <main>
         <div className={`${styles.grid} gap-2`}>
            <div className={`${styles.card} shadow-sm customBorder`}>
               <h2>
                  <div className="flex items-center gap-3 text-black max-[768px]:text-sm">
                     <BiLink size={30} />
                     Get The Link of Your Video
                  </div>
               </h2>
               <p>{pageData.instaDesc}</p>
            </div>

            <div className={`${styles.card} shadow-sm customBorder`}>
               <h2>
                  <div className="flex items-center gap-3 text-black max-[768px]:text-sm">
                     <MdScreenSearchDesktop size={30} />
                     Paste in The Input Field & Search
                  </div>
               </h2>
               <p>{pageData.ytDesc}</p>
            </div>

            <div className={`${styles.card} shadow-sm customBorder`}>
               <h2>
                  <div className="flex items-center gap-3 text-black max-[768px]:text-sm">
                     <SlOptionsVertical size={20} />
                     Click 3-Dot Option & Download
                  </div>
               </h2>
               <p>{pageData.tikDesc}</p>
            </div>
         </div>
      </main>
   );
};

export default VdownPages;
