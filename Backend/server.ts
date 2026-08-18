import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db_connect.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import mainContentRoutes from "./routes/mainContentRoutes.js";
import centralizedErrorHandler from "./middlewares/centralizedErrorHandler.js";

dotenv.config({ path: "./.env" });

connectDB();

const PORT = process.env.PORT || 4000;
const app = express();

// Render's Reverse Proxy
app.set("trust proxy", 1);

/* === Middleware Starts Here === */
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
  }),
);
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cookieParser());
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", profileRoutes);
app.use("/api/v1", mainContentRoutes);

app.use(centralizedErrorHandler);
/* === Middleware Ends Here === */

app.listen(PORT, () => console.info(`Listening to port ${PORT}!`));
