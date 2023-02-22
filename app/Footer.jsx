import React from "react";
import styles from "./page.module.css";
import { deskMenus } from "@/Utils";
import Link from "next/link";

const Footer = () => {
   return (
      <div className={`${styles.grid} gap-2 items-start md:items-center`}>
         <div>VIDOWN</div>
         <div>
            <p>&copy;2023</p>
         </div>
         <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            {deskMenus.map((menu, i) => (
               <Link key={i} href={`/${menu}`}>
                  <p>{menu}</p>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Footer;
