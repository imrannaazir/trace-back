"use client";
import DotBackgroundSection from "@/components/ui/DotBackgroundSection";
import AppButton from "@/components/ui/AppButton";
import { FieldValues } from "react-hook-form";
import AppForm from "@/components/form/AppForm";
import AppInput from "@/components/form/AppInput";
import Divider from "@/components/ui/Divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { addLostItemValidationSchema } from "@/validationSchemas/item.validation";
import AppTExtArea from "@/components/form/AppTextArea";
import UploadImage from "@/components/form/UploadImage";
import AppDatePicker from "@/components/form/AppDatePicker";
import AppSelector from "@/components/form/AppSelector";
import { useGetCategoryListQuery } from "@/redux/api/category.api";
import { TCategoryProps } from "@/types/category.types";
import { toast } from "sonner";
import { useCreateLostItemMutation } from "@/redux/api/lostItem.api";

const AddLostItemPage = () => {
  //  api hooks
  const [createLostItem] = useCreateLostItemMutation();
  const { data: categoriesData, isFetching } =
    useGetCategoryListQuery(undefined);

  const handleAddLostItem = async (values: FieldValues) => {
    const toastId = toast.loading("Adding new lost item...");
    try {
      const response = await createLostItem(values).unwrap();
      if (response?.success) {
        toast.success("New lost item added successfully.", {
          id: toastId,
        });
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

  const defaultValues = {
    categoryId: "",
    lostItemName: "",
    description: "",
    phoneNumber: "",
    emailAddress: "imrannaaziremon@gmail.com",
    lostDate: "",
    location: "",
    photo: "",
    isFound: false,
  };

  const categoryOptions =
    categoriesData?.data?.map((category: TCategoryProps) => ({
      label: category?.name,
      value: category?.id,
    })) || [];
  return (
    <DotBackgroundSection>
      <div className="max-w-screen-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  ">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Add Lost Item
        </h2>

        <AppForm
          resolver={zodResolver(addLostItemValidationSchema)}
          defaultValues={defaultValues}
          onSubmit={handleAddLostItem}
        >
          <div className="space-y-2 mt-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <AppSelector
                name="categoryId"
                label="Category"
                options={categoryOptions}
              />
              <AppInput
                name="lostItemName"
                type="text"
                label="Lost Item name"
                placeholder="iPhone 15 pro max"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <AppInput
                name="location"
                type="text"
                label="Lost Address"
                placeholder="Bankra, Jhikorgaca, Jessore."
              />
              <AppDatePicker name="lostDate" label="Lost Date" />
            </div>
            <AppTExtArea
              className="h-[200px]"
              name="description"
              type="text"
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
            <AppButton>Add lost item &rarr;</AppButton>
          </div>
        </AppForm>
      </div>
    </DotBackgroundSection>
  );
};

export default AddLostItemPage;
