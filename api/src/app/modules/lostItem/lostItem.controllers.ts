import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import pick from "../../utils/pick";
import { lostItemsFilterableFields, optionFields } from "./lostItem.constant";
import LostItemServices from "./lostItem.services";

// create lost item
const createLostItem = catchAsync(async (req, res) => {
  const result = await LostItemServices.createLostItem(req.body, req.user.id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Lost item created successfully.",
    data: result,
  });
});

// get all lost items
const getAllLostItems = catchAsync(async (req, res) => {
  const filters = pick(req.query, lostItemsFilterableFields);
  const options = pick(req.query, optionFields);
  const result = await LostItemServices.getAllLostItems(
    filters as Record<string, unknown>,
    options as Record<string, unknown>,
  );

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: `Lost items retrieved successfully.`,
    data: result.result,
    meta: result.meta,
  });
});

// get all my lost items
const getAllMyLostItems = catchAsync(async (req, res) => {
  const userId = req?.user?.id;
  const result = await LostItemServices.getAllMyLostItems(userId);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: `My lost items retrieved successfully.`,
    data: result,
  });
});

// get single lost item
const getSingleLostItem = catchAsync(async (req, res) => {
  const lostItemId = req.params.lostItemId;
  const result = await LostItemServices.getSingleLostItem(lostItemId);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: `Lost item retrieved successfully.`,
    data: result,
  });
});

// update lost item
const updateLostItem = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  const payload = req.body;
  const lostItemId = req.params.lostItemId;
  const result = await LostItemServices.updateSingleLostItem(
    payload,
    lostItemId,
    userId,
  );

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Lost item updated successfully.",
    data: result,
  });
});

const LostItemControllers = {
  createLostItem,
  getAllLostItems,
  getAllMyLostItems,
  getSingleLostItem,
  updateLostItem,
};

export default LostItemControllers;
