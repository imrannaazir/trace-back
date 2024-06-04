"use client";
import { selectToken } from "@/redux/features/auth.slice";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

type TProtectedLayout = {
  children: ReactNode;
};
const ProtectLayout: FC<TProtectedLayout> = ({ children }) => {
  const router = useRouter();
  const accessToken = useAppSelector(selectToken);
  if (!accessToken) {
    router.push("/log-in");
  }

  return <>{children}</>;
};

export default ProtectLayout;
