import { Dbconnect } from '@/dbConfig/Dbconnect';
import traderlisting from '@/models/traderlisting';
import { NextRequest, NextResponse } from 'next/server';

interface Filter {
  producttype?: string;
  pincode?: string;
}

export async function GET(request: NextRequest) {
  await Dbconnect();

  const { searchParams } = new URL(request.url);
  const commodityType = searchParams.get('producttype');
  const pincode = searchParams.get('pincode');
  console.log(commodityType)

  let filter: Filter = {};

  if (commodityType) {
    filter.producttype = commodityType;
  }

  try {
    // Fetch listings based on producttype
    const listings = await traderlisting.find({ producttype : commodityType });
    console.log(listings);

    // Further filter the listings based on pincode if provided
    const filteredListings = pincode
      ? listings.filter(listing => listing.pincode === pincode)
      : listings;
      console.log(filteredListings);

    return NextResponse.json(filteredListings);
  } catch (error) {
    console.error("Error fetching filtered farmer listings:", error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch farmer listings' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
