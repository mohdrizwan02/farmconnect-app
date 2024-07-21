import { Dbconnect } from '@/dbConfig/Dbconnect';
import user from '@/models/usermodel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

export async function POST(request : NextRequest) {
  await Dbconnect();

  try {
    const reqBody = await request.json();
    const {
      usertype,
      phone,
      name,
      email,
      pincode,
      address,
      district,
      city,
      state,
      taluka,
      aadhaarNumber,
      password,
    } = reqBody;
     console.log(reqBody);

    const userFound = await user.findOne({ phone });
    if (userFound) {
      console.log(userFound);
      return NextResponse.json({ error: 'User already exists', status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new user({
      usertype,
      phone,
      name,
      email,
      pincode,
      address,
      district,
      city,
      state,
      taluka,
      aadhaarNumber,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);
    return NextResponse.json({ message: 'User created successfully', success: true, savedUser }, { status: 201 });

  } catch (error : any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
