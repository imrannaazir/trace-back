"use client";

import { useGetSingleClaimQuery } from "@/redux/api/claim.api";

const ClaimedItemDetails = ({ claimId }: { claimId: string }) => {
  const { data: claimDetailsData, isFetching } =
    useGetSingleClaimQuery(claimId);
  if (isFetching) {
    return <div>Loading...</div>;
  }
  return <div>{claimDetailsData?.data?.id}</div>;
};

export default ClaimedItemDetails;
