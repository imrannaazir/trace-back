import { FC } from "react";
import { Label } from "./Label";
import LabelInputContainer from "./LabelInputContainer";
import { Controller, useFormContext } from "react-hook-form";
import { ClassValue } from "clsx";
import { TextArea } from "./TextArea";

type TInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: ClassValue;
};

const AppTextArea: FC<TInputProps> = ({
  name,
  label,
  className,
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
            <TextArea
              {...field}
              id={name}
              className={`${className} `}
              placeholder={placeholder}
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

export default AppTextArea;
