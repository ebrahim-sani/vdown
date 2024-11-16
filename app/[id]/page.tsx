import React from "react";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import styles from "../page.module.css";
import Navbar from "@/components/navbar";
import Form from "@/components/form";
import VidDetails from "@/components/vid-details";

// https://www.youtube.com/watch?v=eZvji8Chxak

const fetchVideoInfo = async (id: string) => {
   try {
      const result = await fetch(
         "https://vdown-git-vdown-new-ebrahimsanis-projects.vercel.app/api/get-vid-details",
         {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(id),
         },
      );

      if (!result.ok) {
         console.log("Response Error:", result.statusText);
      }

      const response = await result.json();
      console.log(response);
      return response;
   } catch (error) {
      console.log("Fetch or Parsing Error:", error);
   }
};

export default async function Page({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   console.log((await params).id);

   const response = await fetchVideoInfo((await params).id);
   const { videoDetails, activeVidFormats } = await response;
   console.log(response);

   if (!videoDetails || !activeVidFormats) {
      console.log("Incomplete response data");
   }

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
               <p className="text-center max-[768px]:px-1 text-xs">
                  By clicking <span className="font-semibold">Get Video</span>{" "}
                  you accept our{" "}
                  <span className="font-semibold underline hover:cursor-pointer">
                     Terms & Conditions
                  </span>
               </p>
            </div>
         </div>

         <div>
            <VidDetails
               activeVidFormats={activeVidFormats}
               videoDetails={videoDetails}
            />
         </div>
      </main>
   );
}
