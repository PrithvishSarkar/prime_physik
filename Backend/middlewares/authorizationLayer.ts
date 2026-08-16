import type { NextFunction, Request, Response } from "express";

const authorizationMiddleware = (...allowedRoles: Array<string>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.role) {
      res.status(401).json({
        status: "failure",
        message: "Unauthorized: User Context Missing.",
      });
      return;
    }
    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({
        status: "failure",
        message: "Forbidden: Insufficient Permission.",
      });
      return;
    }
    next();
  };
};

export default authorizationMiddleware;
