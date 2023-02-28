import React from "react";
import Navbar from "../Navbar";
import TermContent from "./TermContent";

const page = () => {
   return (
      <main className="flex flex-col justify-between px-[1rem] md:px-[6rem] py-[2rem] min-h-[100vh]">
         <Navbar />
         <TermContent />
      </main>
   );
};

export default page;
