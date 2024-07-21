import Header from '@/components/Header';
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <>
        <Header/> 
        <div className="bg-gray-200 w-full h-screen">
            <div className="heading w-full mx-auto text-center py-10 flex flex-col items-center">
                <h1 className="text-5xl text-black mb-6 relative">
                    About
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 block mt-2"></span>
                </h1>
                <p className="text-lg text-gray-600 mb-9">
                    Farm-Connect will make it happen that "If the farmer is rich, then so is the Nation."
                </p>
            </div>
            <div className="container w-11/12 mx-auto p-2.5">
                <section className="about flex justify-between items-center flex-wrap">
                    <div className="about-image flex-1 mr-10 overflow-hidden">
                        <img
                            src="image/farmer img.jpg"
                            alt="Farmer"
                            className="max-w-full h-auto block transition-transform duration-500 ease-in-out transform hover:scale-125"
                        />
                    </div>
                    <div className="about-content flex-1">
                        <h3 className="text-xl mb-4 text-gray-800">
                            Farm-Connect is about connecting with farmers not only for long-Scaling farmers but for Small Scaling farmers also.
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Farm-Connect is a very useful ecommerce website made for farmers. Our website connects farmers with different buyers to sell their farm product. Through this website, the farmers can make choices by analysing the prices for their productions. It also gives farmers helpful info about how prices change over time, so they can make smart choices. Our website, Farm-Connect, is set to transform the agricultural market by directly linking farmers with buyers. Through our platform, farmers can sell their produce without intermediaries, ensuring fair prices and transparency. By providing real-time pricing and market insights, Farm-Connect empowers farmers to make informed decisions, making the agricultural market more efficient and trustworthy.
                        </p>
                        <a href="#" className="read-more inline-block py-2.5 px-5 bg-green-600 text-white text-lg no-underline rounded-full mt-4 transition duration-300 ease-in-out hover:bg-green-700">
                            Read More
                        </a>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
};

export default AboutUs;
