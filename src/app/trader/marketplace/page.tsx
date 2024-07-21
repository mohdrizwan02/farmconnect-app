"use client";
import Navbar from "@/components/FarmerNavbar";
import axios from "axios";
import React, { FormEvent, useEffect } from "react";
import { useState } from "react";

interface Product {
  _id: string;
  producttype: string;
  productquantity: number;
  city: string;
  productdeadline: string;
  price: number;
  farmerid: string; 
}

const traderMarketplacepage = () => {
  const [producttype, setCommodityType] = useState("");
  const [pincode, setPincode] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const cropOptions = ["rice", "wheat", "cotton", "mirchi"];

  const handlefilterresults = async (e: FormEvent) => {
    e.preventDefault();
    console.log("handlefilterresults");
    setLoading(true);
    console.log("Filter results");
    try {
      const response = await axios.get(
        "/api/fetchlistings/filterfarmerlistings",
        {
          params: {
            producttype,
            pincode,
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    } finally {
      console.log("Filter results");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch("/api/fetchlistings/getfarmerlistings")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Farmer listings", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(products);
    console.log(products.length);
  }, [products]);

  return (
    <>
      <section className="bg-gray-200   lg:pt-10 lg:pb-6 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white dark:bg-gray-200 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:h-full"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>{" "}
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-green-700 md:text-3xl">
              List your own trade, on your own terms.{" "}
              <span className="text-black">.</span>
            </h2>

            <p className="mt-4 text-black">
              Now you can List your requirement at the best market price by
              creating your own trade and negotiating directly with the
              counter-party.
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
              <a
                href="../../trader/marketplace/buying"
                className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-green-600 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                List Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="sticky top-0 shadow-md">
        <form onSubmit={handlefilterresults}>
          <div className="bg-gray-200 p-4 flex flex-wrap justify-center">
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
                <label htmlFor="commodityType" className="font-semibold">
                  Type:
                </label>
                <select
                  id="commodityType"
                  name="commodityType"
                  value={producttype}
                  onChange={(e) => setCommodityType(e.target.value)}
                  className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select</option>
                  {cropOptions.map((crop, index) => (
                    <option key={index} value={crop}>
                      {crop}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
                  <label htmlFor="pincode" className="font-semibold">
                    Pincode:
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Apply Button */}
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-black focus:outline-none focus:bg-blue-600"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="text-center font-bold text-xl pt-5">
        Available Commodities
      </div>
      <div className="p-4 flex-1 max-w-screen-xl">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map((product, index) => (
            <a href={`../../trader/marketplace/${product._id}/${product.farmerid}`}>
              <div
                key={index}
                className="border-b py-4 px-5 cursor-pointer bg-gray-200 rounded-md my-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-green-600">{`Commodity Id: ${product._id}`}</div>
                    <h3 className="text-lg font-bold">{product.producttype}</h3>
                    <div className="text-gray-500">{`Quantity: ${product.productquantity} Tons`}</div>
                    <div className="text-gray-500">{` ${product.city}`}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600">{`Deadline: ${new Date(
                      product.productdeadline
                    ).toLocaleDateString()}`}</div>
                    <div className="text-gray-800">{`Price: ₹ ${product.price} /QTL`}</div>
                  </div>
                </div>
              </div>
            </a>
          ))
        )}
      </div>
    </>
  );
};

export default traderMarketplacepage;
