import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    payment_id: {
      type: String,
      unique: true,
      required: true,
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);
export const Payment = mongoose.model("Payment:", paymentSchema);
