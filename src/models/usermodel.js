import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
    {
        usertype : {
            type : String,
            
            
        },
        phone : {
            type : String,
           
            
        },
        name: {
            type: String,
           
          },
        email: {
            type: String,
            
           
          },
          pincode: {
            type: String,
           
          },
          address: {
            type: String,
            
          },
          district: {
            type: String,
           
          },
          city: {
            type: String,
           
          },
          state: {
            type: String,
           
          },
          taluka: {
            type: String,
           
          },
          aadhaarnumber: {
            type: String,
           
          },
          password: {
            type: String,
           
          },
          forgotpasswordtoken :{ String,},

          otpverifytoken :{ String,},




    }
)

const user = mongoose.models.users || mongoose.model("users",userSchema);

export default user;
