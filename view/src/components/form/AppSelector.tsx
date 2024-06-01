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

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

type TAppSelector = {
  name: string;
  label: string;
};
const AppSelector: React.FC<TAppSelector> = ({ name, label }) => {
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
              {/* <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {field?.value
                  ? frameworks.find(
                      (framework) => framework.value === field?.value
                    )?.label
                  : "Select framework..."}
                <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button> */}
              <div className="relative cursor-pointer">
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
                      ? frameworks.find(
                          (framework) => framework.value === field?.value
                        )?.label
                      : "Select framework..."}
                  </span>
                  <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />{" "}
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandList>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
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
                            field?.value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
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
