import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    title: { type: String, required: true },
    imgUrl: { type: String },
    description: { type: String, maxlength: 250 },
    sold: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
