import { Router } from "express";
import AuthRoutes from "../modules/auth/auth.routes";
import { TModuleRoute } from "../types/global.types";
import FoundItemCategoryRoutes from "../modules/foundItemCategories/foundItemCategory.routes";
import FoundItemRoutes from "../modules/foundItem/foundItem.routes";
import ClaimRoutes from "../modules/claim/claim.routes";
import UserProfileRoutes from "../modules/userProfile/userProfile.routes";
import LostItemRoutes from "../modules/lostItem/lostItem.routes";

const router = Router();

const routes: TModuleRoute[] = [
  {
    path: "/",
    route: AuthRoutes,
  },
  {
    path: "/found-item-categories",
    route: FoundItemCategoryRoutes,
  },
  {
    path: "/found-items",
    route: FoundItemRoutes,
  },
  {
    path: "/lost-items",
    route: LostItemRoutes,
  },
  {
    path: "/claims",
    route: ClaimRoutes,
  },
  {
    path: "/my-profile",
    route: UserProfileRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
