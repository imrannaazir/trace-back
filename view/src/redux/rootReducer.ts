import baseApi from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import authSlice from "./features/auth.slice";
const persistConfig = {
  key: "auth",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice);
export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: persistedAuthReducer,
};
