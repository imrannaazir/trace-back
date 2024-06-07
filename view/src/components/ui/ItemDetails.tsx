import Image from "next/image";
import {
  LuClock,
  LuImage,
  LuMail,
  LuMapPin,
  LuPhoneCall,
} from "react-icons/lu";
import Divider from "./Divider";

type TItemDetailsProps = {
  itemTitle: string;
  category: string;
  location: string;
  date: string;
  phoneNumber: string;
  email: string;
  imageUrl: string;
  userName: string;
  userImageUrl: string;
  userEmail: string;
  description: string;
};
export default function ItemDetails({
  category,
  date,
  description,
  imageUrl,
  userName,
  userImageUrl,
  email,
  itemTitle,
  location,
  phoneNumber,
  userEmail,
}: TItemDetailsProps) {
  return (
    <div>
      <div className="w-full flex gap-4">
        <div className="w-[30%] space-y-4">
          {/* image */}
          <div className="bg-zinc-900 w-full rounded-md aspect-square flex items-center justify-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                height={200}
                width={200}
                alt="Item image"
                className="rounded-md"
              />
            ) : (
              <LuImage className="w-[200px] h-[200px] text-zinc-500" />
            )}
          </div>
        </div>
        <div className="w-[70%] space-y-4">
          <h3 className="text-2xl">
            {itemTitle}{" "}
            <span className="text-base dark:text-zinc-500">({category})</span>
          </h3>
          <div className="dark:text-zinc-500">
            {/* address and time*/}
            <div className="flex gap-4 text-sm mb-2">
              <p className="flex items-center gap-2">
                <LuMapPin className="dark:text-white" /> {location}
              </p>
              <p className="flex items-center gap-2">
                <LuClock className="dark:text-white" /> {date}
              </p>
            </div>
            {/* phone  */}
            <p className="flex items-center gap-2 text-lg">
              <LuPhoneCall className="dark:text-white" /> {phoneNumber}
            </p>
            {/* email  */}
            <p className="flex items-center gap-2 text-lg">
              <LuMail className="dark:text-white" /> {email}
            </p>
          </div>

          {/* user data */}
          <div className="flex items-center gap-4">
            {userImageUrl ? (
              <Image
                src={userImageUrl}
                height={70}
                width={70}
                alt="User image"
                className="rounded-full"
              />
            ) : (
              <div className="w-[70px] aspect-square dark:bg-zinc-800 rounded-full flex items-center justify-center">
                <LuImage className="w-[30px] h-[30px]" />
              </div>
            )}

            <div>
              <h4 className="text-lg">{userName}</h4>
              <p className="text-sm dark:text-zinc-500">{userEmail}</p>
            </div>
          </div>
          <Divider />
          {/* description */}
          <div>
            <h3 className="text-lg">Description</h3>
            <p className="dark:text-zinc-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
