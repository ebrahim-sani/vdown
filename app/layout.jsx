import Footer from "./Footer";
import { Inter } from "@next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         {/* <head />  */}
         <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}`}
         />

         <Script id="ga-script" strategy="lazyOnload">
            {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}', {
      page_path: window.location.pathname,
    });
        `}
         </Script>

         <body className={inter.className}>{children}</body>
         <Footer />
      </html>
   );
}
