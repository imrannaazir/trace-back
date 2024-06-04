"use client";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { cn } from "@/utils/cn";
import { format } from "date-fns";
import { LuCalendar } from "react-icons/lu";
import { Calendar } from "../ui/Calendar";
import { Label } from "@radix-ui/react-label";
import { Input } from "./Input";

type TAppDatePicker = {
  name: string;
  label: string;
};

const AppDatePicker: FC<TAppDatePicker> = ({ name, label }) => {
  const { control, watch } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col w-full">
          <Label htmlFor={name}>{label}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <div className="relative cursor-pointer">
                <Input
                  type="button"
                  className={cn(
                    "w-full   pl-3 text-left font-normal cursor-pointer",
                    !field.value &&
                      "focus:text-neutral-400 dark:focus:text-neutral-600"
                  )}
                  value={field.value ? format(field.value, "PPP") : undefined}
                  placeholder="Pick a date"
                />

                <LuCalendar className="absolute  right-4 top-3.5 ml-auto h-4 w-4 opacity-50" />
                <span
                  className={cn(
                    field.value
                      ? "hidden"
                      : "absolute left-4 top-3 text-sm text-neutral-400  "
                  )}
                >
                  Pick a date
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0  bg-gray-50 dark:bg-zinc-950 "
              align="start"
            >
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      )}
    />
  );
};

export default AppDatePicker;
