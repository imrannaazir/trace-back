import catchAsync from "../../utils/catchAsync";
import AuthServices from "./auth.services";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";

// register
const register = catchAsync(async (req, res) => {
  const { profile, ...rest } = req.body;

  const result = await AuthServices.register(rest, profile);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "User registered successfully",
    data: result,
  });
});

// login
const login = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await AuthServices.login(payload);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User logged in successfully",
    data: result,
  });
});
const AuthControllers = {
  register,
  login,
};

export default AuthControllers;
