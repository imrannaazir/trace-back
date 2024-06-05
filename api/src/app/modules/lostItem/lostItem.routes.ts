import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { createLostItemValidationSchema } from "./lostItem.validations";
import LostItemControllers from "./lostItem.controllers";

const router = Router();

// create lost item : POST
router.post(
  "/",
  auth(),
  validateRequest(createLostItemValidationSchema),
  LostItemControllers.createLostItem,
);

// get many lost items : GET
router.get("/", LostItemControllers.getAllLostItems);

const LostItemRoutes = router;
export default LostItemRoutes;
