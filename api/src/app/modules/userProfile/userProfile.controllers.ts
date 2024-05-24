import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import UserProfileServices from "./userProfile.services";

// get my profile
const getMyProfile = catchAsync(async (req, res) => {
  const myId = req.user.id;

  const result = await UserProfileServices.getMyProfile(myId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Profile retrieved successfully.",
    data: result,
  });
});

// update my profile
const updateMyProfile = catchAsync(async (req, res) => {
  const myId = req.user.id;
  const payload = req.body;

  const result = await UserProfileServices.updateMyProfile(payload, myId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User profile updated successfully.",
    data: result,
  });
});

const UserProfileControllers = {
  getMyProfile,
  updateMyProfile,
};

export default UserProfileControllers;
