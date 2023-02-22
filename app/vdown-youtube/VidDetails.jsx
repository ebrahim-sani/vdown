"use client";

import Image from "next/image";
import React, { Suspense, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Inter } from "@next/font/google";
import Loading from "./loading";
import millify from "millify";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const VidDetails = ({ videoDetails, activeAudFormats, activeVidFormats }) => {
   const [downUrl, setDownUrl] = useState("");

   const { title, ownerChannelName, thumbnails, author } = videoDetails;

   return (
      <>
         <Suspense fallback={<Loading />}>
            <main className="max-w-[1000px] py-4">
               <div className="relative flex flex-col md:flex-row items-start gap-2 p-2 customBorder">
                  <div className="flex flex-[0.65] flex-col items-start gap-1 border-none md:border-r-4 border-gray-800">
                     <Image
                        src={thumbnails[thumbnails.length - 1].url}
                        alt="thumbnail"
                        width={500}
                        height={500}
                        className="rounded-md w-full"
                     />
                     <div className="flex flex-col items-start gap-2">
                        <p
                           className={`${inter.className} font-bold text-black`}
                        >
                           {title}
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
                              </p>
                              <p
                                 className={`text-gray-600 text-xs ${inter.className}`}
                              >
                                 {millify(author?.subscriber_count)} subscribers
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-[0.35] flex-col items-start gap-1 w-full">
                     <p className={`font-bold text-black ${inter.className}`}>
                        Select Formats
                     </p>
                     <div className="flex flex-wrap gap-1">
                        {activeVidFormats.map((vid, i) => (
                           <p
                              key={i}
                              className={`p-2 cursor-pointer bg-black text-gray-200 shadow-md rounded-md ${inter.className} `}
                              onClick={() => setDownUrl(vid.url)}
                           >
                              {vid.qualityLabel}
                           </p>
                        ))}
                     </div>

                     {/* <p className={`font-bold text-black ${inter.className}`}>
                        Audio Formats
                     </p>
                     <div className="flex flex-wrap gap-1">
                        {activeAudFormats.map((aud, i) => (
                           <p
                              key={i}
                              className={`p-2 cursor-pointer bg-black text-gray-200 shadow-md rounded-md ${inter.className} `}
                              onClick={() => setDownUrl(aud.url)}
                           >
                              {aud.audioBitrate}
                           </p>
                        ))}
                     </div> */}

                     <div className="h-[1px] bg-gray-500 w-full my-1 " />

                     <div className="md:absolute bottom-3 right-2">
                        <Link
                           href={`${downUrl}`}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <button
                              className={`flex items-center p-2 bg-black rounded-md text-gray-200 shadow-md ${inter.className}`}
                           >
                              Download <FaArrowDown />
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </main>
         </Suspense>
      </>
   );
};

export default VidDetails;
