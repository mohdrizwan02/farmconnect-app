import { Dbconnect } from "@/dbConfig/Dbconnect";
import traderlisting from "@/models/traderlisting";
import user from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest){
    await Dbconnect();
    
    try {
        const { searchParams } = new URL(request.url);
        const commodityid = searchParams.get('commodityid');
        const traderid = searchParams.get('traderid');
        console.log(commodityid+''+traderid);

        const traderdata = await user.findOne({_id : traderid});

        const commoditydata = await traderlisting.findOne({_id : commodityid});

        console.log(commoditydata);
        console.log(traderdata);

        return NextResponse.json({success : true ,
            commoditydata,
            traderdata
        })


    } catch (error) {
        return NextResponse.json({error : error})
    }
}