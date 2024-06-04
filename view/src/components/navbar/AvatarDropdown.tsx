import { useAppSelector } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { selectUser } from "@/redux/features/auth.slice";
import Divider from "../ui/Divider";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../ui/Command";
import { BiCalendar, BiCreditCard, BiSmile, BiUser } from "react-icons/bi";
import { LuCalculator, LuLogOut, LuSettings } from "react-icons/lu";

const AvatarDropdown = () => {
  const user = useAppSelector(selectUser);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcna.png" alt="@shadcn" />
          <AvatarFallback className="uppercase">
            {user?.name?.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="bg-gray-50 dark:bg-zinc-900 dark:border-zinc-700 shadow-md">
        <div className="grid  gap-2">
          <div>
            <h3>{user?.name}</h3>
            <p className="text-xs">{user?.email}</p>
          </div>
          <Divider />
          <div>
            <Command className="rounded-lg   ">
              <CommandList>
                <CommandGroup>
                  <CommandItem className="hover:dark:bg-zinc-700">
                    <BiUser className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </CommandItem>
                  <CommandItem className="hover:dark:bg-zinc-700">
                    <LuLogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarDropdown;
