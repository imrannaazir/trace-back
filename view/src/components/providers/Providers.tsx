"use client";

import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

type TProvidersProps = {
  children: ReactNode;
};

const Providers: FC<TProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
