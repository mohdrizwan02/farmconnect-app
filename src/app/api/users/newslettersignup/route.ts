import { Dbconnect } from '@/dbConfig/Dbconnect';
import newsletteremail from '@/models/newslettersignupmodel';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request : NextRequest) {
    await Dbconnect();
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const { email } = reqBody;
        const userfound = await newsletteremail.findOne({ email });
        if (userfound) {
            return NextResponse.json({ message: 'Email already exists' });
        }
        const newUser = new newsletteremail({ email });
        const savedemail = await newUser.save();
        return NextResponse.json({ message: 'Successfully signed up for the Newsletter',
            success : true,
         });

    } catch (error : any) {
        console.log(error);
        return NextResponse.json({ message: 'unable to signup Newsletter' });
    }


}