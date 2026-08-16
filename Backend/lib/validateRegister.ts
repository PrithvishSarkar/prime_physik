import UserAuth from "../models/authModel.js";
import CustomError from "../customError.js";

const validateRegister = async (
  name: string,
  email: string,
  password: string
) => {
  // Check User Data Validity.
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    throw new CustomError("Invalid Input Types.", 400);
  }
  if (!name.trim() || !email.trim() || !password.trim()) {
    throw new CustomError("Empty Inputs Rejected.", 400);
  }

  /*
  Checking Email Validity.
  1. Should Contain `@`.
  2. Prefix Before `@`.
  3. Domain Name Suffix.
  4. Contains Dot Character.
  */
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new CustomError("Invalid Input Format.", 400);
  }

  // Checking User Existence.
  const user = await UserAuth.findOne({ email });
  if (user) {
    throw new CustomError("User Already Exists.", 409);
  }

  /*
  Checking Password Validity.
  1. Minimum 8 Characters.
  2. Lower & Upper Cases Both.
  3. Minimum 1 Digit/Number.
  4. Minimum 1 Special Character.
  */

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!regex.test(password)) {
    throw new CustomError("Invalid Password.", 400);
  }
};

export default validateRegister;
