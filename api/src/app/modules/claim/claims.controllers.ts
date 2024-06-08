import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import ClaimServices from "./claims.services";

// create claim
const createClaim = catchAsync(async (req, res) => {
  const payload = req.body;
  const userId = req.user.id;
  const result = await ClaimServices.createClaim(payload, userId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Claim created successfully.",
    data: result,
  });
});

// get all claims
const getAllClaims = catchAsync(async (req, res) => {
  const result = await ClaimServices.getAllClaims();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "All claims retrieved successfully.",
    data: result,
  });
});
// get single claim
const getSingleClaim = catchAsync(async (req, res) => {
  const claimId = req.params.claimId;
  const result = await ClaimServices.getSingleClaim(claimId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Single claim retrieved successfully.",
    data: result,
  });
});

// get all my claims
const getMyAllClaims = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const result = await ClaimServices.getMyAllClaims(userId);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "All my claims retrieved successfully.",
    data: result,
  });
});

// update claim status
const updateClaimStatus = catchAsync(async (req, res) => {
  const payload = req.body;
  const claimId = req.params.id;
  const result = await ClaimServices.updateClaimStatus(payload, claimId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Claim updated successfully.",
    data: result,
  });
});
const ClaimControllers = {
  createClaim,
  getAllClaims,
  updateClaimStatus,
  getMyAllClaims,
  getSingleClaim,
};

export default ClaimControllers;
