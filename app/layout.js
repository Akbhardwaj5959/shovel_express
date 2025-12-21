// import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/Whatsapp";
import CallingFloat from "./components/calling";

// const outfit = Outfit({
//   subsets: ["latin"], weight:["400","500","600","700"]
// });

// const ovo = Ovo({
//   subsets: ["latin"], weight:["400"]
// });

export const metadata = {
  title: "The Shovel Express",
  description: "Snow Removal Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased leading-8 overflow-x-hidden `}
      >
        <Navbar />
        <WhatsappFloat/>
        <CallingFloat/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
