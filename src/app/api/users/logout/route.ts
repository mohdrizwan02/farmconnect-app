import { Dbconnect } from '@/dbConfig/Dbconnect';
import User from '@/models/usermodel';
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function GET() {

    try {
        const response = await NextResponse.json(
        {
            message : "logout successfully",
            success : true,
        })
        response.cookies.set("token","",
            {
                httpOnly : true , expires : new Date(0)
            }
        );
        return response;
    } catch (error :any) {
        return NextResponse.json({ error: error.message }, { status: 500 });

    }

}