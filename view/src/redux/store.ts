import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";
import baseApi from "./api/baseApi";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

// Persistor to persist the store
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
