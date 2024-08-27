import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";

export const metadata: Metadata = {
  title: "Divas Daily",
  description: "Stay updated with the latest celebrity gossip and news about your favorite divas in Hollywood and beyond. From red carpet looks to personal lives, we bring you the hottest scoops and trending stories daily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script type='text/javascript' src='//pl24127065.highratecpm.com/99/ad/50/99ad503d3d6c8f8518201c09e97a48b3.js'></script> */}
      </head>
      <body className="bg-gradient-to-r from-bodyColor1 to-bodyColor2">
        <Navbar />
        {children}
        <Footer />
        <ScrollUp />

        <script type='text/javascript' src='//pl24127246.highratecpm.com/8e/d5/f2/8ed5f24b1532cc4097d5ca9cfd09a541.js'></script>
      </body>
    </html>
  );
}
