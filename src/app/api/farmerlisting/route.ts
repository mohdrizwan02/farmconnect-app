import { Dbconnect } from "@/dbConfig/Dbconnect";
import farmerlisting from "@/models/farmerlisting";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await Dbconnect();

  try {
    const reqBody = await request.json();
    const {
      producttype,
      productquantity,
      farmerid,

      productdeadline,
      price,
      houseno,
      pincode,
      city,
      state,
    } = reqBody;
    console.log(reqBody);

    const productdata = new farmerlisting({
      producttype,
      productquantity,
      farmerid,
      productdeadline,
      price,
      houseno,
      pincode,
      city,
      state,
    });

    const savedProduct = await productdata.save();
    console.log(savedProduct);
    return NextResponse.json({
      message: "Product created successfully",
      success: true,
      savedProduct,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
