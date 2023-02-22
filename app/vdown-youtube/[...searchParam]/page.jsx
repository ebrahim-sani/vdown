import Form from "../Form";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Navbar from "@/app/Navbar";
import VidDetails from "../VidDetails";
import styles from "../../page.module.css";
import { Inter } from "@next/font/google";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });

const page = async ({ params }) => {
   // console.log(params.searchParam[2]);

   const result = await fetch(
      `https://vdown-api.vercel.app/api/get-video-info/${params.searchParam[2]}`,
   );
   const response = await result.json();

   const {
      data: { videoDetails, activeVidFormats, activeAudFormats },
   } = response;
   // console.log(response.data);

   if (!response) {
      return <Error />;
   } else {
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
                     By clicking{" "}
                     <span className="font-semibold">Get Video</span> you accept
                     our{" "}
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
   }
};

export default page;
