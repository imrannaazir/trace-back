"use client";

import AppButton from "@/components/ui/AppButton";
import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ItemDetails from "@/components/ui/ItemDetails";
import { useGetSingleFoundItemQuery } from "@/redux/api/foundItem.api";
import { TFoundItemProps } from "@/types";
import Link from "next/link";

const FoundItemDetailsPage = ({ params }: { params: { itemId: string } }) => {
  const { data: foundItemData, isFetching } = useGetSingleFoundItemQuery(
    params?.itemId
  );

  const foundItem: TFoundItemProps = foundItemData?.data || {};

  if (isFetching) {
    return <div>Loading...</div>;
  }
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

      {/* buttons */}
      <div className="flex justify-end">
        <Link href={`/add-claim/${foundItem?.id}`}>
          <AppButton className="max-w-[200px]">Claim Ownership</AppButton>
        </Link>
      </div>
    </div>
  );
};

export default FoundItemDetailsPage;
