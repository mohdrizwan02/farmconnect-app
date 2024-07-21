import mongoose from "mongoose";

const farmerlistingschema = new mongoose.Schema({
  producttype: {
    type: String,
    required: true,
  },
  productquantity: {
    type: String,
    required: true,
  },
  farmerid: {
    type: String,
    required: true,
  },
  
  productdeadline: {
    type: Date,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },

  houseno: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});
const farmerlisting =
  mongoose.models.farmerlisting ||
  mongoose.model("farmerlisting", farmerlistingschema);

export default farmerlisting;
