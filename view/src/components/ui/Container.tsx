import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import { FC, ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: ClassValue;
};
const Container: FC<TContainerProps> = ({ children, className }) => {
  return (
    <main className={cn("max-w-7xl mx-auto px-4", className)}>{children}</main>
  );
};

export default Container;
