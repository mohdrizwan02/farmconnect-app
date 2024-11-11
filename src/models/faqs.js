import mongoose from "mongoose";

const faqs = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const chatbotfaqs = new mongoose.Schema({
  faq: {
    type: [faqs],
  },
});

mongoose.models.chatbotfaqs || mongoose.model("chatbotfaqs", chatbotfaqs);
export default chatbotfaqs;