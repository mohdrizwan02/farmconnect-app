import { Dbconnect } from '@/dbConfig/Dbconnect';
import user from '@/models/usermodel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import twilio from 'twilio';





export async function POST(request : NextRequest){
    await Dbconnect();
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    const reqBody = await request.json();
    const { phone } = reqBody;
    console.log(reqBody);

    const userfound = await user.findOne({ phone });
       
    
    
        if(!userfound){
            console.log("user not found");
            return NextResponse.json({ message : "User not found" });
           
        }
        
        const phonenumber ="+91"+phone.toString();
        
    

        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        console.log(phone);
        console.log(otp);

    try {
        const result = await client.messages.create({
            from : process.env.TWILIO_PHONE_NUMBER,
            to : phonenumber,
            body : `Your Otp for Farm Connect login is : ${otp}`
        });
        console.log(result);

      

        await user.findOneAndUpdate({phone},{otpverifytoken:otp})
        
        return NextResponse.json({ message: 'OTP sent successfully' });

    


    } catch (error) {
        return NextResponse.json({ error : "failed to generate OTP" },{status : 500});
    }
}