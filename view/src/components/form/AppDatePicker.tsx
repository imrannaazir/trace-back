import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { Button } from "../ui/Button";
import { cn } from "@/utils/cn";
import { format } from "date-fns";
import { LuCalendar } from "react-icons/lu";
import { Calendar } from "../ui/Calendar";

type TAppDatePicker = {
  name: string;
};

const AppDatePicker: FC<TAppDatePicker> = ({ name }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col">
          <h3>Date of birth</h3>
          <Popover>
            <PopoverTrigger asChild>
              <div>
                <Button
                  type="button"
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <LuCalendar className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
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
