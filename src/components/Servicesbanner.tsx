import Link from 'next/link';
import React from 'react'
import { FaHome } from 'react-icons/fa';
import { FaShop } from "react-icons/fa6";
import { RiRobot3Fill } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
const Services: React.FC = () => {
  return (
    <>
    <div className='mt-3  '  >
    <span className="flex items-center">
      <span className="h-px flex-1 bg-black"></span>
      <span className="shrink-0 px-6"><h1 className=" text-gray-700 dark:text-black font-extrabold font-serif text-xl sm:text-2xl">
                   Our Services
                </h1></span>
      <span className="h-px flex-1 bg-black"></span>
    </span>
    <div className=' flex justify-center'>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg  lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">Empowering Farmers with Direct Market Access</h2>

            <p className="mt-4 text-gray-600">
            Experience seamless communication and transactions with our platform that connects farmers and buyers directly. Benefit from real-time price trends, and in-depth statistical analysis to optimize your agricultural business.
            </p>
            <div className="flex justify-center">
            <a
              href="./services"
              className="mt-6 inline-block rounded justify-center bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-green-600 "
            >
             Learn More
            </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <Link
            href='' className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              
          >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <FaShop className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold">Marketplace</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
          </Link>

          <Link
            href='' className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              
          >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <RiRobot3Fill className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold">Farm-Bot</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
          </Link>
          <Link
            href='' className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              
          >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <ImStatsDots className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold">Analysis</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
          </Link>
          <Link
            href='' className="block rounded-xl border border-gray-100 p-4 shadow-sm  hover:border-gray-200 hover:ring-1 hover:ring-gray-200 "
              
          >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <IoNewspaperSharp className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold">News Updates</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
          </Link>
          
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
export default Services;

