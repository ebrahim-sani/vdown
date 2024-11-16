"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import millify from "millify";
import Link from "next/link";

interface VideoDetails {
   title: string;
   ownerChannelName: string;
   thumbnails: { url: string }[];
   author: {
      thumbnails: { url: string }[];
      subscriber_count: number;
   };
}

interface VideoFormat {
   itag: number;
   url: string;
   qualityLabel: string;
   mimeType: string;
   hasAudio: boolean;
   hasVideo: boolean;
}

interface VidDetailsProps {
   videoDetails: VideoDetails;
   activeVidFormats: VideoFormat[];
}

const VidDetails = ({ videoDetails, activeVidFormats }: VidDetailsProps) => {
   const [downUrl, setDownUrl] = useState<string>("");

   const { title, ownerChannelName, thumbnails, author } = videoDetails;

   return (
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
                  <p className="font-bold text-black">{title}</p>
                  <div className="flex items-center gap-1">
                     <Image
                        src={author?.thumbnails[2]?.url}
                        width={40}
                        height={40}
                        alt="avatar"
                        className="rounded-full"
                     />
                     <div className="flex flex-col gap-[3px] items-start">
                        <p className="font-bold text-black text-sm">
                           {ownerChannelName}
                        </p>
                        <p className="text-gray-600 text-xs">
                           {millify(author?.subscriber_count)} subscribers
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex flex-[0.35] flex-col items-start gap-1 w-full">
               <p className="font-bold text-black">Select Formats</p>
               <div className="flex w-full flex-wrap gap-1">
                  {activeVidFormats.map((vid: VideoFormat, i: number) => (
                     <ul
                        key={i}
                        className="flex flex-1 flex-row w-full items-center gap-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600"
                     >
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                           <div className="flex items-center pl-3">
                              <input
                                 id={`radio-${vid.itag}`}
                                 type="radio"
                                 value={vid.url}
                                 onClick={() => setDownUrl(vid.url)}
                                 name="list-radio"
                                 className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black shadow-sm"
                              />
                              <label className="w-1/2 py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                 {vid.qualityLabel}
                              </label>
                           </div>
                        </li>
                     </ul>
                  ))}
               </div>

               <div className="h-[1px] bg-gray-500 w-full my-1" />

               <div className="md:absolute bottom-3 right-2">
                  <Link
                     href={downUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <button
                        className="flex items-center p-2 bg-black rounded-md text-gray-200 shadow-md"
                        disabled={!downUrl}
                     >
                        Get Video <FaArrowRight />
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </main>
   );
};

export default VidDetails;
