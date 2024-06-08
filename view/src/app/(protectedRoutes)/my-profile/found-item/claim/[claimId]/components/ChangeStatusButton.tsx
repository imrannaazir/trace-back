"use client";
import AppForm from "@/components/form/AppForm";
import AppSelector from "@/components/form/AppSelector";
import AppButton from "@/components/ui/AppButton";
import {
  useChangeClaimStatusMutation,
  useGetSingleClaimQuery,
} from "@/redux/api/claim.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ChangeStatusButton = ({ claimId }: { claimId: string }) => {
  //  api hooks
  const { data: claimDetailsData, isFetching } =
    useGetSingleClaimQuery(claimId);
  const [changeStatus] = useChangeClaimStatusMutation();

  const handleChangeStatus = async (values: FieldValues) => {
    const toastId = toast.loading("Changing status...");
    try {
      const response = await changeStatus({
        claimId,
        status: values?.status,
      }).unwrap();
      if (response?.success) {
        toast.success("Status has been changed.", {
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
  const values = [
    { label: "REJECTED", value: "REJECTED" },
    { label: "APPROVED", value: "APPROVED" },
  ];

  if (isFetching) {
    return <div>loading...</div>;
  }
  return (
    <AppForm
      resolver={zodResolver(
        z.object({
          status: z.string(),
        })
      )}
      defaultValues={{ status: claimDetailsData?.data?.status || "APPROVED" }}
      onSubmit={handleChangeStatus}
    >
      <AppSelector name="status" label="Status" options={values} />

      <AppButton>Change Status &rarr;</AppButton>
    </AppForm>
  );
};

export default ChangeStatusButton;
