import bcrypt from "bcryptjs";
import UserAuth from "../models/authModel.js";
import CustomError from "../customError.js";

const validateLogin = async (email: string, password: string) => {
  // Checking User Data Validity.
  if (typeof email !== "string" || typeof password !== "string") {
    throw new CustomError("Invalid Input Types.", 400);
  }
  if (!email.trim() || !password.trim()) {
    throw new CustomError("Empty Input Rejected.", 400);
  }

  // Checking Email Validity.
  const userDetails = await UserAuth.findOne({ email: email.toLowerCase() });
  if (!userDetails) {
    throw new CustomError("Unauthenticated User.", 401);
  }

  // Checking Password Validity.
  const isPasswordMatched: boolean = await bcrypt.compare(
    password,
    userDetails.password
  );
  if (!isPasswordMatched) {
    throw new CustomError("Unauthenticated User.", 401);
  }

  // Returning Token Generation Information.
  return {
    id: userDetails["_id"].toString(),
    role: userDetails.role,
  };
};

export default validateLogin;
