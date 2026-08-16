import mongoose from "mongoose";
import type { Request } from "express";
import CustomError from "../customError.js";

const validateUserId = (req: Request): mongoose.Types.ObjectId => {
  const id = req.user?.id;
  if (!id) throw new CustomError("Unauthenticated User.", 401);

  if (!mongoose.Types.ObjectId.isValid(id))
    throw new CustomError("Invalid User ID.", 400);

  // Convert: String ID -> Object ID
  const userId = new mongoose.Types.ObjectId(id);
  return userId;
};

export default validateUserId;
