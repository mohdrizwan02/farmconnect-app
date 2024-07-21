import { Dbconnect } from '@/dbConfig/Dbconnect';
import user from '@/models/usermodel';
import { NextRequest, NextResponse } from 'next/server';


import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function GET(request : NextRequest) {
   const tokendata = await getDataFromToken(request);
    await Dbconnect();
     try {
        const userId  = await getDataFromToken(request);
        const userdata =await user.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            messaage : "data fetched successfully",
            data : userdata,
            
        });

     } catch (error : any) {
        console.log(error.message);
        return NextResponse.json({ message: 'Server Error' },{status: 400 });
     }
    

}