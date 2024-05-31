import { FC, ReactNode, useEffect, useState } from "react";
import { Controller, useFormContext, UseFormSetValue } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ClassValue } from "clsx";
import { cn } from "@/utils/cn";
import { LuImagePlus } from "react-icons/lu";
import { BiTrash } from "react-icons/bi";
import Image from "next/image";

type TUploadImageProps = {
  isDisable?: boolean;
  fieldName: string;
  className?: ClassValue;
  children?: ReactNode;
  loader?: ReactNode;
  setValue?: UseFormSetValue<any>;
  fieldValue: string;
};

const UploadImage: FC<TUploadImageProps> = ({ className }) => {
  // hooks
  const { control, watch, setValue } = useFormContext();

  // cloudinary variables
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;
  const UploadPreset = process.env
    .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string;

  // local state
  const [image, setImage] = useState<File | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);

  // form state
  const imageUrl = watch("photo");
  console.log(imageUrl);

  useEffect(() => {
    (async () => {
      if (image) {
        setIsImageUploading(true);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("cloud_name", cloudName);
        formData.append("upload_preset", UploadPreset);
        formData.append("folder", "e-commerce");

        try {
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
          const data = await response.json();
          if (data.secure_url) {
            setValue("photo", data.secure_url);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsImageUploading(false);
        }
      }
    })();
  }, [UploadPreset, cloudName, image, setValue]);

  return (
    <Controller
      control={control}
      name="photo"
      render={() => (
        <div className={cn("  w-full", className)}>
          <input
            id="image"
            disabled={isImageUploading}
            type="file"
            className="hidden"
            onChange={(e) => {
              const selectedFile = e.target.files && e.target.files[0];
              if (selectedFile) {
                setImage(selectedFile);
              }
            }}
            accept="image/*"
          />

          {imageUrl ? (
            <div className="h-[200px] mb-2 relative">
              <Image
                className="w-full h-full object-contain object-left  overflow-hidden"
                fill
                alt=""
                src={imageUrl as string}
              />
              <BiTrash
                className={cn(
                  !imageUrl
                    ? "hidden"
                    : "absolute left-2 top-2 w-4 h-4 cursor-pointer text-red-500"
                )}
                onClick={() => {
                  setValue("photo", "");
                }}
              />
            </div>
          ) : (
            <UploadingButton
              imageUrl={imageUrl}
              isImageUploading={isImageUploading}
            />
          )}
        </div>
      )}
    />
  );
};
export default UploadImage;

// image uploading button component
const UploadingButton = ({
  imageUrl,
  isImageUploading,
}: {
  imageUrl: string;
  isImageUploading: boolean;
}) => {
  return (
    <label htmlFor="image" className="cursor-pointer">
      <div
        className={cn(
          "mt-2 border-2 border-dashed h-[200px] rounded-md flex items-center justify-center"
        )}
      >
        {isImageUploading ? (
          <AiOutlineLoading3Quarters className="w-6 h-6 animate-spin duration-500" />
        ) : (
          <LuImagePlus className="w-10 h-10 text-gray-500" />
        )}
      </div>
    </label>
  );
};
