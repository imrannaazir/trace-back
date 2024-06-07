/* "use client";
import React, { Suspense } from "react";
import DotBackgroundSection from "@/components/ui/DotBackgroundSection";
import AppButton from "@/components/ui/AppButton";
import { FieldValues } from "react-hook-form";
import AppForm from "@/components/form/AppForm";
import AppInput from "@/components/form/AppInput";
import Divider from "@/components/ui/Divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { addFoundItemValidationSchema } from "@/validationSchemas/item.validation";
import AppTExtArea from "@/components/form/AppTextArea";
import UploadImage from "@/components/form/UploadImage";
import AppDatePicker from "@/components/form/AppDatePicker";
import AppSelector from "@/components/form/AppSelector";
import { useGetCategoryListQuery } from "@/redux/api/category.api";
import { TCategoryProps } from "@/types/category.types";
import { toast } from "sonner";
import { useCreateFoundItemMutation } from "@/redux/api/foundItem.api";

const AddFoundItem = () => {
  // api hooks
  const [createFoundItem] = useCreateFoundItemMutation();
  const { data: categoriesData, isFetching } =
    useGetCategoryListQuery(undefined);

  const handleAddFoundItem = async (values: FieldValues) => {
    const toastId = toast.loading("Adding new found item...");
    try {
      const response = await createFoundItem(values).unwrap();
      if (response?.success) {
        toast.success("New found item added successfully.", {
          id: toastId,
        });
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

  const defaultValues = {
    categoryId: "",
    foundItemName: "",
    description: "",
    phoneNumber: "",
    emailAddress: "imrannaaziremon@gmail.com",
    foundDate: "",
    location: "",
    photo: "",
  };

  const categoryOptions =
    categoriesData?.data?.map((category: TCategoryProps) => ({
      label: category?.name,
      value: category?.id,
    })) || [];

  if (isFetching) {
    return <div>loading...</div>;
  }
  return (
    <DotBackgroundSection>
      <div className="max-w-screen-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  ">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Add Found Item
        </h2>

        <AppForm
          resolver={zodResolver(addFoundItemValidationSchema)}
          defaultValues={defaultValues}
          onSubmit={handleAddFoundItem}
        >
          <div className="space-y-2 mt-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <AppSelector
                name="categoryId"
                label="Category"
                options={categoryOptions}
              />
              <AppInput
                name="foundItemName"
                type="text"
                label="Item name"
                placeholder="iPhone 15 pro max"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <AppInput
                name="location"
                type="text"
                label="Found Address"
                placeholder="Bankra, Jhikorgaca, Jessore."
              />
              <AppDatePicker name="foundDate" label="Found Date" />
            </div>
            <AppTExtArea
              className="h-[200px]"
              name="description"
              label="Description"
              placeholder="This phone has a scratch on the back side ..."
            />
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <AppInput
                name="emailAddress"
                type="email"
                label="Contact Email"
                disabled={true}
                placeholder="imrannaaziremon@gmail.com"
              />
              <AppInput
                name="phoneNumber"
                type="text"
                label="Contact Number"
                placeholder="0149423792"
              />
            </div>
            <UploadImage
              fieldName="photo"
              setValue={() => {}}
              fieldValue={""}
            />
            <Divider />
            <AppButton>Add found item &rarr;</AppButton>
          </div>
        </AppForm>
      </div>
    </DotBackgroundSection>
  );
};

const WrappedAddFoundItem = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AddFoundItem />
  </Suspense>
);

export default WrappedAddFoundItem;
 */

import React from "react";

export default function page() {
  return <div>page</div>;
}
