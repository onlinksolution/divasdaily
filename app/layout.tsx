import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";

export const metadata: Metadata = {
  title: "Divas Daily",
  description: "Read about celebrities gossip and news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-bodyColor1 to-bodyColor2">
        <Navbar />
        {children}
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
