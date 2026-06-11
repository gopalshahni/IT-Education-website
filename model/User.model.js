import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    purchase_list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Courses,
    },
    product_key: {
      type: String,
    },
    avatar: {
      type: String,
      default: " ",
    },
    access_token: {
      type: String,
    },
    refresh_token: {
      type: String,
    },
  },
  { timestamps: true },
);
export const User = mongoose.model("User:", userSchema);
