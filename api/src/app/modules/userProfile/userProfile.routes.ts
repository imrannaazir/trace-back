import { Router } from "express";
import auth from "../../middlewares/auth";
import UserProfileControllers from "./userProfile.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { updateProfileValidationSchema } from "./userProfile.validations";

const router = Router();

// get my profile  : GET
router.get("/", auth(), UserProfileControllers.getMyProfile);

// update my profile : PUT
router.put(
  "/",
  auth(),
  validateRequest(updateProfileValidationSchema),
  UserProfileControllers.updateMyProfile,
);

const UserProfileRoutes = router;
export default UserProfileRoutes;
