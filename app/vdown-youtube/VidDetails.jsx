"use client";

import Image from "next/image";
import React, { Suspense } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Inter } from "@next/font/google";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

const resolutions = ["2K", "1080p", "720p", "480p", "360p", "240p"];
const audio_res = ["128K", "256K"];

const VidDetails = ({ fetchedData }) => {
   const {
      videoDetails: {
         title,
         ownerChannelName,
         filteredFormats,
         thumbnails,
         author,
      },
   } = fetchedData;
   console.log(fetchedData);
   return (
      <Suspense fallback={<Loading />}>
         <main className="max-w-[1000px] py-4">
            <div className="relative flex flex-col md:flex-row items-start gap-2 p-2 customBorder">
               <div className="flex flex-col items-start gap-1 border-none md:border-r-4 border-gray-800">
                  <Image
                     src={(thumbnails.length - 1).url}
                     alt="thumbnail"
                     width={400}
                     height={400}
                     className="rounded-md"
                  />
                  <div className="flex flex-col items-start gap-2">
                     <p className={`${inter.className} font-bold text-black`}>
                        {title}
                        {/* Fast X | Official Trailer 2023 */}
                     </p>
                     <div className="flex items-center gap-1">
                        <Image
                           src={author?.thumbnails[2]?.url}
                           width={40}
                           height={40}
                           alt="avater"
                           className="rounded-full"
                        />
                        <div className="flex flex-col gap-[3px] items-start">
                           <p
                              className={`${inter.className} font-bold text-black text-sm`}
                           >
                              {ownerChannelName}
                              {/* EpicScene */}
                           </p>
                           <p
                              className={`text-gray-600 text-xs ${inter.className}`}
                           >
                              {author?.subscriber_count} subscribers
                              {/* 123K subscribers */}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col items-start gap-1 w-full">
                  <p className={`font-bold text-black ${inter.className}`}>
                     Video Formats
                  </p>
                  <div className="flex flex-wrap gap-1">
                     {resolutions.map((res, i) => (
                        <p
                           key={i}
                           className={`p-2 cursor-pointer bg-black text-gray-200 shadow-md rounded-md ${inter.className} `}
                        >
                           {res}
                        </p>
                     ))}
                  </div>

                  <p className={`font-bold text-black ${inter.className}`}>
                     Audio Formats
                  </p>
                  <div className="flex flex-wrap gap-1">
                     {audio_res.map((mp3, i) => (
                        <p
                           key={i}
                           className={`p-2 cursor-pointer bg-black text-gray-200 shadow-md rounded-md ${inter.className}`}
                        >
                           {mp3}
                        </p>
                     ))}
                  </div>

                  <div className="h-[1px] bg-gray-500 w-full my-1 " />

                  <div className="md:absolute bottom-3 right-2">
                     <button
                        className={`flex items-center p-2 bg-black rounded-md text-gray-200 shadow-md ${inter.className}`}
                     >
                        Download <FaArrowDown />
                     </button>
                  </div>
               </div>
            </div>
         </main>
      </Suspense>
   );
};

export default VidDetails;
