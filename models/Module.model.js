import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    pdf_path: {
      type: String,
      required: true,
    },
    video_path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Module = mongoose.model("Module", moduleSchema);
