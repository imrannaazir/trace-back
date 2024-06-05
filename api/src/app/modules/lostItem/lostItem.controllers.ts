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

const LostItemControllers = {
  createLostItem,
  getAllLostItems,
};

export default LostItemControllers;
