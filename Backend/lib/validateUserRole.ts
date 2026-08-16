import type { Request } from "express";
import CustomError from "../customError.js";

const validateUserRole = (req: Request) => {
  const role = req.user?.role;
  if (
    !role ||
    (role && typeof role !== "string" && !["admin", "user"].includes(role))
  )
    throw new CustomError("Unauthticated User.", 401);
  return role;
};

export default validateUserRole;
