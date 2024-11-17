import React from "react";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import styles from "../page.module.css";
import Navbar from "@/components/navbar";
import Form from "@/components/form";

export default async function Page() {
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

            <Form />
         </div>

         {/* <div>
            <VidDetails
               activeVidFormats={activeVidFormats}
               videoDetails={videoDetails}
            />
         </div> */}
      </main>
   );
}
