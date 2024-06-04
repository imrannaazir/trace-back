"use client";
import { Toaster } from "sonner";
import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

type TProvidersProps = {
  children: ReactNode;
};

const Providers: FC<TProvidersProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          {children}
          <Toaster position="top-center" />
        </PersistGate>
      </Provider>
    </>
  );
};

export default Providers;
