"use client";
import DotBackgroundSection from "@/components/ui/DotBackgroundSection";
import AppButton from "@/components/ui/AppButton";
import { FieldValues } from "react-hook-form";
import AppForm from "@/components/form/AppForm";
import AppInput from "@/components/form/AppInput";
import Divider from "@/components/ui/Divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/validationSchemas/auth.validation";

const LoginPage = () => {
  const handleRegister = async (values: FieldValues) => {
    console.log(values);
  };
  return (
    <DotBackgroundSection>
      <div className="flex justify-center items-center min-h-[calc(100vh-285px)]">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input   ">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Aceternity
          </h2>

          <AppForm
            resolver={zodResolver(loginValidationSchema)}
            defaultValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleRegister}
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
