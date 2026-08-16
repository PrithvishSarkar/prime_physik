import express from "express";

// Middleware Imports.
import authenticationMiddleware from "../middlewares/authenticationLayer.js";
import authorizationMiddleware from "../middlewares/authorizationLayer.js";
import checkOnboardingMiddleware from "../middlewares/onboardingLayer.js";

// Exercise Controller Imports.
import fetchExerciseListController from "../controllers/main/fetchExerciseListController.js";
import adminSeedExerciseListController from "../controllers/main/admin/seedExerciseListController.js";
import adminEditExerciseListController from "../controllers/main/admin/editExerciseListController.js";
import adminDeleteExerciseListController from "../controllers/main/admin/deleteExerciseListController.js";

// Plan Controller Imports.
import fetchPredefinedPlanController from "../controllers/main/fetchPredefinedPlanController.js";
import adminSeedPredefinedPlanController from "../controllers/main/admin/seedPredefinedPlanController.js";

// Workout Log Controller Imports.
import editWorkoutLogController from "../controllers/main/editWorkoutLogController.js";
import fetchWorkoutLogController from "../controllers/main/fetchWorkoutLogController.js";

// Workout History Controller Import.
import workoutHistoryController from "../controllers/main/workoutHistoryController.js";

// Dashboard Analytics Controller Import.
import fetchDashboardAnalyticsController from "../controllers/main/fetchDashboardAnalyticsController.js";

const router = express.Router();

// Exercises:
router
  .route("/exercises")
  .get(fetchExerciseListController)
  .post(
    authenticationMiddleware,
    checkOnboardingMiddleware,
    authorizationMiddleware("admin"),
    adminSeedExerciseListController,
  );
router
  .route("/exercises/:id")
  .patch(
    authenticationMiddleware,
    checkOnboardingMiddleware,
    authorizationMiddleware("admin"),
    adminEditExerciseListController,
  )
  .delete(
    authenticationMiddleware,
    checkOnboardingMiddleware,
    authorizationMiddleware("admin"),
    adminDeleteExerciseListController,
  );

// Plans (Static Non-Scalable):
router
  .route("/plans")
  .get(
    authenticationMiddleware,
    checkOnboardingMiddleware,
    authorizationMiddleware("user"),
    fetchPredefinedPlanController,
  )
  .post(
    authenticationMiddleware,
    checkOnboardingMiddleware,
    authorizationMiddleware("admin"),
    adminSeedPredefinedPlanController,
  );

// Workout Logs:
router
  .route("/logs")
  .post(
    authenticationMiddleware,
    checkOnboardingMiddleware,
    authorizationMiddleware("user"),
    editWorkoutLogController,
  )
  .get(
    authenticationMiddleware,
    checkOnboardingMiddleware,
    authorizationMiddleware("user"),
    fetchWorkoutLogController,
  );

// History:
router.get(
  "/logs/history/:id",
  authenticationMiddleware,
  checkOnboardingMiddleware,
  authorizationMiddleware("user"),
  workoutHistoryController,
);

// Dashboard:
router.get(
  "/dashboard",
  authenticationMiddleware,
  checkOnboardingMiddleware,
  authorizationMiddleware("user"),
  fetchDashboardAnalyticsController,
);

export default router;
