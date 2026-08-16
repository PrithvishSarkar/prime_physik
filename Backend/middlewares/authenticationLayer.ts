import type { NextFunction, Request, Response } from "express";
import { tokenName } from "../lib/packageToken.js";
import CustomError from "../customError.js";
import jwt, { type JwtPayload } from "jsonwebtoken";

interface AuthJwtPayload extends JwtPayload {
  id: string;
  role: string;
}

const authenticationMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies[tokenName];

    // Check Token Existence.
    if (!token)
      throw new CustomError("Unauthenticated User - Token Missing.", 401);

    // Decoding Token Value.
    const jwtSecretKey: string | undefined = process.env.JWT_SECRET_KEY;
    if (!jwtSecretKey) throw new CustomError("JWT Secret Key Not Found.", 500);
    const decoded = jwt.verify(token, jwtSecretKey) as AuthJwtPayload;
    if (!decoded.id || !decoded.role)
      throw new CustomError(
        "Unauthenticated User - Invalid Token Payload.",
        401,
      );

    // Populating `req.user` as {id, role}.
    req.user = { id: decoded.id, role: decoded.role };

    // Moving Forward.
    next();
  } catch (error) {
    next(error);
  }
};

export default authenticationMiddleware;
