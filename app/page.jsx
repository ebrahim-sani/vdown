import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <main className="flex flex-col justify-between items-center px-[1rem] md:px-[6rem] py-[2rem] min-h-[100vh]">
         <Navbar />

         <div className={styles.center}>
            <Image
               className={styles.logo}
               src="/center_logo1.png"
               alt="Next.js Logo"
               width={250}
               height={200}
               priority
            />
            <div className={styles.thirteen}>
               <Image
                  src="/vdown.png"
                  alt="cloud_img"
                  width={40}
                  height={31}
                  priority
               />
            </div>
         </div>

         <div className={`${styles.grid} gap-2`}>
            <a href="/vdown-rheels" className={`${styles.card} customBorder`}>
               <h2 className={inter.className}>
                  <div className="flex items-center gap-3">
                     <FaInstagram size={30} />
                     Rheels Downloader <span>-&gt;</span>
                  </div>
               </h2>
               <p className={inter.className}>
                  Click and go to Rheels downloader page, it is just simple.
                  Paste your link, click download and boom...its on your device.{" "}
                  <br /> Easy right ;)
               </p>
            </a>

            <a href="/vdown-youtube" className={`${styles.card} customBorder`}>
               <h2 className={inter.className}>
                  <div className="flex items-center gap-3">
                     <FaYoutube size={30} />
                     YouTube Downloader <span>-&gt;</span>
                  </div>
               </h2>
               <p className={inter.className}>
                  Explore the Next.js 13 playground.
               </p>
            </a>

            <a href="/vdown-tiktok" className={`${styles.card} customBorder`}>
               <h2 className={inter.className}>
                  <div className="flex items-center gap-3">
                     <FaTiktok size={30} />
                     TikTok Downloader <span>-&gt;</span>
                  </div>
               </h2>
               <p className={inter.className}>
                  Instantly deploy your Next.js site to a shareable URL with
                  Vercel.
               </p>
            </a>
         </div>
      </main>
   );
}
