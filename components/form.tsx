"use client";

import { ImSpinner8 } from "react-icons/im";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Clipboard, Search } from "lucide-react";

const Form = () => {
   const [targetUrl, setTargetUrl] = useState("");
   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
   const router = useRouter();

   const extractVideoId = (url: string): string | null => {
      try {
         const patterns = [
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&#]+)/, // Standard watch link
            /(?:https?:\/\/)?youtu\.be\/([^?&#]+)/, // Shortened link with optional query parameters
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?&#]+)/, // Embedded link
         ];

         for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
               return match[1];
            }
         }

         return null;
      } catch (error) {
         console.log("Error extracting video ID:", error);
         return null;
      }
   };

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (!targetUrl) return;
      setIsSubmitting(true);

      const videoId = extractVideoId(targetUrl);
      if (videoId) {
         console.log("Extracted Video ID:", videoId);
         router.push(`/${videoId}`);
      } else {
         console.log("Invalid YouTube URL");
      }

      router.push("/");
   };
   const handlePaste = () => {
      navigator.clipboard.readText().then((clipText) => setTargetUrl(clipText));
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTargetUrl(e.target.value);
   };

   return (
      <div className="w-full">
         <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row items-center justify-between gap-3"
         >
            <div className="relative flex items-center flex-1 h-11">
               <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
               <Input
                  type="url"
                  placeholder="Paste your YouTube URL..."
                  value={targetUrl}
                  onChange={handleChange}
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
               className=""
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
   );
};

export default Form;
