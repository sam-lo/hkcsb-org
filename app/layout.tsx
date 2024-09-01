import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Carpe Symphonic Band",
  description: "Live a little",
};

export default function RootLayout({children}: LayoutProps) {
  return (
    <html lang="en">
    <body>
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}