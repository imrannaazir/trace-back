import { Router } from "express";
import AuthControllers from "./auth.controllers";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "./auth.validations";
import validateRequest from "../../middlewares/validateRequest";

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
const AuthRoutes = router;
export default AuthRoutes;
