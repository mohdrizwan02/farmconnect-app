import mongoose from 'mongoose';


const newsletterSchema = new mongoose.Schema(

    {
        email :
        {
            type : String,
            required : true,
            unique : true,
        },
       
    }


)
const newsletteremail = mongoose.models.newsletteremail || mongoose.model("newsletteremail",newsletterSchema); 

export default newsletteremail;