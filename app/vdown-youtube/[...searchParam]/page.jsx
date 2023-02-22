import Form from "../Form";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Navbar from "@/app/Navbar";
import VidDetails from "../VidDetails";
import styles from "../../page.module.css";
import { Inter } from "@next/font/google";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });

const page = async ({ params: { searchParam } }) => {
   // console.log(searchParam);

   const result = await fetch(
      `https://vdown-api.vercel.app/api/get-video-info/${searchParam[2]}`,
      {
         headers: {
            "Content-Type": "application/json",
         },
         cache: "no-store",
      },
   )
      .then((res) => {
         const contentType = res.headers.get("content-type");

         if (contentType.includes("text/html")) {
            return res.text().then((html) => JSON.stringify({ html }));
         }
         return res;
      })
      .then((res) => {
         // Set the content-type header to application/json
         const newHeaders = new Headers(res.headers);
         newHeaders.set("content-type", "application/json");

         // Create a new Response object with the updated headers and body
         const newResponse = new Response(res.body, {
            status: res.status,
            statusText: res.statusText,
            headers: newHeaders,
         });

         return newResponse;
      });

   const response = await result.json();
   // console.log(response);

   if (!response) {
      throw new Error();
   }

   const {
      data: { videoDetails, activeVidFormats, activeAudFormats },
   } = response;
   // console.log(activeVidFormats);
   // console.log(activeAudFormats);

   return (
      <main className="flex flex-col justify-between items-center px-[1rem] md:px-[6rem] py-[2rem] min-h-[100vh]">
         <Navbar />

         <div className="flex md:w-[500px] justify-center flex-col items-center relative py-[2rem] gap-8">
            <div className="flex items-center">
               <Image
                  className={styles.logo}
                  src="/center_logo1.png"
                  alt="Next.js Logo"
                  width={250}
                  height={200}
                  priority
               />
               <div className={styles.thirteen}>
                  <FaYoutube size={30} />
               </div>
            </div>

            <div className="flex w-full flex-col items-center gap-1">
               <Form />
               <p
                  className={`text-center max-[768px]:px-1 text-xs ${inter.className}`}
               >
                  By clicking <span className="font-semibold">Get Video</span>{" "}
                  you accept our{" "}
                  <span className="font-semibold underline hover:cursor-pointer">
                     Terms & Conditions
                  </span>
               </p>
            </div>
         </div>

         <div className="">
            {response && (
               <VidDetails
                  videoDetails={videoDetails}
                  activeVidFormats={activeVidFormats}
                  activeAudFormats={activeAudFormats}
               />
            )}
         </div>

         {/* <VdownPages /> */}
      </main>
   );
};

export default page;
