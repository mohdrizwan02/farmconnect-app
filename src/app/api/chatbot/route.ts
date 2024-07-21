import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';






export async function POST(request: NextRequest) {
  try {
   
    const openai =  new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const reqBody = await request.json();
    
    console.log("helloapi");

    const { userInput } = reqBody;
    console.log(userInput);

    // const response = await openai.chat.completions.create({
    //    messages : 
    //   });
    //   console.log(response);


    return NextResponse.json({ 
        output: "testing",
        success: true 
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: true,
      message: "couldnot make a api request",
    });
  }
}
