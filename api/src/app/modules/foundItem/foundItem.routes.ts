import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { createFoundItemValidationSchema } from "./foundItem.validations";
import FoundItemControllers from "./foundItem.controllers";

const router = Router();

// create found item : POST
router.post(
  "/",
  auth(),
  validateRequest(createFoundItemValidationSchema),
  FoundItemControllers.createFoundItem,
);

// get many found items : GET
router.get("/", FoundItemControllers.getAllFoundItems);

const FoundItemRoutes = router;
export default FoundItemRoutes;
