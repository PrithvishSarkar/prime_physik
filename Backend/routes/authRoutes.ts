import express from "express";
import loginController from "../controllers/auth/loginController.js";
import registerController from "../controllers/auth/registerController.js";
import logoutController from "../controllers/auth/logoutController.js";
import fetchDetailsController from "../controllers/auth/fetchDetailsController.js";
import authenticationMiddleware from "../middlewares/authenticationLayer.js";
import checkOnboardingStatusController from "../controllers/auth/checkOnboardingStatusController.js";

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/logout", logoutController);
router.get("/name-email", authenticationMiddleware, fetchDetailsController);
router.get("/verify-user", authenticationMiddleware, checkOnboardingStatusController);

export default router;
