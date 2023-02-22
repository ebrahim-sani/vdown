import Image from "next/image";
import React from "react";

const Showcase = ({ pageTitle, title, description, imgUrl, index }) => {
   return (
      <div className="flex flex-col items-center gap-6">
         <h2 className="flex text-xl items-center justify-center">
            {pageTitle}
         </h2>
         <div
            className={`flex w-full md:gap-4 ${
               index % 2 === 1 ? "flex-row-reverse" : "flex-col"
            } md:flex-row items-center justify-between`}
         >
            <div className="flex flex-col items-start gap-1 flex-[0.45]">
               <h3>{title}</h3>
               <p>{description}</p>
            </div>
            <div className="flex w-full items-end flex-[0.55] rounded-sm">
               <Image
                  src={imgUrl}
                  width={500}
                  height={500}
                  alt="showcase_img"
                  className="rounded-sm"
               />
            </div>
         </div>
      </div>
   );
};

export default Showcase;
