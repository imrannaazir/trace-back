import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import { FC } from "react";

type TDividerProps = {
  className?: ClassValue;
};

const Divider: FC<TDividerProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent   h-[1px] w-full",
        className
      )}
    />
  );
};

export default Divider;
