import { FC, ReactNode, useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ClassValue } from "clsx";
import { cn } from "@/utils/cn";
import { LuImagePlus } from "react-icons/lu";
import AppButton from "../ui/AppButton";
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

const UploadImage: FC<TUploadImageProps> = ({
  fieldName,
  setValue,
  className,
  children,
  loader,
  fieldValue,
}) => {
  // invoke hooks
  const cloudName = "dm6yrvvxj";
  const UploadPreset = "trace-back";
  // local state
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isImageUploading, setIsImageUploading] = useState(false);

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
            setImageUrl(data.secure_url);
            if (setValue) {
              setValue(fieldName, data.secure_url);
            }
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsImageUploading(false);
        }
      }
    })();
  }, [UploadPreset, cloudName, image, setValue, fieldName]);

  let UploadingButton: ReactNode = null;

  if (children) {
    if (loader && isImageUploading) {
      UploadingButton = loader;
    } else {
      UploadingButton = children;
    }
  } else {
    UploadingButton = (
      <label htmlFor={fieldName} className="cursor-pointer">
        <div
          className={cn(
            "mt-2 border-2 border-dashed h-[200px] rounded-md flex items-center justify-center"
          )}
        >
          {isImageUploading ? (
            <AiOutlineLoading3Quarters className="w-6 h-6 animate-spin duration-500" />
          ) : imageUrl ? (
            <Image
              className="max-h-[180px]"
              fill
              alt=""
              src={imageUrl as string}
            />
          ) : (
            <LuImagePlus className="w-10 h-10 text-gray-500" />
          )}
        </div>
      </label>
    );
  }

  return (
    <div className={cn("relative  w-full", className)}>
      <input
        id={fieldName}
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

      {UploadingButton}

      <BiTrash
        className={cn(
          !imageUrl ? "hidden" : "absolute left-2 top-2 w-4 h-4 cursor-pointer"
        )}
        onClick={() => {
          if (setValue && fieldName) {
            setValue(fieldName, "");
          }
          setImageUrl("");
        }}
      />
    </div>
  );
};

export default UploadImage;
