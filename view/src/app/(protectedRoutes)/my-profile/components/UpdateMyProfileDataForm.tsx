"use client";
import AppForm from "@/components/form/AppForm";
import AppInput from "@/components/form/AppInput";
import UploadImage from "@/components/form/UploadImage";
import AppButton from "@/components/ui/AppButton";
import { useUpdateProfileMutation } from "@/redux/api/profile.api";
import { logOut } from "@/redux/features/auth.slice";
import { useAppDispatch } from "@/redux/hooks";
import { TProfileProps } from "@/types";
import { updateProfileValidationSchema } from "@/validationSchemas/profile.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, FC, SetStateAction } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { BiX } from "react-icons/bi";
import { toast } from "sonner";

type TUpdateMyProfileDataProps = {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  profile: TProfileProps;
};

const UpdateMyProfileData: FC<TUpdateMyProfileDataProps> = ({
  setIsEditing,
  profile,
}) => {
  // hooks
  const dispatch = useAppDispatch();
  // api hooks
  const [updateProfile] = useUpdateProfileMutation();
  const myProfileDefaultValues = {
    name: profile?.name || "",
    email: profile?.user?.email || "",
    phoneNumber: profile?.phoneNumber || "",
    address: profile?.address || "",
    age: profile?.age || 0,
    bio: profile?.bio || "",
    photo: profile?.photo || "",
  };

  // handle profile update
  const handleUpdateProfile = async (values: FieldValues) => {
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([_key, value]) => !!value)
    );

    const toastId = toast.loading("Updating...", { duration: 3000 });
    try {
      const response = await updateProfile(filteredValues).unwrap();
      if (
        response?.success &&
        filteredValues?.email !== myProfileDefaultValues?.email
      ) {
        toast.success(
          "Profile updated successfully, Please login with new email.",
          { id: toastId }
        );
        dispatch(logOut());
      } else if (response?.success) {
        toast.success("Profile updated successfully.", { id: toastId });
      }
    } catch (error: any) {
      toast.error(
        error?.data?.errorDetails?.issues?.[0]?.message ||
          error?.data?.errorDetails ||
          "Something went wrong!",
        { id: toastId }
      );
    }
  };

  return (
    <div className="dark:bg-zinc-800 p-5 rounded-md relative flex justify-between items-start">
      <div className="w-full">
        <AppForm
          resolver={zodResolver(updateProfileValidationSchema)}
          onSubmit={handleUpdateProfile}
          defaultValues={myProfileDefaultValues}
        >
          <div className="flex gap-4 items-end">
            <UploadImage
              className="w-[150px] h-[150px]"
              fieldName="photo"
              setValue={() => {}}
              fieldValue=""
            />
            <div className="grid grid-cols-3 gap-4">
              <AppInput
                name="name"
                type="text"
                label="Name"
                placeholder="John Doe"
              />
              <AppInput
                name="email"
                type="email"
                label="Email Address"
                placeholder="projectmayhem@fc.com"
              />
              <AppInput
                name="phoneNumber"
                type="text"
                label="Phone Number"
                placeholder="(123) 456-7890"
              />
              <AppInput
                name="address"
                type="text"
                label="Address"
                placeholder="123 Paper Street"
              />
              <AppInput name="age" type="number" label="Age" placeholder="30" />
              <AppInput
                name="bio"
                type="text"
                label="Bio"
                placeholder="A short bio about yourself"
              />
            </div>
            <AppButton className="w-[200px]">Update &rarr;</AppButton>
          </div>
        </AppForm>
      </div>
      <button onClick={() => setIsEditing(false)}>
        <BiX />
      </button>
    </div>
  );
};

export default UpdateMyProfileData;
