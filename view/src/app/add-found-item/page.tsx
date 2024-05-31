"use client";
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

const AddFoundItem = () => {
  const handleAddFoundItem = async (values: FieldValues) => {
    console.log(values);
  };

  const defaultValues = {
    categoryId: "",
    itemName: "",
    description: "",
    phoneNumber: "",
    emailAddress: "",
    foundDate: "",
    foundAddress: "",
    photo: "",
  };
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
            <UploadImage
              fieldName="media"
              setValue={() => {}}
              fieldValue={""}
            />
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <AppInput
                name="itemName"
                type="text"
                label="Item name"
                placeholder="iPhone 15 pro max"
              />
              <AppInput
                name="categoryId"
                type="text"
                label="Category"
                placeholder="Mobile"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <AppInput
                name="foundLocation"
                type="text"
                label="Found Address"
                placeholder="Bankra, Jhikorgaca, Jessore."
              />
              <AppInput
                name="foundDate"
                type="date"
                label="Found Date"
                placeholder=""
              />
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
            <Divider />
            <AppButton>Add found item &rarr;</AppButton>
          </div>
        </AppForm>
      </div>
    </DotBackgroundSection>
  );
};

export default AddFoundItem;
