// pages/chatbotpage.tsx
"use client";
import axios from "axios";
import React, { useState } from "react";

interface chathistory {
  role: string;
  content: string;
}

const ChatbotPage = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<chathistory[]>([]);
  const [loading, setLoading] = useState(false);

  const handleUserInput = async () => {
    setLoading(true);
    const prompt = {
        userInput,
    }
    console.log(userInput)
    console.log("hello1")
    console.log(prompt)
    try {
        const response = await axios.post('/api/chatbot',prompt)
        console.log(response);
    } catch (error) {
        console.log(error);
        console.log("could not make a request")
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-md min-h-[80vh] bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <div className="text-4xl font-bold text-green-600 mb-2">
            FarmConnect-Bot
          </div>
          <p className="text-gray-600 text-lg">
            Welcome to the AI-powered Chatbot. Ask me anything!
          </p>
        </div>
        <div className="chat-history space-y-4">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.role === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300 text-black self-start"
              } p-2 rounded-md shadow-md max-w-xs break-words`}
            >
              {message.content}
            </div>
          ))}
        </div>
      </div>
      
        <div className="input-area flex absolute w-full max-w-[750px] bottom-1 mt-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            disabled={loading}
          />
          <button
            onClick={handleUserInput}
            disabled={loading}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
          >
            {loading ? "Loading..." : "send"}
          </button>
        </div>
    </div>
  );
};

export default ChatbotPage;
