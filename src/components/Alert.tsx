

import React from 'react';

type AlertProps = {
  error: string | "";
  seterror: React.Dispatch<React.SetStateAction<string | "">>;
};

const Alert: React.FC<AlertProps> = ({ error, seterror }) => {
  if (!error) return "";

  return (
    <div className="fixed top-10 inset-x-0 z-50 p-4">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <button onClick={() => seterror('')} className="text-red-700">
            <svg className="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 5.652a.5.5 0 10-.707-.707L10 8.586 6.36 4.946a.5.5 0 00-.707.707L9.293 10l-3.64 3.64a.5.5 0 00.707.707L10 11.414l3.64 3.64a.5.5 0 00.707-.707L10.707 10l3.641-3.641z"/>
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Alert;
