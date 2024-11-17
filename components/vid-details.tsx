"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import millify from "millify";
import { VideoDetails } from "@/lib/types/videoDetails";
import { VideoFormat } from "@/lib/types/activeVidFormat";
import { Button } from "./ui/button";

interface VidDetailsProps {
   videoDetails: VideoDetails;
   activeVidFormats: VideoFormat[];
}

const VidDetails = ({ videoDetails, activeVidFormats }: VidDetailsProps) => {
   const [downUrl, setDownUrl] = useState<string>("");

   const { title, ownerChannelName, thumbnails, author } = videoDetails;

   const handleDownload = async (url: string) => {
      if (!downUrl) return;

      try {
         const res = await fetch("/api/video", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ videoUrl: url, title }),
         });

         if (!res.ok) {
            throw new Error("Failed to download video");
         }

         // Create a blob and force download
         const blob = await res.blob();
         const blobUrl = URL.createObjectURL(blob);
         const a = document.createElement("a");
         a.href = blobUrl;
         a.download = `${title.replace(/[^\w\s-]/g, "")}.mp4`;
         a.click();
         URL.revokeObjectURL(blobUrl); // Clean up the URL object
      } catch (error) {
         console.error("Download error:", error);
      }
   };

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
                  {downUrl ? (
                     <Button
                        onClick={() => handleDownload(videoDetails.video_url)}
                     >
                        Download <FaArrowRight />
                     </Button>
                  ) : (
                     <Button disabled>
                        Download <FaArrowRight />
                     </Button>
                  )}
               </div>
            </div>
         </div>
      </main>
   );
};

export default VidDetails;
