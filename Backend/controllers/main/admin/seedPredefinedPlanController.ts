import type { NextFunction, Request, Response } from "express";
import Plan from "../../../models/planModel.js";
import predefinedPlans from "../../../lib/predefinedPlans.js";

const adminSeedPredefinedPlanController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Check Plan Existence & Seeding Plans.
    const exists = await Plan.exists({});
    if (exists) await Plan.deleteMany({});

    await Plan.insertMany(predefinedPlans, { ordered: true });

    res.status(201).json({
      status: "success",
      message: "Predefined Plans Seeded Successfully.",
    });
  } catch (error) {
    next(error);
  }
};

export default adminSeedPredefinedPlanController;
