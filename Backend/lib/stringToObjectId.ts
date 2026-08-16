import mongoose from "mongoose";
import CustomError from "../customError.js";

const stringToObjectId = (id: string): mongoose.Types.ObjectId => {
  if (!mongoose.Types.ObjectId.isValid(id))
    throw new CustomError("Invalid String ID.", 400);
  return new mongoose.Types.ObjectId(id);
};

export default stringToObjectId;
