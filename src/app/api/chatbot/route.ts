import { NextRequest , NextResponse } from "next/server";
import { Dbconnect } from "@/dbConfig/Dbconnect";
import chatbotfaqs from "@/models/faqs";


export async function POST(req : NextRequest){
  await Dbconnect()

  try {
    const id = process.env.FAQ_ID;
    const { userInput } = await req.json();

    if (!userInput) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    
    
  } catch (error : any) {
     return NextResponse.json({message : "error had occured while generating the response",success : false})
  }

}




// import { NextRequest, NextResponse } from "next/server";
// import OpenAI from 'openai';






// export async function POST(request: NextRequest) {
//   try {
   
//     const openai =  new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
//     const reqBody = await request.json();
    
//     console.log("helloapi");

//     const { userInput } = reqBody;
//     console.log(userInput);

//     // const response = await openai.chat.completions.create({
//     //    messages : 
//     //   });
//     //   console.log(response);


//     return NextResponse.json({ 
//         output: "testing",
//         success: true 
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({
//       success: true,
//       message: "couldnot make a api request",
//     });
//   }
// }
