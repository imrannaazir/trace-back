"use client";
import Image from "next/image";
import AppButton from "./AppButton";
import { FC } from "react";
import { BiImage } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import Link from "next/link";
import { LuMapPin } from "react-icons/lu";
type TItemCardProps = {
  photo: string;
  description: string;
  title: string;
  type: "lost" | "found" | "claim";
  date: string;
  redirectPath: string;
  id: string;
  location?: string;
};
const ItemCard: FC<TItemCardProps> = ({
  photo,
  title,
  description,
  type,
  date,
  redirectPath,
  id,
  location,
}) => {
  console.log({
    photo,
    title,
    description,
    type,
    date,
    redirectPath,
    id,
    location,
  });

  return (
    <div className=" dark:bg-black bg-white max-w-96  rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  hover:shadow-black/[0.1] hover:dark:shadow-white/[0.05] flex flex-col justify-between">
      {/* image */}
      <div className="relative mx-auto flex    items-center justify-center w-full ">
        {/* buttons */}
        {photo ? (
          <div className="dark:bg-zinc-800 w-full min-h-[200px] rounded-md flex items-center justify-center">
            <Image
              className="  min-h-[200px] rounded-md object-cover transition-all duration-300  "
              src={photo as string}
              fill
              alt={title}
            />
          </div>
        ) : (
          <div className="dark:bg-zinc-800 w-full min-h-[200px] rounded-md flex items-center justify-center">
            <BiImage className="w-[50px] h-[50px] dark:text-zinc-500" />
          </div>
        )}
      </div>
      {/* info */}
      <div className="flex flex-col justify-between gap-2">
        {/* title */}
        <h5 className="font-semibold">{title}</h5>

        <div className="space-y-1 text-gray-500">
          {description.slice(0, 40)}
        </div>
        {/* buttons */}

        <div className="flex items-end justify-between">
          <div>
            <p className="flex items-center gap-2 capitalize">
              <FaClock />
              {type} at: <span>10:22 pm</span>
            </p>
            {type !== "claim" && (
              <p className="flex items-center gap-2 capitalize">
                <LuMapPin />
                {type} in: <span className="text-sm">{location}</span>
              </p>
            )}
          </div>
          <Link href={`${redirectPath}/${id}`}>
            <AppButton className="max-w-[100px]">View</AppButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
