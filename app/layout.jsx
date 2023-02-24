import Footer from "./Footer";
// import Navbar from "./Navbar";
import { Inter } from "@next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         {/* <head />  */}

         <head />
         <body className={inter.className}>
            {/* <Navbar /> */}
            {children}
         </body>
         <Footer />
      </html>
   );
}
