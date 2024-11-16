import React from "react";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import styles from "../page.module.css";
import Navbar from "@/components/navbar";
import Form from "@/components/form";
import VidDetails from "@/components/vid-details";

const fetchVideoInfo = async (searchParam: string) => {
   try {
      const result = await fetch("/api/get-vid-details}", {
         headers: { "Content-Type": "application/json" },
         cache: "no-store",
      });

      if (!result.ok) {
         console.log("Response Error:", result.statusText);
      }

      const contentType = result.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
         const response = await result.json();
         return response;
      } else {
         const rawText = await result.text();
         console.log("Unexpected content-type. Response text:", rawText);
      }
   } catch (error) {
      console.log("Fetch or Parsing Error:", error);
   }
};

export default async function page({
   searchParam,
}: {
   searchParam: Promise<{ id: string }>;
}) {
   let videoDetails = null;
   let activeVidFormats = [];

   try {
      const response = await fetchVideoInfo((await searchParam).id);
      const { data } = response;

      if (!data || !data.videoDetails || !data.activeVidFormats) {
         console.log("Incomplete response data");
      }

      videoDetails = data.videoDetails;
      activeVidFormats = data.activeVidFormats;
   } catch (error) {
      return (
         <main className="flex flex-col justify-center items-center px-4 py-8 min-h-[100vh]">
            <Navbar />
         </main>
      );
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
               videoDetails={videoDetails}
               activeVidFormats={activeVidFormats}
            />
         </div>
      </main>
   );
}
