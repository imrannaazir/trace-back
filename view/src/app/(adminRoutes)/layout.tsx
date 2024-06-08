"use client";
import { selectToken, selectUser } from "@/redux/features/auth.slice";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
import { toast } from "sonner";

type TProtectedLayout = {
  children: ReactNode;
};
const ProtectLayout: FC<TProtectedLayout> = ({ children }) => {
  const router = useRouter();
  const accessToken = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);

  if (!accessToken || user?.role !== "ADMIN") {
    toast.error("Unauthorized access!", { duration: 3000 });
    router.push("/");
  }

  return <>{children}</>;
};

export default ProtectLayout;
