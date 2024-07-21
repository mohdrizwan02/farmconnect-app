"use client";
import React, { useState, useEffect, useRef, FormEvent } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaArrowDown, FaArrowRight, FaSearch } from "react-icons/fa";
import { RiCloseLine, RiRobot3Fill } from "react-icons/ri";
import { FaShop } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const [searchbar, setSearchbar] = useState(false);
  const [searchinput, setsearchinput] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setNav(false);
    }
  };

  const handleLinkClick = () => {
    setNav(false);
  };
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setSearchbar(false);
      }
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handlesearch = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchinput);
  };
  const router = useRouter();
  const logout = async () => {
    try {
      console.log("logging out...");
      const response = await axios.get("/api/users/logout");
      console.log(response.data.message);
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-between items-center top-0 z-50 h-24 mx-auto px-4 text-white bg-black">
      <div className="flex items-center justify-between w-full sm:w-auto">
        {searchbar ? (
          <div className="flex items-center">
            <form onSubmit={handlesearch} className="flex items-center">
              <input
                className="appearance-none border-2 border-gray-300 hover:border-gray-400 transition-colors rounded-md py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                id="search"
                type="text"
                onChange={(e) => {
                  setsearchinput(e.target.value);
                }}
                placeholder="Search..."
              />
              <button
                type="submit"
                className="ml-2 rounded-[50%] p-2 text-black bg-white"
              >
                <FaArrowRight />
              </button>
            </form>
          </div>
        ) : (
          <a
            className={`${
              searchbar ? "hidden" : ""
            } flex title-font font-medium items-center text-gray-900`}
            href="./"
          >
            <Image
              className="w-auto h-10"
              src="/logo.png"
              alt="Logo"
              width={100}
              height={30}
              style={{ filter: "invert(100%)" }}
            />
            <span className="ml-3 text-xl text-white">FARM CONNECT</span>
          </a>
        )}
      </div>
      <div className="hidden sm:flex items-center mx-auto">
        <form onSubmit={handlesearch} className="flex items-center">
          <input
            className="appearance-none border-2 border-gray-300 hover:border-gray-400 transition-colors rounded-md py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setsearchinput(e.target.value);
            }}
          />
          <button
            type="submit"
            className="ml-2 rounded-[50%] p-2 items-center text-black bg-white"
          >
            <FaArrowRight className="" />
          </button>
        </form>
      </div>
      <ul className="hidden items-center gap-5 lg:flex">
        <a href="../../farmer">
          <li className="px-2 py-1 rounded-md hover:cursor-pointer hover:bg-gray-100 active:bg-green-500 hover:text-black">
            Home
          </li>
        </a>
        <a href="../../farmer/about-us">
          <li className="px-2 py-1 rounded-md hover:cursor-pointer hover:bg-gray-100 active:bg-green-500 hover:text-black">
            About
          </li>
        </a>
        <div className="relative group">
          <div className="flex px-2 hover:bg-white hover:text-black items-center active:bg-green-500 hover:cursor-pointer rounded-md gap-2" onClick={handleDropdown}>
            <li
              onClick={handleDropdown}
              className=" py-1 rounded-md hover:rounded-none    "
            >
              Services
            </li>
            {dropdownOpen ? (<FaArrowDown />) :
            (<FaArrowRight />)}
          </div>
          {dropdownOpen && (
            <ul className="absolute flex mt-1 z-50 flex-row gap-5 bg-white p-4 rounded-lg shadow-lg  right-0">
              <a href="../../farmer/marketplace">
                <li className="flex flex-col items-center px-4 py-2  rounded-md cursor-pointer">
                  <span className="inline-block rounded-lg bg-white hover:bg-green-600 hover:text-white text-black p-3">
                    <FaShop className="h-6 w-6" />
                  </span>
                  <span className="text-black mt-1">Marketplace</span>
                </li>
              </a>
              <a href="../../farmer/news">
                <li className="flex flex-col items-center px-4 py-2  rounded-md cursor-pointer">
                  <span className="inline-block rounded-lg bg-white hover:bg-green-600 hover:text-white text-black p-3">
                    <IoNewspaperSharp className="h-6 w-6" />
                  </span>
                  <span className="text-black mt-1">News</span>
                </li>
              </a>
              <a href="#">
                <li className="flex flex-col items-center px-4 py-2  rounded-md cursor-pointer">
                  <span className="inline-block rounded-lg bg-white hover:bg-green-600 hover:text-white text-black p-3">
                    <RiRobot3Fill className="h-6 w-6" />
                  </span>
                  <span className="text-black mt-1">Chatbot</span>
                </li>
              </a>
            </ul>
          )}
        </div>
        <a href="../../farmer/contact-us">
          <li className="px-2 py-1 rounded-md hover:cursor-pointer  hover:bg-gray-100 active:bg-green-500 hover:text-black">
            Contact
          </li>
        </a>
        <div
            onClick={logout}
            className="p-2 hidden px-2 md:flex items-center gap-2 bg-black text-white hover:text-black cursor-pointer hover:bg-white rounded-lg"
          >
            <MdLogout />
            <button>logout</button>
          </div>
      </ul>

      <div className="flex items-center gap-4">
        {!searchbar ? (
          <div
            onClick={() => setSearchbar(true)}
            className="sm:hidden rounded-full cursor-pointer p-2 bg-white text-black"
          >
            <FaSearch />
          </div>
        ) : (
          <div
            onClick={() => setSearchbar(false)}
            className="md:hidden rounded-full cursor-pointer p-2 bg-white text-black"
          >
            <RiCloseLine />
          </div>
        )}
        <div onClick={handleNav} className="block lg:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <ul
        ref={navRef}
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50 flex flex-col justify-between"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div>
          <a
            className="flex title-font font-medium items-center text-gray-900 my-4 ml-4"
            href="#"
          >
            <Image
              className="w-auto h-10"
              src="/logo.png"
              alt="Logo"
              width={100}
              height={30}
              style={{ filter: "invert(100%)" }}
            />
            <span className="ml-3 text-xl text-white">FARM CONNECT</span>
          </a>
          <a href="../../farmer" onClick={handleLinkClick}>
            <li className="p-4 border-b hover:cursor-pointer border-gray-600">
              Home
            </li>
          </a>
          <a href="../../farmer/about-us" onClick={handleLinkClick}>
            <li className="p-4 border-b hover:cursor-pointer border-gray-600">
              About
            </li>
          </a>
          <div className="relative">
            <li
              onClick={handleDropdown}
              className="p-4 border-b hover:cursor-pointer border-gray-600"
            >
              Services
            </li>
            {dropdownOpen && (
              <ul className="bg-[#000300] border border-gray-600 rounded-lg shadow-lg mt-2 mx-3">
                <a href="../../farmer/marketplace">
                  <li className="flex flex-row items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    <span className="inline-block rounded-lg bg-white hover:bg-green-600 hover:text-white text-black p-3">
                      <FaShop className="h-6 w-6" />
                    </span>
                    <span className="ml-2 text-white">Marketplace</span>
                  </li>
                </a>
                <a href="../../farmer/news">
                  <li className="flex flex-row items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    <span className="inline-block rounded-lg bg-white hover:bg-green-600 hover:text-white text-black p-3">
                      <IoNewspaperSharp className="h-6 w-6" />
                    </span>
                    <span className="ml-2 text-white">News</span>
                  </li>
                </a>
                <a href="../../farmer/">
                  <li className="flex flex-row items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    <span className="inline-block rounded-lg bg-white hover:bg-green-600 hover:text-white text-black p-3">
                      <RiRobot3Fill className="h-6 w-6" />
                    </span>
                    <span className="ml-2 text-white">Chatbot</span>
                  </li>
                </a>
              </ul>
            )}
          </div>
          <a href="../../farmer/contact-us" onClick={handleLinkClick}>
            <li className="p-4 border-b hover:cursor-pointer border-gray-600">
              Contact
            </li>
          </a>
        </div>
        <div className="mb-4 flex flex-row justify-around gap-5 items-center">
          <div
            onClick={logout}
            className="p-2 px-2 flex items-center gap-2 bg-black text-white hover:text-black cursor-pointer hover:bg-white rounded-lg"
          >
            <MdLogout />
            <button>logout</button>
          </div>
        </div>
      </ul>

    </div>
  );
}
