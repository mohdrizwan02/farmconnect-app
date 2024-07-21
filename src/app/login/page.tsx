"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Alert from "@/components/Alert";
import Alert2 from "@/components/Successalert";
import Header from "@/components/Header";

export default function Loginpage() {
  const router = useRouter();
  const [trader, settrader] = useState(false);
  const [farmer, setfarmer] = useState(true);
  const [useotp, setuseotp] = useState(false);
  const [otpgenerated, setotpgenerated] = useState(false);
  const [phone, setphone] = useState("");
  const [otp, setotp] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [message, setmessage] = useState("");

  useEffect(() => {
    // Simulate an error being set after 3 seconds
    const timer = setTimeout(() => {
      seterror("");
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  function handlecustomer() {
    settrader(true);
    setfarmer(false);
    setuseotp(false);
  }

  function handlefarmer() {
    settrader(false);
    setfarmer(true);
    setuseotp(false);
  }
  const backtologin = async () => {
    setotpgenerated(false);
    setuseotp(false);
  };

  const handlefarmerotplogin = async (e: FormEvent) => {
    e.preventDefault();
    const farmerotpdata = {
      phone,
      otp,
    };

    try {
      const response = await axios.post("/api/users/otplogin", farmerotpdata);

      if (response.data.success) {
        console.log(response.data.usertype);
        console.log(response);
        router.push("./");
      }

      console.log(response.data.message);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const generateotp = async (e: FormEvent) => {
    e.preventDefault();

    const phonedata = {
      phone,
    };

    try {
      const response = await axios.post("/api/users/generateotp", phonedata);
      console.log(response);
      if (response.data.message === "User not found") {
        seterror("User not found");
        console.log(error);
      }
      if (response.data.message === "OTP sent successfully") {
        setmessage(response.data.message);
        setotpgenerated(true);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handlelogin = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      phone,
      password,
    };

    if (!phone || !password) {
      seterror("Please enter phone number and password");
      return;
    }

    try {
      const response = await axios.post("/api/users/login", data);

      console.log(response.data.message);

      if (response.data.success) {
        console.log(response.data.usertype);
        console.log(response);
        if (response.data.usertype === "Farmer") {
          router.push("./farmer");
        } else {
          router.push("./trader");
        }
      } else {
        seterror(response.data.message);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header />
      <Alert2 message={message} setmessage={setmessage} />
      <Alert error={error} seterror={seterror} />
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className=" flex justify-center">
            <Image
              className="w-auto h-16 justify-center sm:h-16"
              width={100}
              height={100}
              src="/logo.png"
              alt="logo"
            />
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login in to your account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center gap-4 justify-center mb-10">
            <button
              onClick={handlefarmer}
              className={`w-1/3 pb-4 font-medium text-center text-black capitalize ${
                farmer ? `border-b-2 border-blue-500` : ``
              }`}
            >
              Farmer
            </button>

            <button
              onClick={handlecustomer}
              className={`w-1/3 pb-4 font-medium text-center text-black capitalize ${
                trader ? `border-b-2 border-blue-500` : ``
              }`}
            >
              Trader
            </button>
          </div>

          {farmer ? (
            useotp ? (
              <form className="space-y-6" onSubmit={handlefarmerotplogin}>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={(e) => setphone(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-md sm:leading-6"
                    />
                  </div>
                </div>

                {otpgenerated ? (
                  <>
                    <div>
                      <label
                        htmlFor="otp"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Enter Otp
                      </label>
                      <div className="mt-2">
                        <input
                          id="otp"
                          name="otp"
                          type="tel"
                          onChange={(e) => setotp(e.target.value)}
                          required
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-md sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={generateotp}
                      className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Generate Otp
                    </button>
                  </>
                )}

                <button
                  onClick={backtologin}
                  className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Back to login
                </button>
              </form>
            ) : (
              <>
                <form className="space-y-6" onSubmit={handlelogin}>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        onChange={(e) => setphone(e.target.value)}
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-md sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={(e) => setpassword(e.target.value)}
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <p className="my-4 justify-center text-center text-gray-600 dark:text-gray-400">
                  or
                </p>
                <button
                  onClick={() => setuseotp(!useotp)}
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login with Otp
                </button>
              </>
            )
          ) : (
            <form className="space-y-6" onSubmit={handlelogin}>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={(e) => setphone(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-md sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          )}
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="./register"
              className="font-semibold leading-6 text-black hover:text-green-600 hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
