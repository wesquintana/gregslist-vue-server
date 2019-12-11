import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, unique: true, required: true, minlength: 2 },
    avatar: {
      type: String,
      default: `https://robohash.org/${this.name}?set=set4`
    },
    contact: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default User;
