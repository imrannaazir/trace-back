"use client";
import DotBackgroundSection from "@/components/ui/DotBackgroundSection";
import AppButton from "@/components/ui/AppButton";
import { FieldValues } from "react-hook-form";
import AppForm from "@/components/form/AppForm";
import Divider from "@/components/ui/Divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { addLostItemValidationSchema } from "@/validationSchemas/item.validation";
import AppTExtArea from "@/components/form/AppTextArea";
import UploadImage from "@/components/form/UploadImage";
import AppDatePicker from "@/components/form/AppDatePicker";
import { toast } from "sonner";
import { useCreateLostItemMutation } from "@/redux/api/lostItem.api";
import { useGetSingleFoundItemQuery } from "@/redux/api/foundItem.api";

const AddClaimForm = ({ foundItemId }: { foundItemId: string }) => {
  //  api hooks
  const { data: foundItemData, isFetching } =
    useGetSingleFoundItemQuery(foundItemId);
  const [createLostItem] = useCreateLostItemMutation();

  const handleAddLostItem = async (values: FieldValues) => {
    const toastId = toast.loading("Adding new lost item...");
    try {
      const response = await createLostItem(values).unwrap();
      if (response?.success) {
        toast.success("New lost item added successfully.", {
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
    lostItemName: "",
    description: "",
    phoneNumber: "",
    emailAddress: "imrannaaziremon@gmail.com",
    lostDate: "",
    location: "",
    photo: "",
    isFound: false,
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <DotBackgroundSection>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  ">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Claim Request for - {foundItemData?.data?.foundItemName}
        </h2>

        <AppForm
          resolver={zodResolver(addLostItemValidationSchema)}
          defaultValues={defaultValues}
          onSubmit={handleAddLostItem}
        >
          <div className="space-y-2 mt-4">
            <AppDatePicker name="lostDate" label="Lost Date" />
            <AppTExtArea
              className="h-[200px]"
              name="description"
              label="Description"
              placeholder="Enter distinguishing features..."
            />

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

export default AddClaimForm;
