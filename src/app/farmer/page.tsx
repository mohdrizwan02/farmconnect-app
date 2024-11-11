"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import ChatbotSection from "@/components/farmerChatbotsection";

import Carousel from "@/components/Homecarousel";

import Newssection from "@/components/farmerNewssection";
import Marketplace from "@/components/FarmerMarketplacesection";



export default function farmerHome() {
  const [userdata, setuserdata] = useState("nothing");

  const router = useRouter();

  const getuserdata = async () => {
    const res = await axios.get("/api/users/userdata");
    console.log(res.data.data);
  };

  return (
    <>
      
    <Carousel/>
    <Marketplace/>
     
      <ChatbotSection/>
      
      
      <Newssection/>
    </>
  );
}
