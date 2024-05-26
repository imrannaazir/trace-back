import { FC, ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, unknown>;
};

type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

const AppForm: FC<TFormProps> = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  // submit handler
  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data });

    onSubmit(data);
    reset();
  };

  console.log(methods.watch("firstName"));

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default AppForm;
