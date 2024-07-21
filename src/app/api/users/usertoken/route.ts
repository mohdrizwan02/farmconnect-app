import { Dbconnect } from '@/dbConfig/Dbconnect';
import user from '@/models/usermodel';
import { NextRequest, NextResponse } from 'next/server';


import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function GET(request : NextRequest) {
   const tokendata = await getDataFromToken(request);
    await Dbconnect();
     try {
        const userId  = await getDataFromToken(request);
        const userdata =await user.findOne({_id: userId});
        console.log(userdata);
        return NextResponse.json({
           
            userType : userdata.usertype,
            
        });

     } catch (error : any) {
        console.log(error.message);
        return NextResponse.json({ message: 'Server Error' },{status: 400 });
     }
    

}