"use client";

import * as React from "react";
import { Button } from "../ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/Command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";
import { cn } from "@/utils/cn";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./Input";

export type TLabelValuePair = {
  value: string;
  label: string;
};

type TAppSelector = {
  name: string;
  label: string;
  options: TLabelValuePair[];
};
const AppSelector: React.FC<TAppSelector> = ({ name, label, options }) => {
  const [open, setOpen] = React.useState(false);
  const { control, setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col w-full">
          <label htmlFor={name}>{label}</label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <div className="relative cursor-pointer ">
                <Input
                  type="button"
                  className={cn(
                    "w-full   pl-3 text-left font-normal cursor-pointer",
                    !field.value &&
                      "focus:text-neutral-400 dark:focus:text-neutral-600"
                  )}
                  placeholder="Pick a date"
                />

                <div
                  className={cn(
                    "absolute  inset-0 text-sm text-neutral-400 flex justify-between items-center px-4 "
                  )}
                >
                  <span>
                    {field?.value
                      ? options.find((option) => option.value === field?.value)
                          ?.label
                      : "Select option..."}
                  </span>
                  <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />{" "}
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 bg-gray-50 dark:bg-zinc-900">
              <Command>
                <CommandInput placeholder="Search option..." />
                <CommandEmpty>No option found.</CommandEmpty>
                <CommandList>
                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={(currentValue) => {
                          setValue(
                            name,
                            currentValue === field?.value ? "" : currentValue
                          );
                          setOpen(false);
                        }}
                      >
                        <LuCheck
                          className={cn(
                            "mr-2 h-4 w-4",
                            field?.value === option.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      )}
    />
  );
};

export default AppSelector;
