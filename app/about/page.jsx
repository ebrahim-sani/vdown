import React from "react";
import Navbar from "../Navbar";

const page = () => {
   return (
      <div className="">
         <Navbar />
         <div className="flex mt-2 flex-col gap-2 px-2">
            <h2>About Us</h2>
            <p className="max-[768px]:text-sm text-gray-700 md:w-2/5">
               Are you tired of long, complicated processes to download your
               favorite videos from YouTube? Look no further than VDOWN! Our
               top-rated YouTube video downloader offers free HD video services
               with a vast collection of videos at your fingertips.
               <br />
               <br />
               With VDOWN, you&apos;ll never have to struggle to download videos
               again. Our user-friendly, quick, and compact platform makes
               downloading videos a breeze. We take pride in our ability to
               offer a hassle-free experience to all our users.
               <br />
               <br />
               So, why not give VDOWN a try? Our exceptional service will have
               you downloading your favorite videos in no time.
            </p>
         </div>
      </div>
   );
};

export default page;
