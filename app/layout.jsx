import Footer from "./Footer";
import Navbar from "./Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
         <head />
         <body className="">
            {/* <Navbar /> */}
            {children}
            <Footer />
         </body>
      </html>
   );
}
