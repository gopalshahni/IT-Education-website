import mongoose from "mongoose";
const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
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
    avatar: {
      type: String,
      default: " ",
    },
  },
  { timestamps: true },
);
export const Admin = mongoose.model("Admin:", adminSchema);
