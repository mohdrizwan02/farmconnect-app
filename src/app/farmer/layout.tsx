import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/FarmerNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farmconnect-app",
  description: "Farmconnect-app designed for farmers",
};

export default function FarmerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      

    </>
  );
}
