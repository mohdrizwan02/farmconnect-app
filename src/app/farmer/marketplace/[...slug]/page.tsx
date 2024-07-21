"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface commoditydata {
 _id : string;
 producttype : string;
 productquantity : number;
 city : string;
 productdeadline : string;
 price : number;
 traderid : string;
 state : string;
 area : string;
 pincode : string;

}
interface traderdata {

  _id : string;
  name : string;
  email : string;
  phone : string;
 
  address : string;
  state : string;
  pincode : string;
  area : string;
  city : string;
  taluka : string;

}


export default function commodityPage({
  params,
}: {
  params: { slug: string[] };
}) {

  const [loading , setLoading]=useState(true);
  const [commoditydata, setcommoditydata] = useState<commoditydata | null>(null);
  const [traderdata, settraderdata] = useState<traderdata | null>(null);

  
  useEffect(() => {
    const slug = params.slug;
    const commodityid = params.slug[0];
    const traderid = params.slug[1];

    const getdetails = async () => {
      setLoading(true);
      console.log("Filter results");
      try {
        const response = await axios.get(
          "/api/fetchlistings/gettraderproduct",
          {
            params: {
              commodityid,
              traderid
            },
          }
        );
        console.log(response);
        console.log(response.data.success);
        setcommoditydata(response.data.commoditydata);
        settraderdata(response.data.traderdata);
        
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      } finally {
        console.log("Filter results");
        setLoading(false);
      }
    };

    getdetails();
  }, []);

  useEffect(() => {
    console.log(commoditydata);
  }, [commoditydata]);
  

  useEffect(() => {
    console.log(traderdata);
  }, [traderdata]);
  
  return (
    <>
      {loading ? (<h1>Loading....</h1>) : (

        <div className=" flex-row sm:flex grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="  md:col-span-1 flex-grow sm:w-1/3  sm:p-4 p-12 flex flex-col justify-center items-center">
        {commoditydata && (
          <img
          src={`/${commoditydata.producttype}.jpg`}
          alt="Farmer"
          className="w-full h-full sm:h-auto object-cover"
          />
          )}
        </div>
        <div className="md:col-span-2 md:w-2/3 bg-white p-4 flex flex-col justify-start">
          <h2 className="text-2xl font-bold mb-4">Commodity details</h2>
        </div>
      </div>
        )}
    </>
  );
}
