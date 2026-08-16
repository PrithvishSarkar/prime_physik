import bcrypt from "bcryptjs";
import UserAuth from "../../models/authModel.js";
import type { Request, Response, NextFunction } from "express";
import generateToken from "../../lib/generateToken.js";
import packageToken from "../../lib/packageToken.js";
import validateRegister from "../../lib/validateRegister.js";

interface RequestBodyType {
  name: string;
  email: string;
  password: string;
}

const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body as RequestBodyType;

    // Validating User Inputs.
    await validateRegister(name, email, password);

    // Hashing Password Using BcryptJS.
    const hashedPassword: string = await bcrypt.hash(password, 10);

    // Inserting User Information.
    const userDetails = await UserAuth.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    // Generating Token.
    const token = generateToken(
      userDetails["_id"].toString(),
      userDetails.role
    );

    // Sending Token via Cookie.
    packageToken(res, token);

    res.status(201).json({
      status: "success",
      message: "User Registered Successfully!",
      isAuthentic: true,
      isOnboarded: false,
    });
  } catch (error) {
    console.error("Registration Error: ", error);
    next(error);
  }
};

export default registerController;
