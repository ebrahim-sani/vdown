import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
   return (
      <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
         <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div className="flex flex-[0.5] justify-center items-center ">
               <Link href="/">
                  <Image
                     src="/vdown_logo.png"
                     width={500}
                     height={500}
                     alt="logo"
                     className="w-36"
                  />
               </Link>
            </div>

            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
               <FooterLink title="About" url="about" />
               <FooterLink title="Privacy & Policy" url="privacy" />
               <FooterLink title="Terms & Condition" url="terms" />
            </div>
         </div>

         <div className="flex justify-center items-center flex-col mt-5">
            <Right title="Built by" />
            <Link
               href="https://www.linkedin.com/in/ebrahim-sani"
               target="_blank"
            >
               <Right
                  customStyle="underline lg:hover:underline"
                  title="ebrahim sani"
               />
            </Link>
         </div>
         <d className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
         <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <Right title="&copy;vdown 2023" />
            <Right title="All Rights Reserved" />
         </div>
      </div>
   );
};

export default Footer;

const Right = ({ title, customStyle }) => (
   <p className={`text-sm text-center ${customStyle}`}>{title}</p>
);

const FooterLink = ({ url, title }) => {
   return (
      <Link href={`/${url}`}>
         <p className="mx-2 max-[768px]:text-sm cursor-pointer">{title}</p>
      </Link>
   );
};
