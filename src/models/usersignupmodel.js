import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(

    {
        phone :
        {
            type : String,
            required : true,
            unique : true,
        },
        otpsignuptoken : {
            type : String,
            required : true,
        },
    }


)
const usersotp = mongoose.models.usersotp || mongoose.model("usersotp",userSchema); 

export default usersotp;
