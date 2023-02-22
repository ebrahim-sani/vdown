import React from "react";
import { fetchData } from "@/Utils/FetchData";
import Form from "./Form";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../page.module.css";

import { FaYoutube } from "react-icons/fa";
import Navbar from "../Navbar";
import VdownPages from "../VdownPages";

const inter = Inter({ subsets: ["latin"] });

async function YtDown() {
   return (
      <main className="flex flex-col justify-between items-center px-[1rem] md:px-[6rem] py-[2rem] min-h-[100vh]">
         <Navbar />

         <div className="flex md:w-[500px] justify-center flex-col items-center relative py-[2rem] gap-8">
            <div className="flex items-center">
               <Image
                  className={styles.logo}
                  src="/center_logo1.png"
                  alt="Next.js Logo"
                  width={250}
                  height={200}
                  priority
               />
               <div className={styles.thirteen}>
                  <FaYoutube size={30} />
               </div>
            </div>

            <div className="flex w-full flex-col items-center gap-1">
               <Form />
               <p
                  className={`text-center max-[768px]:px-1 text-xs ${inter.className}`}
               >
                  By clicking <span className="font-semibold">Get Video</span>{" "}
                  you accept our{" "}
                  <span className="font-semibold underline hover:cursor-pointer">
                     Terms & Conditions
                  </span>
               </p>
            </div>
         </div>

         <VdownPages />
      </main>
   );
}

export default YtDown;
