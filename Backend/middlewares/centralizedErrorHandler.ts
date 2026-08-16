import type { Request, Response, NextFunction } from "express";

const centralizedErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // Set defaults if the error isn't an instance of CustomError
  err.statusCode = err.statusCode || 500;

  // In a real-world app, you might want different responses for Dev vs Prod
  if (process.env.NODE_ENV === "development") {
    res.status(err.statusCode).json({
      status: "failure",
      message: err.message,
    });
    return;
  }

  // Production Mode: Don't leak stack traces to the client
  if (err.isOperational) {
    // Operational trusted error: send message to client
    res.status(err.statusCode).json({
      status: "failure",
      message: err.message,
    });
  } else {
    // Programming or other unknown error: don't leak details
    console.error("FATAL ERROR: ", err); // Log it for your own debugging
    res.status(500).json({
      status: "failure",
      message: "Something went very wrong!",
    });
  }
};

export default centralizedErrorHandler;
