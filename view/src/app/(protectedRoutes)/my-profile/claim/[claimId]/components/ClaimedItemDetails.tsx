"use client";

import AppSectionHeading from "@/components/ui/AppSectionHeading";
import ClaimDetails from "@/components/ui/ClaimDetails";
import Divider from "@/components/ui/Divider";
import ItemDetails from "@/components/ui/ItemDetails";
import { useGetSingleClaimQuery } from "@/redux/api/claim.api";
import { TClaimProps } from "@/types/claim.types";

const ClaimedItemDetails = ({ claimId }: { claimId: string }) => {
  const { data: claimDetailsData, isFetching } =
    useGetSingleClaimQuery(claimId);
  const claimRequest: TClaimProps = claimDetailsData?.data;
  const foundItem = claimDetailsData?.data?.foundItem || {};

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <div className="space-y-4 my-4">
      <AppSectionHeading
        className="text-start items-center"
        title="Claimed Report details"
      />
      <ClaimDetails
        date={claimRequest?.lostDate}
        description={claimRequest?.distinguishingFeatures}
        imageUrl={claimRequest?.photo}
        phoneNumber={claimRequest?.user?.profile?.phoneNumber as string}
        status={claimRequest?.status}
        userEmail={claimRequest?.user?.email}
        userImageUrl={claimRequest?.user?.profile?.photo || ""}
        userName={`${claimRequest?.user?.profile?.name}`}
      />
      <Divider />
      <AppSectionHeading
        className="text-start items-start"
        title="Claimed Item details"
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

export default ClaimedItemDetails;
