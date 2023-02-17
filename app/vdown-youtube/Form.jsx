"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiPaste } from "react-icons/bi";
import useDownloader from "react-use-downloader";

const Form = () => {
   const [targetUrl, setTargetUrl] = useState("");
   const router = useRouter();
   const { size, elapsed, percentage, download, cancel, error, isInProgress } =
      useDownloader({ mode: "no-cors" });

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!targetUrl) return;
      router.push(`/vdown-youtube?term=${targetUrl}`);
   };

   const handlePaste = () => {
      navigator.clipboard.readText().then((clipText) => setTargetUrl(clipText));
   };

   const handleChange = (e) => {
      setTargetUrl(e.target.value);
   };
   return (
      <div className="w-full">
         <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row items-center justify-between gap-3"
         >
            <div
               className={`flex items-center customBorder flex-1 w-full relative ${
                  targetUrl && "shadow-sm"
               }`}
            >
               <div className="flex items-center justify-center h-[20px] w-[20px]">
                  <FaSearch className="pl-[6px] text-gray-400 w-full" />
               </div>
               <input
                  placeholder="Paste your youtube url..."
                  type="url"
                  value={targetUrl}
                  onChange={handleChange}
                  className="p-2 outline-none bg-transparent flex-1 w-full"
               />
               <div
                  onClick={handlePaste}
                  className="flex items-center justify-center h-[20px] w-[20px] absolute right-2 cursor-pointer"
               >
                  <BiPaste size={30} className="text-gray-700 w-full" />
               </div>
            </div>
            <button
               className={`max-[767px]:w-full bg-black p-2 rounded-lg cursor-pointer text-gray-200 ${
                  !targetUrl && "hover:cursor-not-allowed"
               }`}
               type="submit"
               disabled={!targetUrl}
               onClick={() => download(fileUrrl, filename)}
            >
               Get Video
            </button>
         </form>
      </div>
   );
};

export default Form;

const fileUrrl =
   "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_%D1%96_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81_%D0%B2_%D0%BF%D1%80%D0%BE%D0%BC%D1%96%D0%BD%D1%8F%D1%85_%D0%B2%D1%80%D0%B0%D0%BD%D1%96%D1%88%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg";
const filename = "beautiful-carpathia.jpg";
