import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

export const authModelName: string = "UserAuth";
export const authCollectionName: string = "prime_physik_users_auth";

export default mongoose.model(
  authModelName,
  authSchema,
  authCollectionName
);
