import { Dbconnect } from "@/dbConfig/Dbconnect";
import farmerlisting from "@/models/farmerlisting";
import user from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest){
    await Dbconnect();
    
    try {
        const { searchParams } = new URL(request.url);
        const commodityid = searchParams.get('commodityid');
        const farmerid = searchParams.get('farmerid');
        console.log(commodityid+''+farmerid);

        const farmerdata = await user.findOne({_id : farmerid});

        const commoditydata = await farmerlisting.findOne({_id : commodityid});

        console.log(commoditydata);
        console.log(farmerdata);

        return NextResponse.json({success : true ,
            commoditydata,
            farmerdata
        })


    } catch (error) {
        return NextResponse.json({error : error})
    }
}