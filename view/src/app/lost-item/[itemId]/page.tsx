"use client";

import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemDetails from "@/components/ui/ItemDetails";
import { useGetSingleLostItemQuery } from "@/redux/api/lostItem.api";
import { TLostItemProps } from "@/types";

const LostItemDetailsPage = ({ params }: { params: { itemId: string } }) => {
  const { data: lostItemData, isFetching } = useGetSingleLostItemQuery(
    params?.itemId
  );

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
    </div>
  );
};

export default LostItemDetailsPage;
