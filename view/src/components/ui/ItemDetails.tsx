import Image from "next/image";
import { LuClock, LuMail, LuMapPin, LuPhoneCall } from "react-icons/lu";
import Divider from "./Divider";

export default function ItemDetails() {
  return (
    <div>
      <div className="w-full flex gap-4">
        <div className="w-[30%] space-y-4">
          {/* image */}
          <div className="bg-zinc-900  w-full rounded-md aspect-square flex items-center justify-center">
            <Image
              src={
                "https://res.cloudinary.com/dk9rocpyb/image/upload/v1717255874/Profile_Images/ouclyjcofry2btvb4at9.png"
              }
              height={200}
              width={200}
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
        <div className="w-[70%] space-y-4">
          <h3 className="text-2xl">
            Item title pro max{" "}
            <span className="text-base dark:text-zinc-500">(Electronics)</span>
          </h3>
          <div className="dark:text-zinc-500">
            {/* address and time*/}
            <div className="flex gap-4 text-sm">
              <p className="flex items-center gap-2">
                <LuMapPin className="dark:text-white" /> Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-2">
                <LuClock className="dark:text-white" /> 20 June 2024
              </p>
            </div>
            {/* phone  */}
            <p className="flex items-center gap-2 text-lg">
              <LuPhoneCall className="dark:text-white" /> +909788787
            </p>
            {/* phone  */}
            <p className="flex items-center gap-2 text-lg">
              <LuMail className="dark:text-white" />
              imrannaazir@gmail.com
            </p>
          </div>

          {/* user data */}
          <div className="flex items-center gap-4">
            <Image
              src={
                "https://res.cloudinary.com/dk9rocpyb/image/upload/v1717255874/Profile_Images/ouclyjcofry2btvb4at9.png"
              }
              height={70}
              width={70}
              alt=""
              className="rounded-full"
            />

            <div className="">
              <h4 className="text-lg">Imran N. Emon</h4>
              <p className="text-sm  dark:text-zinc-500">
                imrannaziremon@gmail.com
              </p>
            </div>
          </div>
          <Divider />
          {/* description */}
          <div>
            <h3 className="text-lg">Description</h3>
            <p className="dark:text-zinc-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              commodi, amet atque eligendi accusamus, vel, facilis nemo neque
              earum itaque id dolore. Repellendus ad nemo nam earum minus!
              Praesentium, ea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
