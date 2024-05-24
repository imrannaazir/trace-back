import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";
import BottomGradient from "./BottomGradient";

const button = cva(
  "button  relative group/btn  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] whitespace-nowrap ",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-800 to-neutral-600 block dark:bg-zinc-800 ",
        outline: "bg-transparent",
      },
      size: {
        small: "",
        large: "px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
    },
  }
);

export interface ButtonsProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const AppButton: FC<ButtonsProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <button className={cn(button({ variant, size, className }))} {...props}>
      {children}
      <BottomGradient />
    </button>
  );
};

export default AppButton;
