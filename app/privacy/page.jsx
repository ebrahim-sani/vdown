import Link from "next/link";
import React from "react";
import Navbar from "../Navbar";
import PrivacyContent from "./PrivacyContent";

const page = () => {
   return (
      <main className="flex flex-col justify-between px-[1rem] md:px-[6rem] py-[2rem] min-h-[100vh]">
         <Navbar />
         <PrivacyContent />
      </main>
   );
};

export default page;
