import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Inter } from "@next/font/google";

import styles from "./page.module.css";
import { pageData } from "@/Utils";

const inter = Inter({ subsets: ["latin"] });

const VdownPages = () => {
   return (
      <main>
         <div className={`${styles.grid} gap-2`}>
            <Link
               href="/vdown-rheels"
               className={`${styles.card} customBorder`}
            >
               <h2 className={inter.className}>
                  <div className="flex items-center gap-3">
                     <FaInstagram size={30} />
                     Rheels Downloader <span>-&gt;</span>
                  </div>
               </h2>
               <p className={inter.className}>{pageData.instaDesc}</p>
            </Link>

            <Link
               href="/vdown-youtube"
               className={`${styles.card} customBorder`}
            >
               <h2 className={inter.className}>
                  <div className="flex items-center gap-3">
                     <FaYoutube size={30} />
                     YouTube Downloader <span>-&gt;</span>
                  </div>
               </h2>
               <p className={inter.className}>{pageData.ytDesc}</p>
            </Link>

            <Link
               href="/vdown-tiktok"
               className={`${styles.card} customBorder`}
            >
               <h2 className={inter.className}>
                  <div className="flex items-center gap-3">
                     <FaTiktok size={30} />
                     TikTok Downloader <span>-&gt;</span>
                  </div>
               </h2>
               <p className={inter.className}>{pageData.tikDesc}</p>
            </Link>
         </div>
      </main>
   );
};

export default VdownPages;
