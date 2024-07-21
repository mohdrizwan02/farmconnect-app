import mongoose from "mongoose";

const traderlistingschema = new mongoose.Schema({
  producttype: {
    type: String,
    required: true,
  },
  productquantity: {
    type: String,
    required: true,
  },
  traderid: {
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

  area: {
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
const traderlisting =
  mongoose.models.traderlisting ||
  mongoose.model("traderlisting", traderlistingschema);

export default traderlisting;
