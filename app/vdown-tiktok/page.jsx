import React from "react";
import { fetchData } from "@/Utils/FetchData";
import Form from "./Form";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../page.module.css";

import { FYoutube } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";
import Navbar from "../Navbar";

const inter = Inter({ subsets: ["latin"] });

const menus = ["about", "Privacy Policy", "terms & conditions"];

let url = "https://youtu.be/mhLU9LZuy8Q";

async function YtDown({ searchParams }) {
   let fetchedData;
   if (searchParams.term) {
      const result = await fetchData(searchParams.term);
      fetchedData = result;
   }

   // const { videoDetails, filteredFormats } = fetchedData;
   // const {
   //    title,
   //    viewCount,
   //    publishDate,
   //    ownerChannelName,
   //    thumbnails,
   //    author: { subscriber_count, avatar },
   // } = videoDetails;

   // console.log(fetchedData.videoDetails.likes);

   return (
      <main className="flex flex-col justify-between items-center px-[1rem] md:px-[6rem] py-[2rem] min-h-[100vh]">
         <Navbar />

         <div className="flex md:w-[500px] justify-center flex-col items-center relative py-[4rem] gap-8">
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
                  <Image
                     src="/vdown.png"
                     alt="cloud_img"
                     width={40}
                     height={31}
                     priority
                  />
               </div>
            </div>

            <div className="flex w-full flex-col items-center gap-1">
               <Form />
               <p className="text-center max-[768px]:px-1 text-xs">
                  By clicking <span className="font-semibold">Get Video</span>{" "}
                  you accept our{" "}
                  <span className="font-semibold hover:underline hover:cursor-pointer">
                     Terms & Conditions
                  </span>
               </p>
            </div>
         </div>

         <div className=""></div>
      </main>
      // <div className="h-[100vh]">
      //    {!fetchedData ? "Hello" : fetchedData.videoDetails.title}

      // </div>
   );
}

export default YtDown;
