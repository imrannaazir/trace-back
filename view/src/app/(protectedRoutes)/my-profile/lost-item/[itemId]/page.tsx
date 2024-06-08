"use client";

import AppButton from "@/components/ui/AppButton";
import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemDetails from "@/components/ui/ItemDetails";
import {
  useGetSingleLostItemQuery,
  useUpdateLostItemMutation,
} from "@/redux/api/lostItem.api";
import { TLostItemProps } from "@/types";
import { toast } from "sonner";

const LostItemDetailsPage = ({ params }: { params: { itemId: string } }) => {
  const { data: lostItemData, isFetching } = useGetSingleLostItemQuery(
    params?.itemId
  );
  const [updateLostItem] = useUpdateLostItemMutation();

  const handleMarkAsFound = async () => {
    const toastId = toast.loading("Marking as found...");
    try {
      const response = await updateLostItem({
        lostItemId: params?.itemId,
        data: { isFound: true },
      }).unwrap();
      if (response?.success) {
        toast.success("Marked as found.", {
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

  const lostItem: TLostItemProps = lostItemData?.data || {};

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-4 space-y-4">
      <AppSectionHeading
        className="text-start items-start"
        title="Lost Item details"
      />
      <ItemDetails
        category={lostItem?.category?.name}
        date={lostItem?.lostDate}
        description={lostItem?.description}
        email={lostItem?.emailAddress}
        imageUrl={lostItem?.photo}
        itemTitle={lostItem?.lostItemName}
        location={lostItem?.location}
        phoneNumber={lostItem?.phoneNumber}
        userEmail={lostItem?.user?.email}
        userImageUrl={lostItem?.user?.profile?.photo as string}
        userName={lostItem?.user?.profile?.name as string}
      />
      <div>
        <AppButton disabled={lostItem?.isFound} onClick={handleMarkAsFound}>
          {lostItem?.isFound ? "Found" : "Mark as Found"}
        </AppButton>
      </div>
    </div>
  );
};

export default LostItemDetailsPage;
