"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface commoditydata {
  _id: string;
  producttype: string;
  productquantity: number;
  city: string;
  productdeadline: string;
  price: number;
  farmerid: string;
  state: string;
  area: string;
  pincode: string;
}
interface farmerdata {
  _id: string;
  name: string;
  email: string;
  phone: string;

  houseno: string;
  state: string;
  pincode: string;
  area: string;
  city: string;
  taluka: string;
}

export default function commodityPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [loading, setLoading] = useState(true);
  const [commoditydata, setcommoditydata] = useState<commoditydata | null>(
    null
  );
  const [farmerdata, setfarmerdata] = useState<farmerdata | null>(null);

  useEffect(() => {
    const slug = params.slug;
    const commodityid = params.slug[0];
    const farmerid = params.slug[1];

    const getdetails = async () => {
      setLoading(true);
      console.log("Filter results");
      try {
        const response = await axios.get(
          "/api/fetchlistings/getfarmerproduct",
          {
            params: {
              commodityid,
              farmerid,
            },
          }
        );
        console.log(response);
        console.log(response.data.success);
        setcommoditydata(response.data.commoditydata);
        setfarmerdata(response.data.farmerdata);
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
    console.log(farmerdata);
  }, [farmerdata]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="p-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-[70%] mx-20 md:ml-2 md:w-1/3 flex flex-col justify-center">
              {commoditydata && (
                <img
                  src={`/${commoditydata.producttype}.jpg`}
                  alt="Farmer"
                  className="object-cover sm:p-2 w-full h-auto"
                />
              )}
            </div>
            <div className="w-full md:w-2/3 p-4">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Title</dt>
                  <dd className="text-gray-700 sm:col-span-2">Mr</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Name</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    John Frusciante
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Occupation</dt>
                  <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Salary</dt>
                  <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Bio</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    facilis debitis explicabo doloremque impedit nesciunt
                    dolorem facere, dolor quasi veritatis quia fugit aperiam
                    aspernatur neque molestiae labore aliquam soluta architecto?
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
