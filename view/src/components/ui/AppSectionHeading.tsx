import { ClassValue } from "clsx";
import Divider from "./Divider";
import { cn } from "@/utils/cn";

const AppSectionHeading = ({
  title,
  className,
}: {
  title: string;
  className?: ClassValue;
}) => {
  return (
    <div
      className={cn(
        "text-xl text-center font-semibold flex flex-col items-center gap-1",
        className
      )}
    >
      <span>{title}</span>
      <Divider className="max-w-[200px]" />
    </div>
  );
};

export default AppSectionHeading;
