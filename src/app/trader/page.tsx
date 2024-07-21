"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import ChatbotSection from "@/components/Chatbotsection";

import Carousel from "@/components/Homecarousel";

import Newssection from "@/components/traderNewssection";
import Marketplace from "@/components/TraderMarketplacesection";


export default function Home() {
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
      {/* <button className="m-6" onClick={getuserdata}>
        getdetails
      </button> */}
      
      <Newssection/>
    </>
  );
}
