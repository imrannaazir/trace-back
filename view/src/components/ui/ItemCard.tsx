"use client";
import Image from "next/image";
import AppButton from "./AppButton";

const ItemCard = () => {
  return (
    <div className=" dark:bg-black bg-white max-w-96  rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  hover:shadow-black/[0.1] hover:dark:shadow-white/[0.05] flex flex-col justify-between">
      {/* image */}
      <div className="relative mx-auto flex  py-3 items-center justify-center  ">
        {/* buttons */}
        <Image
          className="group-hover:scale-110  transition-all duration-300 h-full"
          src={
            "https://ui.aceternity.com/_next/image?url=%2Fjordans.webp&w=640&q=75"
          }
          width={260}
          height={260}
          alt="product1"
        />
      </div>
      {/* info */}
      <div className="flex flex-col justify-between gap-2">
        {/* title */}
        <h5 className="font-semibold">Dark Chocolate</h5>

        <div className="space-y-1 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          vitae atque vero rem laborum recusandae alias quae pariatur! Omnis,
          nam.
        </div>
        {/* buttons */}

        <div className="flex items-center justify-between">
          <p>
            Lost at: <span>10:22 pm</span>
          </p>
          <AppButton className="max-w-[100px]">View</AppButton>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
