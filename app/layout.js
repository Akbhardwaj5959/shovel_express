// import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/Whatsapp";

// const outfit = Outfit({
//   subsets: ["latin"], weight:["400","500","600","700"]
// });

// const ovo = Ovo({
//   subsets: ["latin"], weight:["400"]
// });

export const metadata = {
  title: "the shovel express",
  description: "snow removal services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased leading-8 overflow-x-hidden `}
      >
        <Navbar />
        <WhatsappFloat/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
