"use client";

import Image from "next/image";
import React, { Suspense } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Inter } from "@next/font/google";
import Loading from "./loading";
import millify from "millify";
import useDownloader from "react-use-downloader";

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
   const { size, elapsed, percentage, download, cancel, error, isInProgress } =
      useDownloader({ mode: "no-cors" });

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
                        onClick={() => download(fileUrrl, filename)}
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
   "https://rr1---sn-avn7ln7l.googlevideo.com/videoplayback?expire=1676624208&ei=8OzuY7HAGpLz0wWJx66YBQ&ip=105.112.114.109&id=o-AEhE7ZsYMEnZlrnrJ4FUUv75lu3LGWHOY7ipoDDO0Bz-&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&vprv=1&mime=video%2Fwebm&ns=1WzN_PwZi1OZThG1OkHZAsoL&gir=yes&clen=853459410&dur=801.367&lmt=1676462357346563&keepalive=yes&fexp=24007246&c=WEB&txp=3319224&n=rH2x5hVw1ZJ6Zg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgXrze6ly4P0j1i6dR3KZ7WuRx24Lk0jwUlDaJsK9sAmwCICw3NNOnCz3hFZic0AyTe9FfClt3p9dGvZoveo28a1zU&redirect_counter=1&cm2rm=sn-5pguxaob-5c8l7l&req_id=2affec29320da3ee&cms_redirect=yes&cmsv=e&mh=My&mm=29&mn=sn-avn7ln7l&ms=rdu&mt=1676602871&mv=m&mvi=1&pl=24&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAJI5YOf3Vliia4klVbYVPhraThvjbKAKwAdxRgRywsbzAiEAuY44OXQBXTUfewjhQ9fJMMl7fD7KJIvM7OVr06EgCH0%3D";

const fileUrrl =
   "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_%D1%96_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81_%D0%B2_%D0%BF%D1%80%D0%BE%D0%BC%D1%96%D0%BD%D1%8F%D1%85_%D0%B2%D1%80%D0%B0%D0%BD%D1%96%D1%88%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg";
const filename = "beautiful-carpathia.jpg";
