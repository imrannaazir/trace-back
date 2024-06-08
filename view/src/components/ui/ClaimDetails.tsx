import Image from "next/image";
import { LuClock, LuImage, LuMail, LuPhoneCall } from "react-icons/lu";

type TClaimDetailsProps = {
  date: string;
  phoneNumber: string;
  imageUrl: string;
  userName: string;
  userImageUrl: string;
  userEmail: string;
  description: string;
  status: string;
};
export default function ClaimDetails({
  date,
  description,
  imageUrl,
  userName,
  userImageUrl,
  phoneNumber,
  userEmail,
  status,
}: TClaimDetailsProps) {
  return (
    <div>
      <div className="w-full  gap-4">
        <div className="w-full space-y-4">
          {/* image */}
          <div className="bg-zinc-900 w-full rounded-md aspect-video flex items-center justify-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                height={900}
                width={900}
                alt="Item image"
                className="rounded-md w-full h-full"
              />
            ) : (
              <LuImage className="w-[200px] h-[200px] text-zinc-500" />
            )}
          </div>
        </div>
        <div className=" flex  justify-between space-y-4">
          <div className="dark:text-zinc-500">
            <h3 className="dark:text-white text-lg mb-2">Claimed lost at:</h3>
            {/* date*/}
            <div className="flex gap-4 text-sm mb-2">
              <p className="flex items-center gap-2">
                <LuClock className="dark:text-white" /> {date}
              </p>
            </div>
            {/* status  */}
            <h3 className="dark:text-white text-lg">Status: {status}</h3>
          </div>

          {/* user data */}
          <div>
            <h3 className="text-lg mb-2">Claimed by:</h3>
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
                <p className="flex items-center gap-2 text-sm dark:text-zinc-500">
                  <LuPhoneCall className="dark:text-white" /> {phoneNumber}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* description */}
        <div>
          <h3 className="text-lg">Claim Description</h3>
          <p className="dark:text-zinc-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
