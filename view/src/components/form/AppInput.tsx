import { FC } from "react";
import { Input } from "./Input";
import { Label } from "./Label";
import LabelInputContainer from "./LabelInputContainer";
import { Controller, useFormContext } from "react-hook-form";
import { error } from "console";

type TInputProps = {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
};

const AppInput: FC<TInputProps> = ({
  name,
  label,
  type,
  placeholder,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <LabelInputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              {...field}
              id={name}
              placeholder={placeholder}
              type={type}
              {...props}
            />
            {error && error.message && (
              <span className="text-sm text-red-400">{error.message}</span>
            )}
          </>
        )}
      />
    </LabelInputContainer>
  );
};

export default AppInput;
