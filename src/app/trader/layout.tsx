import Navbar from "@/components/TraderNavbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farmconnect-app",
  description: "Farmconnect-app designed for farmers",
};

export default function TraderLayout({
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
