"use client";

import React, { useState, useRef, FormEvent, useEffect } from "react";
import { ImSpinner8 } from "react-icons/im";
import { Clipboard, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import VidDetails from "./vid-details";
import { VideoFormat } from "@/lib/types/activeVidFormat";
import { VideoDetails } from "@/lib/types/videoDetails";

type ApiResponse = {
   videoDetails: VideoDetails;
   activeVidFormats: VideoFormat[];
};

const Form = () => {
   const [targetUrl, setTargetUrl] = useState<string>("");
   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
   const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
   const [activeVidFormats, setActiveVidFormats] = useState<VideoFormat[]>([]);
   const vidDetailsRef = useRef<HTMLDivElement | null>(null);

   // Extract Video ID from the YouTube URL
   const extractVideoId = (url: string): string | null => {
      const patterns = [
         /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&#]+)/, // Standard watch link
         /(?:https?:\/\/)?youtu\.be\/([^?&#]+)/, // Shortened link
         /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?&#]+)/, // Embedded link
      ];

      for (const pattern of patterns) {
         const match = url.match(pattern);
         if (match && match[1]) return match[1];
      }

      console.log("Invalid YouTube URL");
      return null;
   };

   // Auto-scroll to VidDetails component if there is video details
   useEffect(() => {
      if (videoDetails && vidDetailsRef.current) {
         vidDetailsRef.current.scrollIntoView({ behavior: "smooth" });
      }
   }, [videoDetails]);

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      if (!targetUrl) return;
      setIsSubmitting(true);

      const videoId = extractVideoId(targetUrl);
      console.log("Extracted vid id ->", videoId);

      if (videoId) {
         try {
            const response = await fetch("/api/get-vid-details", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({ videoId }),
            });

            // console.log(response);

            if (!response.ok) throw new Error("Failed to fetch video details");

            const data: ApiResponse = await response.json();
            setVideoDetails(data.videoDetails);
            setActiveVidFormats(data.activeVidFormats);

            console.log("Video details fetched:", data);
         } catch (error) {
            console.error("Error fetching video details:", error);
         } finally {
            setIsSubmitting(false);
         }
      } else {
         console.log("Invalid YouTube URL");
         setIsSubmitting(false);
      }
   };

   // Handle clipboard paste
   const handlePaste = async () => {
      try {
         const clipText = await navigator.clipboard.readText();
         setTargetUrl(clipText);
      } catch (error) {
         console.error("Failed to read clipboard:", error);
      }
   };

   return (
      <>
         <div className="flex w-full flex-col items-center gap-1">
            <div className="w-full">
               {/* Search Form */}
               <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col sm:flex-row items-center justify-between gap-3"
               >
                  <div className="relative flex items-center flex-1 h-11 w-full">
                     <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                     <Input
                        type="url"
                        placeholder="Paste your YouTube URL..."
                        value={targetUrl}
                        onChange={(e) => setTargetUrl(e.target.value)}
                        className="pl-10 pr-10 w-full"
                     />
                     <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 hover:bg-transparent"
                        onClick={handlePaste}
                     >
                        <Clipboard className="h-4 w-4 text-muted-foreground" />
                     </Button>
                  </div>
                  <Button
                     className="max-sm:flex-1 max-sm:w-full"
                     type="submit"
                     disabled={!targetUrl || isSubmitting}
                  >
                     {isSubmitting ? (
                        <ImSpinner8 className="text-white animate-spin" />
                     ) : (
                        "Search Video"
                     )}
                  </Button>
               </form>
            </div>
            <p className="text-center max-[768px]:px-1 text-xs">
               By clicking <span className="font-semibold">Get Video</span> you
               accept our{" "}
               <span className="font-semibold underline hover:cursor-pointer">
                  Terms & Conditions
               </span>
            </p>
         </div>

         {/* Show this component only if there's Video Details */}
         {videoDetails && (
            <div ref={vidDetailsRef}>
               <VidDetails
                  activeVidFormats={activeVidFormats}
                  videoDetails={videoDetails}
               />
            </div>
         )}
      </>
   );
};

export default Form;
