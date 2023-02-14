"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Form = () => {
   const [targetUrl, setTargetUrl] = useState("");
   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!targetUrl) return;
      router.push(`/youtube?term=${targetUrl}`);
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
               className={`flex items-center customBorder flex-1 ${
                  targetUrl && "shadow-sm"
               }`}
            >
               <div className="flex items-center justify-center h-[20px] w-[20px]">
                  <FaSearch className="pl-[6px] text-gray-400 w-full" />
               </div>
               <input
                  placeholder="Search tiktok..."
                  type="text"
                  value={targetUrl}
                  onChange={handleChange}
                  className="p-2 outline-none bg-transparent flex-1"
               />
            </div>
            <button
               className={`max-[768px]:w-full bg-black p-2 rounded-lg cursor-pointer text-gray-200 ${
                  !targetUrl && "hover:cursor-not-allowed"
               }`}
               type="submit"
               disabled={!targetUrl}
            >
               Get Video
            </button>
         </form>
      </div>
   );
};

export default Form;
