import React, { useState } from 'react';


type AlertProps = {
    errormessage: string;
    seterrormessage: React.Dispatch<React.SetStateAction<string>>;
  };

  const Alert3: React.FC<AlertProps> = ({ errormessage, seterrormessage }) => {
    if (!errormessage) return null;
   

    

    return (
        <div className="w-full fixed top-10 text-white bg-red-500">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                <div className="flex">
                    <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                    </svg>
                    <p className="mx-3">Validation Error.</p>
                </div>
                <button
                    className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
                    onClick={() =>seterrormessage('') }
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Alert3;
