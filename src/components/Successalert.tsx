// components/Alert.js
import React from 'react';

type AlertProps = {
  message: string;
  setmessage: React.Dispatch<React.SetStateAction<string>>;
};

const Alert2: React.FC<AlertProps> = ({ message, setmessage }) => {
  if (!message) return null;

  return (
    <div role="alert" className="rounded-xl border w-full bg-green-200 fixed top-10 border-gray-100  p-4">
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          
          <p className="mt-1 text-sm text-gray-700">{message}</p>
        </div>

        <button
          onClick={() => setmessage('')}
          className="text-gray-500 transition hover:text-gray-600"
        >
          <span className="sr-only">Dismiss popup</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert2;
