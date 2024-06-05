import { Router } from "express";
import AuthControllers from "./auth.controllers";
import {
  changePasswordValidationSchema,
  loginValidationSchema,
  registerValidationSchema,
} from "./auth.validations";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";

const router = Router();

// register : POST
router.post(
  "/register",
  validateRequest(registerValidationSchema),
  AuthControllers.register,
);

// login : POST
router.post(
  "/login",
  validateRequest(loginValidationSchema),
  AuthControllers.login,
);

// change password : PUT
router.put(
  "/change-password",
  auth(),
  validateRequest(changePasswordValidationSchema),
  AuthControllers.changePassword,
);
const AuthRoutes = router;
export default AuthRoutes;
