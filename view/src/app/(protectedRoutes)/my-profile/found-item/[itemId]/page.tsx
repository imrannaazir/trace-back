"use client";

import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemDetails from "@/components/ui/ItemDetails";
import { useGetSingleFoundItemQuery } from "@/redux/api/foundItem.api";
import { TFoundItemProps } from "@/types";

const FoundItemDetailsPage = ({ params }: { params: { itemId: string } }) => {
  const { data: foundItemData, isFetching } = useGetSingleFoundItemQuery(
    params?.itemId
  );

  console.log(foundItemData);
  const foundItem: TFoundItemProps = foundItemData?.data || {};

  return (
    <div className="my-4 space-y-4">
      <AppSectionHeading
        className="text-start items-start"
        title="Found Item details"
      />
      <ItemDetails
        category={foundItem?.category?.name}
        date={foundItem?.foundDate}
        description={foundItem?.description}
        email={foundItem?.emailAddress}
        imageUrl={foundItem?.photo}
        itemTitle={foundItem?.foundItemName}
        location={foundItem?.location}
        phoneNumber={foundItem?.phoneNumber}
        userEmail={foundItem?.user?.email}
        userImageUrl={foundItem?.user?.profile?.photo as string}
        userName={foundItem?.user?.profile?.name as string}
      />
    </div>
  );
};

export default FoundItemDetailsPage;
