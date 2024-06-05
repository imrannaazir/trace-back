"use client";
import { selectUser } from "@/redux/features/auth.slice";
import { useAppSelector } from "@/redux/store";
import { TProfileProps } from "@/types";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiEdit, BiImage } from "react-icons/bi";
import { SlLocationPin, SlPhone, SlUser } from "react-icons/sl";
type TMyBasicInfoCardProps = {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  profile: TProfileProps;
};
export default function MyBasicInfoCard({
  setIsEditing,
  profile,
}: TMyBasicInfoCardProps) {
  const user = useAppSelector(selectUser);
  return (
    <div className="dark:bg-zinc-800   p-5 rounded-md relative flex justify-between items-start ">
      <div className="flex gap-10">
        {/* image */}
        <div>
          {profile?.photo ? (
            <Image
              className="  rounded-md"
              src={profile?.photo}
              width={150}
              height={150}
              alt={profile?.name}
            />
          ) : (
            <div className="flex dark:bg-zinc-700 rounded-md w-[150px] h-[150px] items-center justify-center">
              <BiImage />
            </div>
          )}
        </div>
        <div className="space-y-3">
          <h2 className="flex items-center gap-5 ">
            <SlUser className="text-xl" />{" "}
            <span className=" font-semibold font-roboto text-tommyBlue">
              {profile?.name}
            </span>
          </h2>
          <h2 className="flex items-center gap-5 ">
            <AiOutlineMail className="text-xl" />{" "}
            <span className="">{user?.email}</span>
          </h2>
          <h2 className="flex items-center gap-5 ">
            <SlPhone className="text-xl" />{" "}
            <span className="">{profile?.phoneNumber || "Not added"}</span>
          </h2>
          <h2 className="flex items-center gap-5 ">
            <SlLocationPin className="text-xl" />{" "}
            <span className="">{profile?.address || "Not added"}</span>
          </h2>
        </div>
      </div>
      <button>
        <BiEdit onClick={() => setIsEditing(true)} />
      </button>
    </div>
  );
}
