import { Dbconnect } from '@/dbConfig/Dbconnect';
import user from '@/models/usermodel';
import { NextRequest, NextResponse } from 'next/server';

import jwt from 'jsonwebtoken';

const bcrypt=require('bcryptjs');

export async function POST (request : NextRequest){
    await Dbconnect();
  
    try {
        const reqBody = await request.json();
        const {phone , otp} = reqBody;
        console.log(reqBody);
        
        const User = await user.findOne({ phone });
        const otpstring = String(otp);
        console.log(otpstring === String(User.otpverifytoken));
        const isotpvalid = (otpstring === String(User.otpverifytoken));
        console.log(User.otpverifytoken);
        
        
        if(!isotpvalid){
            console.log('Invalid Otp');
            return NextResponse.json({
            message: 'Invalid Otp'});
        }

        const tokenData = {
            id:User._id,
            phone:User.phone,
            email:User.email
        }

        const token =jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d'})

        const response = NextResponse.json({
            message : "Login Successful",
            success : true,
            usertype : User.usertype,
        })

        response.cookies.set("token",token,{
            httpOnly : true,
            
        })
        return response;

    } catch (error : any) {
        return NextResponse.json({message : "something went wrong"});
    }

}