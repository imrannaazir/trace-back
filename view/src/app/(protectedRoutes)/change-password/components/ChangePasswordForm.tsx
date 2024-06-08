"use client";
import DotBackgroundSection from "@/components/ui/DotBackgroundSection";
import AppButton from "@/components/ui/AppButton";
import { FieldValues } from "react-hook-form";
import AppForm from "@/components/form/AppForm";
import AppInput from "@/components/form/AppInput";
import Divider from "@/components/ui/Divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordValidationSchema } from "@/validationSchemas/auth.validation";
import { useChangePasswordMutation } from "@/redux/api/auth.api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const ChangePasswordForm = () => {
  // hook
  const router = useRouter();

  // api hooks
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const handleChangePassword = async (values: FieldValues) => {
    const toastId = toast.loading("Changing password...", { duration: 3000 });
    try {
      const response = await changePassword(values).unwrap();
      if (response?.success) {
        toast.success("Password changed.", {
          id: toastId,
        });

        router.push("/");
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

  if (isLoading) {
    return <div>loading...</div>;
  }

  const changePasswordFormDefaultValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  return (
    <DotBackgroundSection>
      <div className="flex justify-center items-center min-h-[calc(100vh-285px)]">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input   ">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Change Password
          </h2>

          <AppForm
            resolver={zodResolver(changePasswordValidationSchema)}
            defaultValues={changePasswordFormDefaultValues}
            onSubmit={handleChangePassword}
          >
            <div className="space-y-2 mt-4">
              <AppInput
                name="currentPassword"
                type="password"
                label="Current password"
                placeholder="••••••••"
              />
              <AppInput
                name="newPassword"
                type="password"
                label="New password"
                placeholder="••••••••"
              />
              <AppInput
                name="confirmPassword"
                type="password"
                label="Confirm password"
                placeholder="••••••••"
              />

              <Divider />
              <AppButton>Change Password &rarr;</AppButton>
            </div>
          </AppForm>
        </div>
      </div>
    </DotBackgroundSection>
  );
};

export default ChangePasswordForm;
