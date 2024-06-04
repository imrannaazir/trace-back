"use client";
import DotBackgroundSection from "@/components/ui/DotBackgroundSection";
import AppButton from "@/components/ui/AppButton";
import { FieldValues } from "react-hook-form";
import AppForm from "@/components/form/AppForm";
import AppInput from "@/components/form/AppInput";
import Divider from "@/components/ui/Divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/validationSchemas/auth.validation";
import { useLoginMutation } from "@/redux/api/auth.api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/features/auth.slice";

const LoginPage = () => {
  // hook
  const router = useRouter();
  const dispatch = useDispatch();

  // api hooks
  const [login] = useLoginMutation();
  const handleLogin = async (values: FieldValues) => {
    const toastId = toast.loading("Logging in...", { duration: 3000 });
    try {
      const response = await login(values).unwrap();
      if (response?.success) {
        toast.success("Logged in successfully.", {
          id: toastId,
        });
        dispatch(
          logIn({
            accessToken: response?.data?.token,
            user: {
              id: response?.data?.id,
              name: response?.data?.name,
              email: response?.data?.email,
            },
          })
        );
        router.push("/");
      }
    } catch (error) {
      toast.error(
        error?.data?.errorDetails?.issues?.[0]?.message ||
          error?.data?.errorDetails ||
          "Something went wrong!",
        { id: toastId }
      );
    }
  };

  const loginFormDefaultValues = {
    email: "imrannaaziremon007@gmail.com",
    password: "123456",
  };
  return (
    <DotBackgroundSection>
      <div className="flex justify-center items-center min-h-[calc(100vh-285px)]">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input   ">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Login to Trace Back
          </h2>

          <AppForm
            resolver={zodResolver(loginValidationSchema)}
            defaultValues={loginFormDefaultValues}
            onSubmit={handleLogin}
          >
            <div className="space-y-2 mt-4">
              <AppInput
                name="email"
                type="email"
                label="Email Address"
                placeholder="projectmayhem@fc.com"
              />
              <AppInput
                name="password"
                type="password"
                label="Password"
                placeholder="••••••••"
              />

              <Divider />
              <AppButton>Login &rarr;</AppButton>
            </div>
          </AppForm>
        </div>
      </div>
    </DotBackgroundSection>
  );
};

export default LoginPage;
