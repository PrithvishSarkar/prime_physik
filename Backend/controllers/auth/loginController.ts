import type { Request, Response, NextFunction } from "express";
import generateToken from "../../lib/generateToken.js";
import packageToken from "../../lib/packageToken.js";
import validateLogin from "../../lib/validateLogin.js";
import fetchOnboardingStatus from "../../lib/fetchOnboardingStatus.js";
import validateUserId from "../../lib/validateUserId.js";

interface RequestBodyType {
  email: string;
  password: string;
}

const loginController = async (
  req: Request<{}, {}, RequestBodyType>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    // Validating User Inputs.
    const { id, role } = (await validateLogin(email, password)) as {
      id: string;
      role: "admin" | "user";
    };

    // Generating Token.
    const token = generateToken(id, role);

    // Sending Token via Cookie.
    packageToken(res, token);

    // Fetching User's Onboarding Status
    const isOnboarded = await fetchOnboardingStatus(id);

    res
      .status(200)
      .json({
        status: "success",
        message: "User Authenticated Successfully!",
        isAuthentic: true,
        isOnboarded,
      });
  } catch (error) {
    console.error("Log In Error: ", error);
    next(error);
  }
};

export default loginController;
