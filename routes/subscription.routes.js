import { Router } from "express";
import authorize from "../middlewares/auth.middlewares.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/");
subscriptionRouter.get("/upcoming-renewals");
subscriptionRouter.get("/:id");
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id");
subscriptionRouter.delete("/:id");
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.put("/:id/cancel");

export default subscriptionRouter;
