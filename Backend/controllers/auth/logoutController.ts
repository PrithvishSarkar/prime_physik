import type { Request, Response } from "express";
import { tokenName } from "../../lib/packageToken.js";

const logoutController = (_req: Request, res: Response) => {
  const nodeEnvironment: string = process.env.NODE_ENV ?? "development";
  const isProduction: boolean = nodeEnvironment === "production";
  res.clearCookie(tokenName, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  });

  res.status(204).end();
};

export default logoutController;
