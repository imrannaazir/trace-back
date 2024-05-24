import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import FoundItemCategoryServices from "./foundItemCategory.services";

// create found item category
const createFoundItemCategory = catchAsync(async (req, res) => {
  const result = await FoundItemCategoryServices.createFoundItemCategory(
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Found item category created successfully.",
    data: result,
  });
});

const FoundItemCategoryControllers = {
  createFoundItemCategory,
};
export default FoundItemCategoryControllers;
