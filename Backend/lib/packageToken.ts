import type { Response } from "express";

export const tokenName: string = "prime_physik_auth_token";

const packageToken = (res: Response, token: string | undefined) => {
  const nodeEnvironment: string = process.env.NODE_ENV ?? "development";
  res.cookie(tokenName, token, {
    maxAge: 7 * 24 * 3600 * 1000,
    httpOnly: true,
    secure: nodeEnvironment === "production",
    sameSite: "lax", // Local and Vercel Only
  });
};

export default packageToken;
