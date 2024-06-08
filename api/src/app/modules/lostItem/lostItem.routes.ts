import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import {
  createLostItemValidationSchema,
  updateLostItemValidationSchema,
} from "./lostItem.validations";
import LostItemControllers from "./lostItem.controllers";

const router = Router();

// create lost item : POST
router.post(
  "/",
  auth(),
  validateRequest(createLostItemValidationSchema),
  LostItemControllers.createLostItem,
);

// get  lost items : GET
router.get("/", LostItemControllers.getAllLostItems);

// get my all lost items : GET
router.get("/my", auth(), LostItemControllers.getAllMyLostItems);

// get single lost item : GET
router.get("/:lostItemId", LostItemControllers.getSingleLostItem);

// update lost item : PATCH
router.patch(
  "/:lostItemId",
  auth(),
  validateRequest(updateLostItemValidationSchema),
  LostItemControllers.updateLostItem,
);
const LostItemRoutes = router;
export default LostItemRoutes;
