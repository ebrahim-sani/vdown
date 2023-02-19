"use client";

import Image from "next/image";
import React, { Suspense } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Inter } from "@next/font/google";
import Loading from "./loading";
import millify from "millify";
import useDownloader from "react-use-downloader";
import ytdl from "ytdl-core";
import { useRouter } from "next/navigation";
import downloadVideo from "@/lib/GetVideo";

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
         video_url,
      },
      formats,
   } = fetchedData;

   const { size, elapsed, percentage, download, cancel, error, isInProgress } =
      useDownloader({ mode: "no-cors" });

   const videoFormat = ytdl.chooseFormat(formats, { quality: "135" });

   console.log(fetchedData);

   return (
      <Suspense fallback={<Loading />}>
         <main className="max-w-[1000px] py-4">
            <div className="relative flex flex-col md:flex-row items-start gap-2 p-2 customBorder">
               <div className="flex flex-[0.5] flex-col items-start gap-1 border-none md:border-r-4 border-gray-800">
                  <Image
                     src={thumbnails[thumbnails.length - 1].url}
                     alt="thumbnail"
                     width={400}
                     height={400}
                     className="rounded-md w-full"
                  />
                  <div className="flex flex-col items-start gap-2">
                     <p className={`${inter.className} font-bold text-black`}>
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
               <div className="flex flex-[0.5] flex-col items-start gap-1 w-full">
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
                        // onClick={() => download(fileUrl, "filename.mp4")}
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

const fileUrl =
   "https://rr1---sn-huoob-5c8s.googlevideo.com/videoplayback?expire=1676630281&ei=qQTvY57sJYO8W6-SooAE&ip=197.210.71.78&id=o-AHcSAJNrfApsnoFXOtgqX9xOTKD94KFZ-saQ-dhTewey&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&mh=My&mm=31%2C29&mn=sn-huoob-5c8s%2Csn-avn7ln7e&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=306250&vprv=1&mime=video%2Fmp4&ns=Jv3Rpzyn5wVlB8WZpe8CYooL&gir=yes&clen=45351371&dur=801.366&lmt=1676606216915290&mt=1676607904&fvip=4&keepalive=yes&fexp=24007246&c=WEB&txp=4432434&n=T-hYsShI20jXjw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALxvWbVnw3M9CIvbACqTWu8MNFJvv9G4oqGCK4kW-fCqAiBHaDqK8H_ypvADfJabtOEZuIRRPAZ8540SC6Ya5kuqwg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhALQqyRayWSP6MVe4OgLM4DiC9tXuLBqkgjSvJmEuATpyAiBlciy-orR0GMGZgDd54jbn6OSEoKX-zvj8uwY6UM42nQ%3D%3D";
