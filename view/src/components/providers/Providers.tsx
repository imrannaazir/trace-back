"use client";
import { Toaster } from "sonner";
import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

type TProvidersProps = {
  children: ReactNode;
};

const Providers: FC<TProvidersProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        {children}
        <Toaster position="top-center" />
      </Provider>
    </>
  );
};

export default Providers;
