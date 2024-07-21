'use client';
import React from 'react';
import Newsletter from './Newsletter';

const About: React.FC = () => {
  return (
    <>
    <div className='mt-3'>
    <span className="flex items-center">
      <span className="h-px flex-1 bg-black"></span>
      <span className="shrink-0 px-6"><h1 className=" text-gray-700 dark:text-black font-extrabold font-serif text-xl sm:text-2xl">
                    About-Us
                </h1></span>
      <span className="h-px flex-1 bg-black"></span>
    </span>
    </div>
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="about.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        
        <h1 className="text-4xl lg:text-5xl font-bold">
          Connecting Farmers to a <span className="text-green-600">Sustainable</span> Future
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-600">
        "Discover our journey at FarmConnect and learn how we're cultivating a sustainable future for farmers everywhere. Explore more about us!"
           
        </p>
        <div className=" flex justify-center">
            <a
            href="/about-us"
            className="mt-8 inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-green-600 "
            >
            About-Us
            </a>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
};
export default About;

