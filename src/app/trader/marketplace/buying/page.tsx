"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Sellingpage = () => {
  const [producttype, setProductType] = useState("");
  const [productquantity, setProductQuantity] = useState("");
  const [traderid, setTraderId] = useState("");

  const [productdeadline, setProductDeadline] = useState("");
  const [price, setPrice] = useState("");
  const [area, setarea] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      producttype,
      productquantity,
      traderid,
      productdeadline,
      price,
      area,
      pincode,
      city,
      state,
    };
    console.log(formData);
    try {
      const res = await axios.post("/api/traderlisting", formData);
      console.log(res.data.success);
      if (res.data.success) {
        router.push("../../trader/marketplace");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    axios
      .get("/api/users/userdata")
      .then((response) => {
        console.log(response);
        setTraderId(response.data.data._id);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  return (
    <>
      <div className=" my-10 ml-10 sm:ml-20 mx-auto">
        <h2 className="text-green-600 text-2xl lg:text-4xl font-bold">
          Create your own Negotiable Trade
        </h2>
      </div>
      <div className="max-w-4xl ml-10 p-6  bg-white shadow-md rounded-md">
        <div>
          <h2 className="text-xl">Effectively List your Requirement</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            <div>
              <label
                htmlFor="commodity"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <select
                  id="commodity"
                  className="peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
                  onChange={(e) => setProductType(e.target.value)}
                  value={producttype}
                >
                  <option value="" disabled>
                    Select a Commodity
                  </option>
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                  <option value="cotton">Cotton</option>
                  <option value="mirchi">Mirchi</option>
                </select>
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Commodity Name
                </span>
              </label>
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="number"
                  id="quantity"
                  placeholder="Quantity"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
                  onChange={(e) => setProductQuantity(e.target.value)}
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Quantity Required (QTL)
                </span>
              </label>
            </div>
            <div>
              <label
                htmlFor="price"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="number"
                  id="price"
                  placeholder="Price"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Price (INR/QTL)
                </span>
              </label>
            </div>
          </div>
          <h2 className="mt-7">Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            <div>
              <label
                htmlFor="hno"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="text"
                  id="hno"
                  placeholder="House Number"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
                  onChange={(e) => setarea(e.target.value)}
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Area
                </span>
              </label>
            </div>
            <div>
              <label
                htmlFor="pincode"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="text"
                  id="pincode"
                  placeholder="Pincode"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
                  onChange={(e) => setPincode(e.target.value)}
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Pincode
                </span>
              </label>
            </div>
            <div>
              <label
                htmlFor="city"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  City
                </span>
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="state"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="state"
                placeholder="State"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                required
                onChange={(e) => setState(e.target.value)}
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                State
              </span>
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 ">
            <div className="my-5">
              <label
                htmlFor="deadline"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="date"
                  id="deadline"
                  placeholder="Deadline"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
                  onChange={(e) => setProductDeadline(e.target.value)}
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Deadline
                </span>
              </label>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="agreement" className="mr-2" required />
            <label htmlFor="agreement" className="text-gray-700 text-sm">
              By creating this trade, I agree to share my contact information
              with the support representative. I have read, understood and
              agreed to abide by{" "}
              <a href="#" className="text-blue-600 underline">
                agribazaar’s Terms of Use
              </a>
              .
            </label>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Sellingpage;
