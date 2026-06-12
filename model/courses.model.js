import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    course_name: {
      type: String,
      required: true,
    },
    course_description: {
      type: String,
      required: true,
    },
    course_modules: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Modules",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Courses = mongoose.model("Courses", courseSchema);
