import mongoose from "mongoose";

const modulesSchema = new mongoose.Schema(
  {
    module_1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
    module_2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
    },
    module_3: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
    },
  },
  {
    timestamps: true,
  },
);

export const Modules = mongoose.model("Modules", modulesSchema);
