import { Dbconnect } from '@/dbConfig/Dbconnect';
import user from '@/models/usermodel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import twilio from 'twilio';
import usersotp from '@/models/usersignupmodel';





export async function POST(request : NextRequest){
    await Dbconnect();
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
   

    try {

        const reqBody = await request.json();
        const { phone } = reqBody;
        console.log(reqBody);

        const userfound = await user.findOne({ phone });
        const userotpfound = await usersotp.findOne({ phone });
        
    
    
        if(userfound){
            console.log("user found");
            return NextResponse.json({ message : "User with this phone number already exists" });
            
        }
        
        const phonenumber ="+91"+phone.toString();
        const otpsignuptoken = Math.floor(1000 + Math.random() * 9000).toString();
        console.log(phone);
        console.log(otpsignuptoken);
        try{
        const result = await client.messages.create({
        from : process.env.TWILIO_PHONE_NUMBER,
        to : phonenumber,
        body : `Your Otp for Farm Connect signup is : ${otpsignuptoken}`
        });
        }catch(error : any){
         return NextResponse.json({ message : "Failed to send OTP" });
    }
        

        const newuserentry = new usersotp({
            phone,
            otpsignuptoken,
        })
        if(userotpfound){
            const userdata = await userotpfound.updateOne({otpsignuptoken });
        }
        else{
        const userdata = await newuserentry.save();
        }

      
        
        return NextResponse.json({ message: 'OTP sent successfully' });

    


    } catch (error) {
        return NextResponse.json({ error : "failed to generate OTP" },{status : 500});
    }
}