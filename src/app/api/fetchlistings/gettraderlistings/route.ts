import { Dbconnect } from '@/dbConfig/Dbconnect';
import traderlisting from '@/models/traderlisting';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request : NextRequest) {
  await Dbconnect();

  try {
    console.log('step 1')
    const listings = await traderlisting.find({});
    console.log(listings);
    return NextResponse.json(listings)
  

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch trader listings' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}