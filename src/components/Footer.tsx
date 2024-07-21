'use client';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FaFacebook, FaLinkedin } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col justify-between items-center text-center">
                    <a className="flex title-font font-medium items-center text-gray-900" href="#">
                        <Image
                            className="w-auto h-10"
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={30}
                            style={{ filter: 'invert(100%)' }}
                        />
                        <span className="ml-3 text-xl text-white">FARM CONNECT</span>
                    </a>
                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        {[{ title: 'Home', link: "./" }, { title: 'Services', link: "./services" }, { title: 'About', link: "./about" }, { title: 'Contact-Us', link: "./contactus" }].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="mx-4 text-sm transition-colors duration-300 hover:text-blue-500 text-white"
                                aria-label={item.title}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
                <hr className="my-6 border-gray-200 md:my-6" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-around">
                    <p className="text-sm text-white">© Copyright 2021. All Rights Reserved.</p>
                    <div className="flex -mx-2 mt-3 text-lg">
                        <a
                            
                            href="#"
                            className="mx-2 transition-colors duration-300 text-white hover:text-blue-500"
                            
                        >
                            {<FaTwitter />}
                        </a>
                        <a
                                
                                href="#"
                                className="mx-2 transition-colors duration-300 text-white hover:text-blue-500"
                                
                            >
                                {<FaFacebook />}
                            </a>
                            <a
                                
                                href="#"
                                className="mx-2 transition-colors duration-300 text-white hover:text-blue-500"
                                
                            >
                                {<FaLinkedin />}
                            </a>
                            <a
                                
                                href="#"
                                className="mx-2 transition-colors duration-300 text-white hover:text-blue-500"
                                
                            >
                                {<FaGithub />}
                            </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
                       
                        


