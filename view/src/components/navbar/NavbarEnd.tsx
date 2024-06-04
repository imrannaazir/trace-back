"use client";
import Link from "next/link";
import AppButton from "../ui/AppButton";
import { useAppSelector } from "@/redux/store";
import { selectToken } from "@/redux/features/auth.slice";
import AvatarDropdown from "./AvatarDropdown";

const NavbarEnd = () => {
  // hooks
  const accessToken = useAppSelector(selectToken);

  return accessToken ? (
    <AvatarDropdown />
  ) : (
    <div className="flex gap-2">
      <Link href={"/sign-up"}>
        <AppButton variant={"outline"}>Signup</AppButton>
      </Link>
      <Link href={"/log-in"}>
        <AppButton>Login</AppButton>
      </Link>
    </div>
  );
};

export default NavbarEnd;
