import { Dbconnect } from '@/dbConfig/Dbconnect';
import user from '@/models/usermodel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request : NextRequest) {
    await Dbconnect();
    try {
        const reqBody = await request.json();
        const  {phone , password } = reqBody;
        console.log(reqBody);

        const User = await user.findOne({ phone });
        if (!User) {
            return NextResponse.json({ message: 'User not found' });
        }

        const isPasswordValid = await bcryptjs.compare(password, User.password);

        if (!isPasswordValid) {

            console.log('Invalid password');
            return NextResponse.json({
                 message: 'Invalid password'});
        }

        //create token data

        const tokenData = {
            id:User._id,
            usertype : User.usertype,
            phone:User.phone,
            email:User.email
        }

        //create token 
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d'})

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
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


