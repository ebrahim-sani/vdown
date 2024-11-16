import Image from "next/image";
import React from "react";

type pageProps = {
   pageTitle: string | boolean;
   title: string;
   description: string;
   imgUrl: string;
   index: number;
};

const Showcase = ({
   pageTitle,
   title,
   description,
   imgUrl,
   index,
}: pageProps) => {
   return (
      <div className="flex flex-col items-center gap-6">
         <h2 className="flex text-xl items-center justify-center">
            {pageTitle}
         </h2>
         <div
            className={`flex w-full gap-2 flex-col ${
               index === 1
                  ? "md:flex-row-reverse md:gap-10"
                  : "md:flex-row md:gap-4 "
            }  items-center justify-between`}
         >
            <div className="flex max-[768px]:w-full flex-col items-start gap-1 md:flex-[0.45]">
               <h3>{title}</h3>
               <p>{description}</p>
            </div>
            <div className="flex w-full items-end md:flex-[0.55] rounded-sm">
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
