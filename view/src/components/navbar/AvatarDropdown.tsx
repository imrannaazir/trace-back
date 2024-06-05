"use client";
import { useAppSelector } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { logOut, selectUser } from "@/redux/features/auth.slice";
import Divider from "../ui/Divider";
import { Command, CommandGroup, CommandItem, CommandList } from "../ui/Command";
import { BiUser } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AvatarDropdown = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  // handle logout
  const handleLogout = () => {
    dispatch(logOut());
    toast.info("User logged out", { duration: 3000 });
  };

  // handle redirect to profile page
  const handleRedirectToProfile = () => {
    router.push("/my-profile");
  };

  const commandList = [
    {
      title: "My Profile",
      icon: <BiUser className="mr-2 h-4 w-4" />,
      onClick: handleRedirectToProfile,
    },
    {
      title: "Logout",
      icon: <LuLogOut className="mr-2 h-4 w-4" />,
      onClick: handleLogout,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcna.png" alt="@shadcn" />
          <AvatarFallback className="uppercase">
            {user?.email?.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="bg-gray-50 dark:bg-zinc-900 dark:border-zinc-700 shadow-md">
        <div className="grid  gap-2">
          <div>
            <h3>{user?.email}</h3>
            <p className="text-xs">{user?.email}</p>
          </div>
          <Divider />
          <div>
            <Command className="rounded-lg   ">
              <CommandList>
                <CommandGroup>
                  {commandList?.map((command, i) => (
                    <div
                      key={i}
                      className="w-full cursor-pointer"
                      onClick={command.onClick}
                    >
                      <CommandItem className="hover:dark:bg-zinc-700">
                        {command.icon}
                        <span>{command.title}</span>
                      </CommandItem>
                    </div>
                  ))}
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
