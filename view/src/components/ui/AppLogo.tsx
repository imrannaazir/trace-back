import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import Link from "next/link";

const AppLogo = ({ className }: { className?: ClassValue }) => {
  return (
    <Link href={"/"} className={cn(className)}>
      <p>
        Trace<span className="text-blue-500">Back</span>
      </p>
    </Link>
  );
};

export default AppLogo;
