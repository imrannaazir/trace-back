import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export type TGridBackgroundSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function GridBackgroundSection({
  children,
  className,
}: TGridBackgroundSectionProps) {
  return (
    <div
      className={cn(
        "h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center",
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
