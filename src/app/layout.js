import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import Navbar from '@/Components/Navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "o2Plant",
  description: "First Next js Website by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#182015] text-white`}
      >
        {/* <Navbar/> */}
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
