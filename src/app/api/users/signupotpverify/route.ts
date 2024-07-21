import { Dbconnect } from '@/dbConfig/Dbconnect';
import usersotp from '@/models/usersignupmodel';
import { NextRequest, NextResponse } from 'next/server';



export async function POST (request : NextRequest){
    await Dbconnect();
  
    try {
        const reqBody = await request.json();
        const {phone , otp} = reqBody;
        console.log(reqBody);
        
        const userotpfound = await usersotp.findOne({ phone });
        const isotpvalid = (String(otp) === String(userotpfound.otpsignuptoken));
        
        
        if(!isotpvalid){
            console.log('Invalid Otp');
            return NextResponse.json({
            message: 'Invalid Otp'});
        }

        const deleted = await userotpfound.deleteOne();

        return NextResponse.json({message : "otp verified successfully",
            success : true
        })

        

    } catch (error : any) {
        return NextResponse.json({message : "something went wrong"});
    }

}