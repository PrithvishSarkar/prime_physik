import express from "express";
import authenticationMiddleware from "../middlewares/authenticationLayer.js";
import checkOnboardingMiddleware from "../middlewares/onboardingLayer.js";
import onboardingController from "../controllers/profile/onboardingController.js";
import profileFetchController from "../controllers/profile/profileFetchController.js";
import profileUpdateController from "../controllers/profile/profileUpdateController.js";

const router = express.Router();

router
  .route("/me")
  .post(authenticationMiddleware, onboardingController)
  .get(
    authenticationMiddleware,
    checkOnboardingMiddleware,
    profileFetchController
  );

router.put(
  "/me/:id",
  authenticationMiddleware,
  checkOnboardingMiddleware,
  profileUpdateController
);

// Dashboard: router.get("/dashboard", authenticationMiddleware, checkOnboardingMiddleware, dashboardController);

export default router;
