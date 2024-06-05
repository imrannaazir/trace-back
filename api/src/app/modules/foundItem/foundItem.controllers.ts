import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import FoundItemServices from "./foundItem.services";
import pick from "../../utils/pick";
import { foundItemsFilterableFields, optionFields } from "./foundItem.constant";

// create found item
const createFoundItem = catchAsync(async (req, res) => {
  const result = await FoundItemServices.createFoundItem(req.body, req.user.id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Found item created successfully.",
    data: result,
  });
});

// get all found items
const getAllFoundItems = catchAsync(async (req, res) => {
  const filters = pick(req.query, foundItemsFilterableFields);
  const options = pick(req.query, optionFields);
  const result = await FoundItemServices.getAllFoundItems(
    filters as Record<string, unknown>,
    options as Record<string, unknown>,
  );

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: `Found items retrieved successfully.`,
    data: result.result,
    meta: result.meta,
  });
});

// get all my found items
const getAllMyFoundItems = catchAsync(async (req, res) => {
  const userId = req?.user?.id;
  const result = await FoundItemServices.getAllMyFoundItems(userId);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: `My Found items retrieved successfully.`,
    data: result,
  });
});

// get single found item

const getSingleFoundItem = catchAsync(async (req, res) => {
  const foundItemId = req.params.foundItemId;
  const result = await FoundItemServices.getSingleFoundItem(foundItemId);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: `Found item retrieved successfully.`,
    data: result,
  });
});
const FoundItemControllers = {
  createFoundItem,
  getAllFoundItems,
  getAllMyFoundItems,
  getSingleFoundItem,
};

export default FoundItemControllers;
