import React from "react";
import Form from "./Form";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

import { FaYoutube } from "react-icons/fa";
import Navbar from "./Navbar";
import VdownPages from "./VdownPages";
import Showcase from "./Showcase";
import { showcaseData } from "@/Utils";

const inter = Inter({ subsets: ["latin"] });

async function YtDown() {
   return (
      <main>
         <div className="flex flex-col justify-between items-center px-[1rem] md:px-[6rem] py-[2rem] min-h-[100vh]">
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
                     By clicking{" "}
                     <span className="font-semibold">Get Video</span> you accept
                     our{" "}
                     <span className="font-semibold underline hover:cursor-pointer">
                        Terms & Conditions
                     </span>
                  </p>
               </div>
            </div>

            <p
               className={`${inter.className} flex justify-center items-center text-black font-semibold mt-2`}
            >
               <span>-&gt;</span> Download Video in 3 Easy Steps{" "}
               <span>&lt;-</span>
            </p>
            <VdownPages />
         </div>

         {showcaseData.map((showcase, i) => (
            <div
               key={i}
               className={`flex flex-col gap-6 flex-1 max-[768px]:p-2 md:min-h-[100vh] px-[1rem] max-[768px]:rounded-md md:px-[12rem] md:py-[2rem] items-center justify-start md:justify-center max-[768px]:shadow-md ${styles.card} shadow-sm customBorder`}
            >
               <Showcase
                  index={i}
                  pageTitle={i === 0 && "How to Use"}
                  title={showcase.title}
                  description={showcase.description}
                  imgUrl={showcase.imgUrl}
               />
            </div>
         ))}
      </main>
   );
}

export default YtDown;
