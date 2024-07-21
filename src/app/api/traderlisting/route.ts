import { Dbconnect } from "@/dbConfig/Dbconnect";
import traderlisting from "@/models/traderlisting";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await Dbconnect();

  try {
    const reqBody = await request.json();
    const {
      producttype,
      productquantity,
      traderid,
      productdeadline,
      price,
      area,
      pincode,
      city,
      state,
    } = await reqBody;
    console.log(reqBody);

    const productdata = await new traderlisting({
      producttype,
      productquantity,
      traderid,
      productdeadline,
      price,
      area,
      pincode,
      city,
      state,
    });
    console.log('test 1');
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
